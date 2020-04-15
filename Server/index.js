const express = require("express");
const axios = require("axios");
const fs = require('fs')

const app = express();
const port = 3000;

app.get("/block/:block", (req, res) => {
  const url = `https://blockchain.info/rawblock/${req.params.block}`;
  
  axios.get(url).then((block) => {
    const { data } = block;
    //console.log(data);

    /*let height = data.height;
    let hash = data.hash;
    let date = data.time;
    let transaction = data.tx[0].hash;
    fs.readFile('../index.html','utf8', (err, datas) => {
      if (err) throw err
      res.writeHead(200, {
        'content-type' : 'text/html; charset=utf-8'
      });
      height = datas.replace('{{ height }}', height);
      hash = datas.replace('{{ height }}', hash);
      date = datas.replace('{{ height }}', date);
      transaction = datas.replace('{{ height }}', transaction);
      
      res.end({height, hash, date, transaction});
    })*/
    res.send(
      `La hauteur est: ${data.height} Hachage: ${data.hash} Date: ${data.time} ID Transaction: ${data.tx.map(d => d.hash)}`
    );
  });
});

app.listen(
  port,
  console.log(`Le serveur est lancé sur http://localhost:${port}`)