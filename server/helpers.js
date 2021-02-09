const customerAPricing = (fee, items) => {
  const basePrice = items.length * fee;
  const discount = basePrice * 0.1;
  const finalPrice = basePrice - discount;
  return finalPrice;
};

modeule.exports = { customerAPricing };
