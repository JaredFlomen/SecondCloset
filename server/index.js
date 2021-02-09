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
    const price = helpers.customerBPrice(fee, items);
    res.send(JSON.stringify(price));
  } else if (customer === 'C') {
    const price = helpers.customerCPrice(fee, items);
    res.send(JSON.stringify(price));
  } else if (customer === 'D') {
    const grossCharge = helpers.customerDVolume(fee, items);
    if (items.length <= 100) {
      const discount = grossCharge * 0.05;
      const finalPrice = grossCharge - discount;
      res.send(JSON.stringify(finalPrice));
    } else if (items.length <= 200) {
      const firstDiscount = fee * 100 * 0.05;
      const secondDiscount = items.length - 100 * fee * 0.1;
      const finalPrice = grossCharge - firstDiscount - secondDiscount;
      res.send(JSON.stringify(finalPrice));
    } else {
      const firstDiscount = fee * 100 * 0.05;
      const secondDiscount = fee * 100 * 0.1;
      const thirdDiscount = items.length - 200 * fee * 0.15;
      const finalPrice =
        grossCharge - firstDiscount - secondDiscount - thirdDiscount;
      res.send(JSON.stringify(finalPrice));
    }
  } else {
    res.send(JSON.stringify('Not a valid customer'));
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
