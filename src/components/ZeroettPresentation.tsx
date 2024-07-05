import { Box, Link, Typography } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { FormattedMessage } from "react-intl";
// import LetsTalk from "./LetsTalk";
import { useScreenSize } from "../contexts/screenSizeContext";

export default function ZeroettPresentation() {
  const { isMobile } = useScreenSize();
  const logoRef = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start({
              opacity: 1,
              scale: 1,
              y: 0,
              transition: { duration: 1, ease: "easeOut" },
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (logoRef.current) {
      observer.observe(logoRef.current);
    }

    return () => {
      if (logoRef.current) {
        observer.unobserve(logoRef.current);
      }
    };
  }, [controls]);

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        margin: 0,
        minHeight: 400,
        alignItems: "center",
        justifyContent: "center",
        flexGrow: 1,
        zIndex: 1,
      }}
    >
      <Box
        component={motion.div}
      // <motion.div
        ref={logoRef}
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={controls}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          borderRadius: 2,
          padding: { xs: 0, md: 4 },
          margin: "auto",
          zIndex: 2,
        }}
      >
        <Box
          sx={{ flex: 1, padding: 2, textAlign: { xs: "center", md: "left" } }}
        >
          <Box
            sx={{
              paddingY: 2,
              paddingX: { xs: 0, md: 0 },
              marginX: { xs: 0, md: 1 },
              display: "flex",
              justifyContent: isMobile ? "center" : "center",
              width: isMobile ? "100%" : "auto",
              marginLeft: isMobile ? 0 : 0,
            }}
          >
            <Link href="/" sx={{ textDecoration: "none" }}>
              <img
                src={
                  isMobile
                    ? "https://i.imgur.com/IMSL19B.png"
                    : "https://i.imgur.com/5Fk6tu4.png"
                }
                alt="Zeroett"
                width={isMobile ? 100 : 600}
                style={{ marginBottom: isMobile ? 16 : 0 }}
              />
            </Link>
          </Box>
          <Typography
            variant="h6"
            sx={{
              marginTop: 2,
              // marginLeft: 3,
              lineHeight: 1.8,
            
              color: "white",
              fontWeight: "300",
              justifyContent: "center",
          
               display: isMobile ? "block" : "none",
           
            
            }}
          >
            <FormattedMessage id="zeroett-offers" />
          </Typography>
        </Box>
        </Box>
      {/* </motion.div> */}
    </Box>
  );
}


// import React, { useState, useEffect, useRef } from 'react';
// import { Box, Link, Typography } from "@mui/material";
// import { motion, useAnimation } from "framer-motion";
// import { FormattedMessage } from "react-intl";
// import LetsTalk from "./LetsTalk";
// import { useScreenSize } from "../contexts/screenSizeContext";


// export default function ZeroettPresentation() {
//   const { isMobile } = useScreenSize();
//   const logoRef = useRef<HTMLDivElement | null>(null);
//   const controls = useAnimation();

//   const [showLogo, setShowLogo] = useState(true);

//   useEffect(() => {
//     if (!isMobile) {
//       const interval = setInterval(() => {
//         setShowLogo((prevShowLogo: unknown) => !prevShowLogo);
//       }, 3000);
//       return () => clearInterval(interval);
//     }
//   }, [isMobile]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             controls.start({
//               opacity: 1,
//               scale: 1,
//               y: 0,
//               transition: { duration: 1, ease: "easeOut" },
//             });
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     if (logoRef.current) {
//       observer.observe(logoRef.current);
//     }

//     return () => {
//       if (logoRef.current) {
//         observer.unobserve(logoRef.current);
//       }
//     };
//   }, [controls]);

//   return (
//     <Box
//       sx={{
//         position: "relative",
//         display: "flex",
//         flexDirection: "column",
//         margin: 0,
//         minHeight: 400,
//         alignItems: "center",
//         justifyContent: "center",
//         flexGrow: 1,
//         zIndex: 1,
//       }}
//     >
//       <motion.div
//         ref={logoRef}
//         initial={{ opacity: 0, scale: 0.8, y: 20 }}
//         animate={controls}
//         sx={{
//           display: "flex",
//           flexDirection: { xs: "column", md: "row" },
//           alignItems: "center",
//           borderRadius: 2,
//           padding: { xs: 0, md: 4 },
//           margin: "auto",
//           zIndex: 2,
//         }}
//       >
//         <Box
//           sx={{ flex: 1, padding: 2, textAlign: { xs: "center", md: "left" } }}
//         >
//           <Box
//             sx={{
//               paddingY: 2,
//               paddingX: { xs: 0, md: 0 },
//               marginX: { xs: 0, md: 1 },
//               display: "flex",
//               justifyContent: "center",
//               width: isMobile ? "100%" : "auto",
//               marginLeft: isMobile ? 0 : 0,
//             }}
//           >
//             {!isMobile && showLogo ? (
//               <Link href="/" sx={{ textDecoration: "none" }}>
//                 <img
//                   src="https://i.imgur.com/5Fk6tu4.png"
//                   alt="Zeroett"
//                   width={600}
//                   style={{ marginBottom: 0 }}
//                 />
//               </Link>
//             ) : null}
//           </Box>
//           {!isMobile && !showLogo ? (
//             <Typography
//               variant="h6"
//               sx={{
//                 marginTop: 2,
//                 lineHeight: 1.8,
//                 color: "white",
//                 fontWeight: "300",
//                 justifyContent: "center",
//                 textAlign: "center",
//               }}
//             >
//               <FormattedMessage id="zeroett-offers" />
//             </Typography>
//           ) : null}
//           {isMobile && (
//             <Typography
//               variant="h6"
//               sx={{
//                 marginTop: 2,
//                 lineHeight: 1.8,
//                 color: "white",
//                 fontWeight: "300",
//                 justifyContent: "center",
//                 textAlign: "center",
//                 display: "block",
//               }}
//             >
//               <FormattedMessage id="zeroett-offers" />
//             </Typography>
//           )}
//         </Box>
//       </motion.div>
//     </Box>
//   );
// }
