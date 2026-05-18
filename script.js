// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
const productList = document.getElementById("product-list");
const cartlist = document.getElementById("cart-list");
const clearcartBtn = document.getElementById("clear-cart-btn");

//Load cart from sessionStorage
let cartt =JSON.parse(sessionStorage.getItem("cart")) || [];

// Render product list
function renderProducts() {
	productList.innerHTML ="";
	
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

document.querySelectorAll(".Add-to-cart-btn").forEach((btn) => {
	btn.addEventListener("click", (e) => {
	 const productId = Number(e.target.GetAttribute("data-id"));
		addToCart(productId);
	});
});

// Render cart list
function renderCart() {
	cartList.InnerHtml = "";

	cart.forEach((item, index) => {
		const li =document.createElement("li");
		li.innerHTML = `${item.name} -$${item.price} <button class="remove-from-cart-btn" data-id="${item.id}">Remove</button>`;
		cartList.AppendChild(li);
	});

	  document.querySelectorAll(".remove-from-cart-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const productId = Number(e.target.getAttribute("data-id"));
      removeFromCart(productId);
    });
  });

}

// Add item to cart
function addToCart(productId) {
	  const product = products.find((p) => p.id === productId);
  if (!product) return;

  cart.push(product);
  sessionStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Remove item from cart
function removeFromCart(productId) {
	cart = cart.filter((item) => item.id !== productId);
  sessionStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Clear cart
function clearCart() {
	cart = [];
  sessionStorage.removeItem("cart");
  renderCart();
}

// Attach clear button event
clearCartBtn.addEventListener("click", clearCart);

// Initial render
renderProducts();
renderCart();
