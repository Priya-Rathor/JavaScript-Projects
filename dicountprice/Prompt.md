 ## Debud, get FeedBack, and Improve YOur code

 ## Prompt 1
 i 'm having an issue running my javaScript code. Here's the error message I'm getting :

 " !typeError: Cannot set properties of null(Setting 'textConstent)'"

 Please help me understand what's wrong.

 ## Prompt 2

 I'm having issues with my javaScript code . submitting the promo form refreshes the page and does not ru the following code as epected:

 promoForm.addEventListener('submit', function(event) {
  var userCode = promoCodeInput.value;
  var finalPrice = applyDiscount(basePrice, userCode);

  if (finalPrice < basePrice) {
    finalPriceElement.textContent = `Final Tickets Price: $${finalPrice}`;
    promoCodeInput.disabled = true;
  } else {
    promoCodeInput.placeholder = 'Invalid Promo Code!'
  }
  promoCodeInput.value = '';
});
```

Could you help me debug and fix this?

## prompt 3  

i'm having trouble with this 'applyDisscount' function .IT isn't corrently applying a 50% discount only when with i enter the code "HALF"

###

###

Could you help me debug and fix this function?


## Prompt 4

This javaScript code works as expected , but I  think it could be made more efficient and modern .
Please provide a more streamlined and up-to-date version of this code.


  // Get the elements from the HTML that we'll need to interact with
var promoCodeInput = document.getElementById('promoCode');
var finalPriceElement = document.getElementById('finalPrice');
var promoForm = document.getElementById('promoForm'); 
var basePrice = '50';  // base ticket price

finalPriceElement.textContent = `Ticket Price: $${basePrice}`;  // initially display the base ticket price

// Calculate the discount based on the user's promo code
function applyDiscount(basePrice, userCode) {
  var discountRate = 0;  // default discount rate is 0%
  if (userCode ==="HALF") {  // if the user enters "HALF", set discount rate to 50%
    discountRate = 0.5;
  }
  var finalPrice = basePrice - basePrice * discountRate;  // calculate the final price after applying the discount
  return finalPrice;
}

// When the user submits the form (after entering their promo code)
promoForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior    
    
  var userCode = promoCodeInput.value;  // get the user's entered promo code
  var finalPrice = applyDiscount(basePrice, userCode);  // calculate the final price using the entered promo code
  
  if (finalPrice < basePrice) {  // if the final price is less than the base price (meaning a discount was applied)
    finalPriceElement.textContent = `Final Ticket Price: $${finalPrice}`;  // update the display to show the discounted price
    promoCodeInput.placeholder = '';  // clear the input placeholder
  } else {  // if no discount was applied
    promoCodeInput.placeholder = 'Invalid Promo Code!';  // show an error message in the input placeholder
  }
  promoCodeInput.value = '';  // clear the input field for the next use
});


## Prompt 5 

You are a senior developer reviewing my javaScript code before I ship it to production . Please provide feedback on how i can improve this code . make it more maintainable, and handle cases where a user enters the promo code in lowercase.


var promoCodeInput = document.getElementById('promoCode');
var finalPriceElement = document.getElementById('finalPrice');
var promoForm = document.getElementById('promoForm'); 
var basePrice = '50';

finalPriceElement.textContent = `Ticket Price: $${basePrice}`;
function applyDiscount(basePrice, userCode) {
  var discountRate = 0;
  if (userCode === "HALF") {
    discountRate = 0.5;
  }
  var finalPrice = basePrice - basePrice * discountRate;
  return finalPrice;
}

promoForm.addEventListener('submit', function(event) {
  event.preventDefault(); 
    
  var userCode = promoCodeInput.value;
  var finalPrice = applyDiscount(basePrice, userCode);
  
  if (finalPrice < basePrice) {
    finalPriceElement.textContent = `Final Ticket Price: $${finalPrice}`;
    promoCodeInput.placeholder = '';
  } else {
    promoCodeInput.placeholder = 'Invalid Promo Code!';
  }
  promoCodeInput.value = '';
});

