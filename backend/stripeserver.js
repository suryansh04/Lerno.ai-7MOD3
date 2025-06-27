import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { createCheckoutSession } from "./backend/payment.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/api/create-checkout-session", createCheckoutSession);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
