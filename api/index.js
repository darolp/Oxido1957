const morgan = require('morgan');
const express = require('express');
const mercadoPago = require('mercadopago')
require('dotenv').config();
const server = express();

server.use(express.json())
server.use(morgan('dev'))

//cors
server.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next()
})

//mercado pago
mercadoPago.configure({ access_token: process.env.MERCADOPAGO_KEY })
server.post('/payment', (req, res) => {
  const products = req.body;
  let preference = {
    items: products,
    back_urls: {
      success: 'https://oxidoropa.com/checkout',
      faliure: '',
      pending: '',
    },
    auto_return: 'approved',
    binary_mode: true
  }
  mercadoPago.preferences.create(preference).then((response) => res.status(200).send({response})).catch((error)=>res.status(400).send({error: error.message}))
})

//server
server.listen('https://oxido1957-he5g.vercel.app', () => {
  console.log('is running')
})

module.exports = server