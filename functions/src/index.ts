import express from "express";
import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

admin.initializeApp();
const db = admin.firestore();

const app = express();
app.use(express.json());

app.post("/callback", async (req, res) => {
  const callbackData = req.body;
  console.log("Callback data:", callbackData);

  try {
    const docRef = await db.collection("payments").add(callbackData);

    console.log("Callback data saved with ID:", docRef.id);

    if (callbackData.transactionStatus === "COMPLETED") {
      console.log("Betalning slutförd");
    } else {
      console.log("Anropet indikerade ett problem:", callbackData);
    }

    res.sendStatus(200);
  } catch (error) {
    console.error("Error saving callback data:", error);
    res.sendStatus(500);
  }
});

exports.api = functions.https.onRequest(app);
