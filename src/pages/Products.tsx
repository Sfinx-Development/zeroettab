import { Box, keyframes, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getProductAsync, Product } from "../slices/productSlice";
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

export default function Products() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const products = useAppSelector((state) => state.productSlice.products);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // const cart = useAppSelector((state) => state.cartSlice.cart);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleNavigateToDetail = (product: Product) => {
    // dispatch(setActiveProduct(product));
    console.log("ID ÄR : ", product.id);
    dispatch(getProductAsync(product.id)).then(() => {
      navigate("/product-detail");
    });
  };

  // useEffect(() => {
  //   dispatch(getProductsAsync());
  // });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const handleAddToCart = (product: Product) => {
  //   if (cart) {
  //     const itemExists = cart.items.find((i) => i.product_id == product.id);
  //     console.log("ITEM : ", itemExists);
  //     if (itemExists != null) {
  //       const itemQuantity = itemExists.quantity + 1;
  //       const updatedItem = {
  //         ...itemExists,
  //         quantity: itemQuantity,
  //       };
  //       dispatch(updateItem(updatedItem));
  //     } else {
  //       const newItem = {
  //         id: new Date().toISOString(),
  //         cart_id: cart.id,
  //         product_id: product.id,
  //         quantity: 1,
  //         price: product.price,
  //         size: size
  //       };
  //       dispatch(addItem(newItem));
  //     }
  //   } else {
  //     const newCart = {
  //       id: new Date().toISOString(),
  //       created_date: new Date().toISOString(),
  //       items: [
  //         {
  //           id: new Date().toISOString(),
  //           cart_id: new Date().toISOString(),
  //           product_id: product.id,
  //           quantity: 1,
  //           price: product.price,
  //         },
  //       ],
  //     };
  //     dispatch(setCart(newCart));
  //   }
  // };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 0,
        margin: 0,
        width: "100%",
        alignItems: "center",
        // flexGrow: 1,
        backgroundColor: "white",
        minHeight: "100vh",
        zIndex: 1,
        animation: `${fadeIn} 1s ease-out`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          paddingY: 4,
          width: "100%",
        }}
      >
        <Typography
          sx={{ letterSpacing: 2, fontSize: 26, mb: 2, color: "#333" }}
        >
          Produkter kommer snart!
        </Typography>
        <Typography sx={{ fontSize: 16, color: "#777", mb: 4 }}>
          Vi jobbar med att få upp produkter här inom en snar framtid. Håll ut!
        </Typography>
      </Box>
      {/* <Grid
        container
        spacing={3}
        sx={{ padding: 3 }}
        style={{ backgroundColor: "white", height: "100%" }}
      >
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Box
              sx={{
                maxWidth: 345,
                margin: "auto",
                transition: "0.3s",
                boxShadow: "0 8px 40px -12px rgba(0,0,0,0)",
                "&:hover": {
                  boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
                },
              }}
            >
              <img
                onClick={() => handleNavigateToDetail(product)}
                src={product.imageUrl}
                alt={product.name}
                style={{ width: "100%" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {product.description}
                </Typography>
              </CardContent>
              <Typography variant="h6" color="textPrimary">
                {product.price} SEK
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid> */}
    </Box>
  );
}
