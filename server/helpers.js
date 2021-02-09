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

const customerCPrice = (fee, items) => {
  const basePrice = items.length * fee;
  let valueAccumulator = 0;
  for (const item of items) {
    valueAccumulator += parseInt(item['value']);
  }
  const valueSurchage = valueAccumulator * 0.05;
  const finalPrice = basePrice + valueSurchage;
  return finalPrice;
};

const customerDVolume = (fee, items) => {
  const basePrice = items.length * fee;
  let volumeAccumulator = 0;
  for (const item of items) {
    volumeAccumulator +=
      parseInt(item['length']) *
      parseInt(item['height']) *
      parseInt(item['width']);
  }
  const grossCharges = volumeAccumulator * 2 + basePrice;
  return grossCharges;
};

module.exports = {
  customerAPrice,
  customerBPrice,
  customerCPrice,
  customerDVolume,
};
