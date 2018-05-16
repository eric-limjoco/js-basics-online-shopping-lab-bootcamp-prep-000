var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({
   itemName: item,
   itemPrice: Math.floor(Math.random()*100)
 })
 
 return `${item} has been added to your cart.`
}

function viewCart() {
  if(cart.length === 0) return 'Your shopping cart is empty'
  var res = 'In your cart, you have '
  
  for(var i=0; i<cart.length; i++){
    res += `${cart[i].itemName} at ${cart[i].itemPrice}${i === (cart.length - 1) ? '.':', '}`
    
    if(i === cart.length - 2) res += 'and '
  }
  return res
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
