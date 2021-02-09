//Simple web server
const express = require('express');
const PORT = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.post('/api', (req, res) => {
  const { fee, customer, items } = req.body;
  if (customer === 'A') {
    const basePrice = items.length * fee;
    const discount = basePrice * 0.1;
    const finalPrice = basePrice - discount;
    res.send(JSON.stringify(finalPrice));
  } else if (customer === 'B') {
    const basePrice = items.length * fee;
    let volumeAccumulator = 0;
    for (const item of items) {
      volumeAccumulator += item['length'] * item['height'] * item['width'];
    }
    const finalprice = basePrice + volumeAccumulator;
    res.send(JSON.stringify(finalprice));
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
