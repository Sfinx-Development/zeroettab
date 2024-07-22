import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  keyframes,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getProductAsync,
  getProductsAsync,
  Product,
} from "../slices/productSlice";
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
  const products = useAppSelector((state) => state.productSlice.products);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleNavigateToDetail = (product: Product) => {
    // dispatch(setActiveProduct(product));
    dispatch(getProductAsync(product.id));
    navigate("/product-detail");
  };

  useEffect(() => {
    dispatch(getProductsAsync());
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 0,
        margin: 0,
        width: "100%",
        alignItems: "center",
        flexGrow: 1,
        backgroundColor: "black",
        minHeight: "100vh",
        zIndex: 1,
        animation: `${fadeIn} 1s ease-out`,
      }}
    >
      <Box
        sx={{
          backgroundColor: "black",
          display: "flex",
          width: "100%",
          justifyContent: "space-around",
          alignItems: "center",
          padding: 2,
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            margin: 2,
          }}
        >
          <img
            src={"https://i.imgur.com/sbMjvxp.png"}
            alt="Tshirt"
            style={{
              height: 300,
              width: "auto",
              borderRadius: 8,
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
              transition: "transform 0.3s ease",
            }}
          />
          <Typography sx={{ color: "white", padding: 2 }}>
            Något här om att Zeroett även har kläder
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            margin: 2,
          }}
        >
          <img
            src={"https://i.imgur.com/H7vLh5J.png"}
            alt="Girl with tshirt"
            style={{
              height: 300,
              width: "auto",
              borderRadius: 8,
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
              transition: "transform 0.3s ease",
            }}
          />
          <Typography sx={{ color: "white", padding: 2 }}>
            Upptäck vår senaste kollektion
          </Typography>
        </Box>
      </Box>

      <Typography
        variant="h4"
        sx={{ color: "white", margin: 4, textAlign: "center" }}
      >
        Våra Produkter
      </Typography>

      <Grid container spacing={3} sx={{ padding: 3 }}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card
              sx={{
                maxWidth: 345,
                margin: "auto",
                transition: "0.3s",
                boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
                "&:hover": {
                  boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
                },
              }}
            >
              <CardMedia
                component="img"
                alt={product.name}
                height="140"
                image={"https://i.imgur.com/sbMjvxp.png"}
                title={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {product.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => handleNavigateToDetail(product)}
                >
                  Köp nu
                </Button>
                <Typography variant="h6" color="textPrimary">
                  {product.amount} SEK
                </Typography>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
