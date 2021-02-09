//Simple web server
const express = require('express');
const PORT = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.post('/api', (req, res) => {
  const { fee, customer, items } = req.body;
  res.status(200).send('Received');
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
