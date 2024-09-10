import express, { json } from "express";
import morgan from "morgan"; // Lägg till denna rad
import { readFileSync } from "fs";
import { createServer } from "https";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(morgan("combined")); // Lägg till denna rad för att logga all trafik
app.use(json());

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

createServer(
  {
    key: readFileSync(resolve(__dirname, "certs/server.key")),
    cert: readFileSync(resolve(__dirname, "certs/server.crt")),
  },
  app
).listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on https://localhost:${PORT}`);
});
