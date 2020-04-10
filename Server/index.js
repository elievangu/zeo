const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

app.get("/block/:block", (req, res) => {
  const url = `https://blockchain.info/rawblock/${req.params.block}`;
  
  axios.get(url).then((block) => {
    const { data } = block;
    console.log(data);
    res.send(
      `La hauteur est: ${data.height} Hachage: ${data.hash} Date: ${data.time} ID Transaction: ${data.tx[0].hash}`
    );
  });
});

app.listen(
  port,
  console.log(`Le serveur est lancé sur http://localhost:${port}`)
);
