const cartContainer = document.getElementById("cart-container");

function renderCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartContainer.innerHTML = "";
  cart.forEach((user) => {
    const card = document.createElement("div");
    card.classList.add("user-card");
    card.innerHTML = `
            <h3>${user.name}</h3>
            <p>${user.email}</p>
            <button onclick="deleteFromCart(${user.id})">Delete</button>
        `;
    cartContainer.appendChild(card);
  });
}

function deleteFromCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter((user) => user.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

window.onload = renderCart;
