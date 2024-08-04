import AppsIcon from "@mui/icons-material/Apps";
import LanguageIcon from "@mui/icons-material/Language";
import StorageIcon from "@mui/icons-material/Storage";
import { Box, Button, Grid, keyframes, Typography } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import LetsTalk from "../components/LetsTalk";
import TextInfo from "../components/TextInfo";
import ZeroettPresentation from "../components/ZeroettPresentation";
import { useScreenSize } from "../contexts/screenSizeContext";

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

export default function Index() {
  const navigate = useNavigate();
  const iconsRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);
  const { isMobile } = useScreenSize();

  useEffect(() => {
    const handleScroll = () => {
      if (iconsRef.current) {
        const top = iconsRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start((i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.2 },
      }));
    }
  }, [isVisible, controls]);
  // const dispatch = useAppDispatch();
  // const addProducts = () => {
  //   const exampleProduct: Product = {
  //     id: "1233",
  //     name: "Clean Hoodie",
  //     description: "A clean and simple Hoodie",
  //     price: 199,
  //     in_store: true,
  //     weight: 0.2,
  //     length: 70,
  //     width: 50,
  //     height: 1,
  //     color: "Black",
  //     sizes: [
  //       { label: "S", amount: 4 },
  //       { label: "M", amount: 3 },
  //       { label: "L", amount: 2 },
  //       { label: "XL", amount: 2 },
  //     ],
  //     material: "Cotton",
  //     rabatt: 0,
  //     launch_date: "2023-08-15",
  //     imageUrl:
  //       "data:image/jpeg;base64,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",
  //   };
  //   dispatch(addProductAsync(exampleProduct));
  // };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 0,
        margin: 0,
        overflowX: "hidden",
        width: "100%",
        alignItems: "start",
        flexGrow: 1,
        minHeight: "100vh",
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          padding: 0,
          margin: 0,
          height: "auto",
          width: "100%",
          alignItems: "start",
          zIndex: 1,
        }}
      >
        {/* <Button onClick={addProducts}>LÄGG TILL</Button> */}
        <Box
          sx={{
            flex: 1,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ZeroettPresentation />
          {!isMobile && <LetsTalk />}

          {/* <Gallery /> */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
            }}
          >
            <TextInfo
              title="web-applications"
              text="we-design"
              icon={LanguageIcon}
              href={"/offers"}
            />
            <TextInfo
              title="mobile-applications"
              text="building-apps"
              icon={AppsIcon}
              href={"/offers"}
            />
            <TextInfo
              title="backend-solutions"
              text="robust-and"
              icon={StorageIcon}
              href={"/offers"}
            />
          </Box>
        </Box>
      </Box>
      <Grid
        container
        item
        xs={10}
        md={8}
        lg={6}
        justifyContent="center"
        alignItems="center"
        sx={{
          flexDirection: "row",
          marginBottom: 4,
          minWidth: { xs: "100%", md: "90%" },
          marginLeft: { xs: 0, md: 20 },
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "start" },
            flex: 1,
            width: "100%",
            // backgroundColor: "rgba(0, 0, 0, 0.7)",
            borderRadius: 2,
            padding: 4,
            // boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
            maxWidth: "100%",
            margin: "auto",
            animation: `${fadeIn} 1s ease-out`,
            animationDelay: "0.5s",
            animationFillMode: "forwards",
            opacity: 0,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "white",
              letterSpacing: 3,
              marginBottom: { xs: 2, md: 1 },
              fontWeight: "300",
              fontSize: { xs: 35, md: 50 },
              textAlign: { xs: "center", md: "start" },
            }}
          >
            <FormattedMessage id="tell-us" />
          </Typography>
          <div
            style={{
              height: 2,
              width: 250,
              backgroundColor: "#896daf",
              marginBottom: 1,
            }}
          />
          <Typography
            variant="body1"
            sx={{
              color: "white",
              letterSpacing: 2,
              marginY: { xs: 2, md: 1 },
              fontWeight: "300",
              textAlign: { xs: "center", md: "start" },
            }}
          >
            <FormattedMessage id="we-assist" />
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "white",
              letterSpacing: 2,
              marginBottom: 1,
              fontWeight: "300",
              textAlign: { xs: "center", md: "start" },
            }}
          >
            <FormattedMessage id="tell-us-2" />
          </Typography>
          <Button
            onClick={() => {
              navigate("/contact");
            }}
            variant="contained"
            sx={{
              backgroundColor: "#662c9c",
              "&:hover": {
                backgroundColor: "#422a75",
              },
            }}
          >
            <FormattedMessage id="contact" />
          </Button>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "start" },
            alignItems: { xs: "center", md: "start" },
          }}
        >
          <motion.img
            src="https://i.imgur.com/LWnnKCt.png"
            alt="lightbulb"
            height="300px"
            width="300px"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
