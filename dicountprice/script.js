const promoCodeInputElem = document.getElementById('promoCode');
const finalPriceElem = document.getElementById('finalPrice');
const promoFormElem = document.getElementById('promoForm');
const basePriceValue = 50;
finalPriceElem.textContent = `Ticket Price: $${basePriceValue}`;

function applyDiscount(basePrice, userCode) {
  const discountRate = userCode.toUpperCase() === "HALF" ? 0.5 : 0;
  const finalPrice = basePrice - basePrice * discountRate;
  return finalPrice;
}

function updateFinalPrice(finalPrice) {
  finalPriceElem.textContent = `Final Ticket Price: $${finalPrice}`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const userCode = promoCodeInputElem.value;
  const finalPrice = applyDiscount(basePriceValue, userCode);

  if (finalPrice < basePriceValue) {
    updateFinalPrice(finalPrice);
    promoCodeInputElem.placeholder = '';
  } else {
    promoCodeInputElem.placeholder = 'Invalid Promo Code!';
  }

  promoCodeInputElem.value = '';
}

promoFormElem.addEventListener('submit', handleFormSubmission);