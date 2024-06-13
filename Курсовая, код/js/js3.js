let cart = [];
let cartTotal = 0;

function addToCart(item, price) {
  let existingItem = cart.find(i => i.name === item);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ name: item, quantity: 1, price: price });
  }
  updateCart();
}

function removeFromCart(item) {
  let index = cart.findIndex(i => i.name === item);
  if (index !== -1) {
    cart.splice(index, 1);
    updateCart();
  }
}

function updateQuantity(item, quantity) {
  let existingItem = cart.find(i => i.name === item);
  if (existingItem) {
    existingItem.quantity = quantity;
    updateCart();
  }
}

function updateCart() {
  let cartTable = document.getElementById("cart-table").getElementsByTagName("tbody")[0];
  cartTable.innerHTML = "";
  cartTotal = 0;

  for (let item of cart) {
    let row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
      <td><input type="number" value="${item.quantity}" min="1" onchange="updateQuantity('${item.name}', this.value)"></td>
      <td>${item.price * item.quantity} руб.</td>
      <td><button onclick="removeFromCart('${item.name}')">Удалить</button></td>
    `;
    cartTable.appendChild(row);
    cartTotal += item.price * item.quantity;
  }

  document.getElementById("cart-total").textContent = cartTotal;
  document.querySelector(".cart-count").textContent = cart.length;
}

function openCart() {
  document.getElementById("cart-modal").style.display = "block";
}

function closeCart() {
  document.getElementById("cart-modal").style.display = "none";
}





// let cart = [];
// let cartTotal = 0;

function addToCart(item, price) {
  let existingItem = cart.find(i => i.name === item);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ name: item, quantity: 1, price: price });
  }
  updateCart();
}

function removeFromCart(item) {
  let index = cart.findIndex(i => i.name === item);
  if (index !== -1) {
    cart.splice(index, 1);
    updateCart();
  }
}

function updateQuantity(item, quantity) {
  let existingItem = cart.find(i => i.name === item);
  if (existingItem) {
    existingItem.quantity = quantity;
    updateCart();
  }
}

function updateCart() {
  let cartTable = document.getElementById("cart-table").getElementsByTagName("tbody")[0];
  cartTable.innerHTML = "";
  cartTotal = 0;

  for (let item of cart) {
    let row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
      <td><input type="number" value="${item.quantity}" min="1" onchange="updateQuantity('${item.name}', this.value)"></td>
      <td>${item.price * item.quantity} руб.</td>
      <td><button onclick="removeFromCart('${item.name}')">Удалить</button></td>
    `;
    cartTable.appendChild(row);
    cartTotal += item.price * item.quantity;
  }

  document.getElementById("cart-total").textContent = cartTotal;
  document.querySelector(".cart-count").textContent = cart.length;
}

function openCart() {
  document.getElementById("cart-modal").style.display = "block";
}

function closeCart() {
  document.getElementById("cart-modal").style.display = "none";
}

function openProductPage(productName) {
  document.getElementById("product-modal").style.display = "block";
}

function closeProductPage() {
  document.getElementById("product-modal").style.display = "none";
}



document.getElementById('order-button').addEventListener('click', placeOrder);

// Функция размещения заказа
function placeOrder() {
    if (cart.length === 0) {
        alert("Ваша корзина пока пуста");
        return;
    }

    alert("Спасибо за ваш заказ!");
    cart = []; // Очистить корзину
    updateCart();
}
