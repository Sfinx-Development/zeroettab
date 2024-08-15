import { keyframes } from "@emotion/react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { PaymentOrderOutgoing } from "../../types";
import SeamlessCheckout from "../components/SeamlessCheckout";
import { CartItem, clearCart, updateItem } from "../slices/cartSlice";
import { addOrderAsync, Order, OrderItem } from "../slices/orderSlice";
import { addPaymentOrderOutgoing } from "../slices/paymentSlice";
import { Product, Size, updateProductAsync } from "../slices/productSlice";
import { useAppDispatch, useAppSelector } from "../slices/store";

const fadeIn = keyframes`
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `;

type GroupedCartItem = CartItem & {
  quantity: number;
};

export default function Cart() {
  const cart = useAppSelector((state) => state.cartSlice.cart);
  const products = useAppSelector((state) => state.productSlice.products);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [groupedItems, setGroupedItems] = useState<GroupedCartItem[]>([]);
  // const [checkoutView, setCheckoutView] = useState<string | null>();
  const incomingPaymentOrder = useAppSelector(
    (state) => state.paymentSlice.paymentOrderIncoming
  );
  // useEffect(() => {
  //   if (incomingPaymentOrder) {
  //     const checkoutOperation = incomingPaymentOrder.operations.find(
  //       (o) => o.rel === "view-checkout"
  //     );
  //     if (checkoutOperation) {
  //       setCheckoutView(checkoutOperation.href);
  //       console.log("NU ", checkoutOperation.href);
  //     }
  //   }
  // }, [incomingPaymentOrder]);

  // useEffect(() => {
  //   if (checkoutView) {
  //     const script = document.createElement("script");
  //     script.src = checkoutView;
  //     // script.async = true;
  //     document.body.appendChild(script);

  //     return () => {
  //       document.body.removeChild(script);
  //     };
  //   }
  // }, [checkoutView]);

  useEffect(() => {
    if (cart) {
      const grouped = cart.items.reduce(
        (acc: Record<string, GroupedCartItem>, item) => {
          const key = `${item.product_id}-${item.size}`;
          if (!acc[key]) {
            acc[key] = { ...item, quantity: 0 };
          }
          acc[key].quantity += item.quantity;
          return acc;
        },
        {}
      );

      setGroupedItems(Object.values(grouped));
    }
  }, [cart]);

  function getProduct(productId: string): Product | undefined {
    return products.find((p) => p.id === productId);
  }

  const sizesLeft = (product: Product, cartItem: CartItem) => {
    const size = product.sizes.find((s) => s.label == cartItem.size);
    return size ? size.amount : 0;
  };

  const updatedQuantity = (product: Product): Size[] => {
    const sizeMap: { [key: string]: number } = {};

    cart?.items
      .filter((item) => item.product_id === product.id)
      .forEach((item) => {
        if (sizeMap[item.size]) {
          sizeMap[item.size] += item.quantity;
        } else {
          sizeMap[item.size] = item.quantity;
        }
      });

    return product.sizes.map((size) => {
      const purchasedQuantity = sizeMap[size.label] || 0;
      const updatedQuantity = size.amount - purchasedQuantity;

      return {
        label: size.label,
        amount: updatedQuantity,
      };
    });
  };

  const handleAddToCart = (product: Product, sizeLabel: string) => {
    if (cart) {
      const itemExists = cart.items.find(
        (i) => i.product_id === product.id && i.size === sizeLabel
      );
      if (
        itemExists &&
        product &&
        itemExists.quantity < sizesLeft(product, itemExists)
      ) {
        const updatedItem: CartItem = {
          ...itemExists,
          quantity: itemExists.quantity + 1,
        };
        dispatch(updateItem(updatedItem));
      }
    }
  };

  const handleRemoveFromCart = (product: Product, sizeLabel: string) => {
    if (cart) {
      const itemExists = cart.items.find(
        (i) => i.product_id === product.id && i.size === sizeLabel
      );
      if (itemExists && itemExists.quantity > 0) {
        const updatedItem: CartItem = {
          ...itemExists,
          quantity: itemExists.quantity - 1,
        };
        dispatch(updateItem(updatedItem));
      }
    }
  };

  function generatePayeeReference(isMerchantSettlement: boolean) {
    if (isMerchantSettlement) {
      return Math.floor(100000000000 + Math.random() * 900000000000).toString();
    } else {
      const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let reference = "";
      for (let i = 0; i < 30; i++) {
        reference += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return reference;
    }
  }

  const TESTPAYMENT = (order: Order) => {
    const payeeId = import.meta.env.VITE_SWEDBANK_PAYEEID;
    const paymentOrder: PaymentOrderOutgoing = {
      operation: "Purchase",
      currency: "SEK",
      amount: order.total_amount * 100,
      vatAmount: 5000,
      description: "Test Purchase",
      userAgent: "Mozilla/5.0...",
      language: "sv-SE",
      urls: {
        hostUrls: ["https://localhost:5173/cart"], //Seamless View only
        paymentUrl: "https://localhost:5173/cart", //Seamless View only
        completeUrl: "https://localhost:5173/cart",
        cancelUrl: "https://localhost:5173/cart", //Redirect only
        callbackUrl: "https://localhost:5173/cart",
        logoUrl: "", //Redirect only
      },
      payeeInfo: {
        payeeId: payeeId,
        payeeReference: generatePayeeReference(true),
        payeeName: "Angelina Holmqvist Khalifa",
        orderReference: order.reference,
      },
    };
    dispatch(addPaymentOrderOutgoing(paymentOrder));
  };

  const handleMakeOrder = () => {
    const orderItems = cart?.items.map((item) => {
      const orderItem: OrderItem = {
        id: uuidv4(),
        order_id: uuidv4(),
        product_id: item.product_id,
        quantity: item.quantity,
        price: item.price,
      };
      return orderItem;
    });
    if (orderItems) {
      const totalPrice =
        orderItems?.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        ) || 0;
      const newOrder: Order = {
        id: uuidv4(),
        reference: "or-" + uuidv4(),
        items: orderItems,
        total_amount: totalPrice,
        created_date: new Date().toISOString(),
        status: "Waiting for payment",
      };

      dispatch(addOrderAsync(newOrder));
      products.forEach((p) => {
        const sizeArray = updatedQuantity(p);
        const productToUpdate: Product = {
          ...p,
          sizes: sizeArray,
        };
        dispatch(updateProductAsync(productToUpdate));
      });
      dispatch(clearCart());
      TESTPAYMENT(newOrder);
      // navigate("/orderconfirmation");
    }
  };

  const calculateTotalPrice = () => {
    return cart?.items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        padding: 0,
        margin: 0,
        width: "100%",
        minHeight: "100vh",
        zIndex: 1,
        animation: `${fadeIn} 1s ease-out`,
        backgroundColor: "white",
      }}
    >
      {/* {/* <Button onClick={() => TESTPAYMENT()}>TESTA BETALNING POOST</Button> */}
      {incomingPaymentOrder && <SeamlessCheckout />}
      {cart && cart.items.length == 0 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            paddingY: 2,
            width: "100%",
          }}
        >
          <ShoppingCartIcon sx={{ fontSize: 80, color: "#aaa", mb: 2 }} />
          <Typography
            sx={{ letterSpacing: 2, fontSize: 26, mb: 2, color: "#333" }}
          >
            Varukorgen är tom
          </Typography>
          <Typography sx={{ fontSize: 16, color: "#777", mb: 4 }}>
            Det ser ut som att du inte har lagt till några produkter i din
            varukorg än.
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate("/products")}
            sx={{
              padding: "10px 20px",
              fontSize: 16,
              textTransform: "none",
              borderRadius: 2,
              backgroundColor: "black",
            }}
          >
            <Typography>Fortsätt handla</Typography>
          </Button>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingY: 1,
            width: { xs: "100%", md: "70%" },
            alignItems: "center",
            maxHeight: { xs: "auto", md: "600px" },
            overflowY: "auto",
            marginBottom: 2,
          }}
        >
          {groupedItems.map((item) => {
            const product = getProduct(item.product_id);
            return (
              <Box
                key={`${item.product_id}-${item.size}`}
                sx={{
                  backgroundColor: "white",
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  padding: 2,
                  width: "90%",
                  alignItems: "center",
                  marginBottom: 2,
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  borderRadius: 2,
                }}
              >
                <img
                  src={product?.imageUrl}
                  alt={`Product ${item.product_id}`}
                  style={{ height: 100, width: 80, objectFit: "cover" }}
                />
                <Box
                  sx={{
                    paddingX: { xs: 2, sm: 4 },
                    width: { xs: "100%", sm: "auto" },
                    textAlign: { xs: "center", sm: "left" },
                    marginBottom: { xs: 1, sm: 0 },
                  }}
                >
                  <Typography sx={{ fontSize: 20, marginY: 1 }}>
                    {product?.name}
                  </Typography>
                  <Typography>Storlek: {item?.size}</Typography>
                  <Typography>Färg: {product?.color}</Typography>
                </Box>
                <Box
                  sx={{
                    paddingX: { xs: 2, sm: 4 },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    maxWidth: { sm: "150px" },
                  }}
                >
                  {product && (
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 1,
                      }}
                    >
                      <IconButton
                        onClick={() => handleAddToCart(product, item.size)}
                      >
                        <AddIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => handleRemoveFromCart(product, item.size)}
                      >
                        <RemoveIcon />
                      </IconButton>
                    </Box>
                  )}
                  <Typography>{item.quantity} ST</Typography>
                  <Typography>Pris: {product?.price} SEK</Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      )}

      {cart && cart?.items.length > 0 && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingY: 2,
            width: { xs: "100%", md: "30%" },
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          <Box
            sx={{
              marginBottom: 2,
              width: "90%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">I varukorgen</Typography>
            <Typography>Summa: {calculateTotalPrice()} SEK</Typography>
            <Typography>Frakt: 0 SEK</Typography>
            <Typography sx={{ fontWeight: 500 }}>
              Totalt: {calculateTotalPrice()}
            </Typography>
          </Box>
          <Box sx={{ width: "90%" }}>
            <Button
              fullWidth
              disabled={!cart || cart?.items.length == 0}
              onClick={() => handleMakeOrder()}
              sx={{ padding: 2, backgroundColor: "black", color: "white" }}
            >
              <Typography sx={{ color: "white" }}>Betalning</Typography>
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
}
