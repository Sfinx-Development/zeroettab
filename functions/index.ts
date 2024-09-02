import express from "express";
import * as functions from "firebase-functions";

const app = express();
app.use(express.json());

app.post("/callback", (req, res) => {
  const callbackData = req.body;
  console.log("Callback data:", callbackData);

  if (callbackData.transactionStatus === "COMPLETED") {
    console.log("Betalning slutförd");
  } else {
    console.log("Anropet indikerade ett problem:", callbackData);
  }

  res.sendStatus(200);
});

exports.api = functions.https.onRequest(app);
