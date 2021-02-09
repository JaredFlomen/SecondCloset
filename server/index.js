//Simple web server
const express = require('express');
const PORT = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const helpers = require('./helpers');

app.post('/api', (req, res) => {
  const { fee, customer, items } = req.body;
  if (customer === 'A') {
    const price = helpers.customerAPrice(fee, items);
    res.send(JSON.stringify(price));
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
    if (items.length <= 100) {
      const preDiscount = finalVolumeAccumulator + basePrice;
      const discount = preDiscount * 0.05;
      const finalPrice = preDiscount - discount;
      res.send(JSON.stringify(finalPrice));
    } else if (items.length <= 200) {
      const firstDiscount = fee * 100 * 0.05;
      const secondDiscount = items.length - 100 * fee * 0.1;
      const finalPrice =
        basePrice + finalVolumeAccumulator - firstDiscount - secondDiscount;
      res.send(JSON.stringify(finalPrice));
    } else {
      const firstDiscount = fee * 100 * 0.05;
      const secondDiscount = fee * 100 * 0.1;
      const remainingItems = items.length - 200;
      const thirdDiscount = remainingItems * fee * 0.15;
      const finalPrice =
        basePrice -
        firstDiscount -
        secondDiscount -
        thirdDiscount +
        finalVolumeAccumulator;
      res.send(JSON.stringify(finalPrice));
    }
  } else {
    res.send(JSON.stringify('Not a valid customer'));
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
