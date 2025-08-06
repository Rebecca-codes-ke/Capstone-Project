let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(productName, price) {
  const item = { name: productName, price: price };
  cart.push(item);
  saveCart();
  alert(`${productName} has been added to your cart. (KSh ${price})`);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  if (!cartItems || !cartTotal) return;

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.name} - KSh ${item.price} <button onclick="removeFromCart(${index})">Remove</button>`;
    cartItems.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = `Total: KSh ${total}`;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  updateCart();
}

document.addEventListener("DOMContentLoaded", updateCart);

function showConfirmation(event) {
  event.preventDefault(); 
  document.getElementById('confirmation').style.display = 'block';
}