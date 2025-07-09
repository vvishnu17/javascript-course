let cartQuantity = 0;
function incrementCart(increment) {
  cartQuantity += increment;
  console.log(`Cart Quantity: ${cartQuantity}`);
}
function resetCart() {
  cartQuantity = 0;
  console.log("Cart Quantity: 0");
}
function showCart() {
  console.log(`Cart Quantity: ${cartQuantity}`);
}
