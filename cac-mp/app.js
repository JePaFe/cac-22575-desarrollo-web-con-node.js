const express = require("express");
const app = express();

const axios = require("axios");

const dotenv = require("dotenv");
dotenv.config();

const mercadopago = require("mercadopago");

mercadopago.configure({
  access_token: process.env.ACCESS_TOKEN,
});

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Mercado Pago");
});

app.get("/sdk/orden", async (req, res) => {
  const preference = {
    items: [
      {
        title: "Test",
        quantity: 1,
        currency_id: "ARS",
        unit_price: 10.5,
      },
    ],
    back_urls: {
      success: `http://localhost:${PORT}/success`,
    },
  };

  try {
    const orden = await mercadopago.preferences.create(preference);
    res.send(orden);
  } catch (error) {
    console.log(error);
  }
});

app.get("/api/orden", async (req, res) => {
  const url = "https://api.mercadopago.com/checkout/preferences";

  const body = {
    items: [
      {
        id: "item-ID-1234",
        title: "Mi producto",
        currency_id: "ARS",
        picture_url: "https://www.mercadopago.com/org-img/MP3/home/logomp3.gif",
        description: "Descripción del Item",
        category_id: "art",
        quantity: 1,
        unit_price: 75.76,
      },
    ],
    back_urls: {
      success: `http://localhost:${PORT}/success`,
    },
  };

  const payment = await axios.post(url, body, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
  });

  res.send(payment.data);
});

app.get("/success", (req, res) => {
  res.send(req.query);
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
