const customerAPrice = (fee, items) => {
  const basePrice = items.length * fee;
  const discount = basePrice * 0.1;
  const finalPrice = basePrice - discount;
  return finalPrice;
};

const customerBPrice = (fee, items) => {
  const basePrice = items.length * fee;
  let volumeAccumulator = 0;
  for (const item of items) {
    volumeAccumulator +=
      parseInt(item['length']) *
      parseInt(item['height']) *
      parseInt(item['width']);
  }
  const finalPrice = basePrice + volumeAccumulator;
  return finalPrice;
};

module.exports = { customerAPrice, customerBPrice };
