//Simple web server
const express = require('express');
const PORT = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

import customerAPricing from './helpers';

app.post('/api', (req, res) => {
  const { fee, customer, items } = req.body;
  if (customer === 'A') {
    customerAPricing(fee, items).then(response =>
      res.send(JSON.stringify(response))
    );
  } else if (customer === 'B') {
    const basePrice = items.length * fee;
    let volumeAccumulator = 0;
    for (const item of items) {
      volumeAccumulator +=
        parseInt(item['length']) *
        parseInt(item['height']) *
        parseInt(item['width']);
    }
    const finalPrice = basePrice + volumeAccumulator;
    res.send(JSON.stringify(finalPrice));
  } else if (customer === 'C') {
    const basePrice = items.length * fee;
    let valueAccumulator = 0;
    for (const item of items) {
      valueAccumulator += parseInt(item['value']);
    }
    const valueSurchage = valueAccumulator * 0.05;
    const finalPrice = basePrice + valueSurchage;
    res.send(JSON.stringify(finalPrice));
  } else if (customer === 'D') {
    const basePrice = items.length * fee;
    let volumeAccumulator = 0;
    for (const item of items) {
      volumeAccumulator +=
        parseInt(item['length']) *
        parseInt(item['height']) *
        parseInt(item['width']);
    }
    const finalVolumeAccumulator = volumeAccumulator * 2;
    let itemAccumulator = 0;
    if (items.length <= 100) {
      const preDiscount = finalVolumeAccumulator + basePrice;
      const discount = preDiscount * 0.05;
      const finalPrice = preDiscount - discount;
      res.send(JSON.stringify(finalPrice));
    } else if (items.length <= 200) {
      ///
    } else {
      ///
    }
  } else {
    res.send(JSON.stringify('Not a valid customer'));
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
