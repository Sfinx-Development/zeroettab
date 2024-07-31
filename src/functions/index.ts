// import * as functions from "firebase-functions";
// import axios from "axios";

// export const createKlarnaOrder = functions.https.onRequest(async (req, res) => {
//   const klarnaApiUrl = "https://api.playground.klarna.com/checkout/v3/orders";
//   const klarnaPublicKey = "your-public-key";
//   const klarnaSecretKey = "your-secret-key";

//   try {
//     const response = await axios.post(klarnaApiUrl, req.body, {
//       auth: {
//         username: klarnaPublicKey,
//         password: klarnaSecretKey,
//       },
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     res.json(response.data);
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       res
//         .status(500)
//         .send(error.response ? error.response.data : error.message);
//     } else {
//       res.status(500).send("An unexpected error occurred.");
//     }
//   }
// });
