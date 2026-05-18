// This is the boilerplate code given for you
// You can modify this code
// Product data
document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
    { id: 4, name: "Product 4", price: 40 },
    { id: 5, name: "Product 5", price: 50 },
  ];

  const productList = document.getElementById("product-list");
  const cartList = document.getElementById("cart-list");
  const clearCartBtn = document.getElementById("clear-cart-btn");

  if (!productList || !cartList || !clearCartBtn) return;

  let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

  function saveCart() {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }

  function renderProducts() {
    productList.innerHTML = "";

    products.forEach((product) => {
      const li = document.createElement("li");
      li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
      productList.appendChild(li);
    });

    document.querySelectorAll(".add-to-cart-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        addToCart(Number(e.target.dataset.id));
      });
    });
  }

  function renderCart() {
    cartList.innerHTML = "";

    cart.forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = `${item.name} - $${item.price} <button class="remove-from-cart-btn" data-id="${item.id}">Remove</button>`;
      cartList.appendChild(li);
    });

    document.querySelectorAll(".remove-from-cart-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        removeFromCart(Number(e.target.dataset.id));
      });
    });
  }

  function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    if (!product) return;

    cart.push(product);
    saveCart();
    renderCart();
  }

  function removeFromCart(productId) {
    cart = cart.filter((item) => item.id !== productId);
    saveCart();
    renderCart();
  }

  function clearCart() {
    cart = [];
    sessionStorage.removeItem("cart");
    renderCart();
  }

  clearCartBtn.addEventListener("click", clearCart);

  renderProducts();
  renderCart();
});