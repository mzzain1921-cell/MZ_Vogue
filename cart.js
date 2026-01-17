// ---------- ADD TO CART FROM PRODUCT PAGE ----------
const addToCartBtn = document.getElementById("addToCartBtn");

if (addToCartBtn) {
  addToCartBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const price = parseFloat(
      document.getElementById("price").dataset.price
    );

    const product = {
      name: "Oversized Hoodie",
      size: document.getElementById("sizeSelect").value,
      quantity: parseInt(document.getElementById("qtySelect").value),
      price: price
    };

    localStorage.setItem("cartProduct", JSON.stringify(product));
    window.location.href = "addm1.html";
  });
}

// ---------- LOAD CART PAGE ----------
const cartData = JSON.parse(localStorage.getItem("cartProduct"));

if (cartData && document.getElementById("cartSubtotal")) {
  const subtotal = (cartData.price * cartData.quantity).toFixed(2);

  document.getElementById("cartSize").innerText = cartData.size;
  document.getElementById("cartQty").innerText = cartData.quantity;
  document.getElementById("cartSubtotal").innerText = subtotal;
  document.getElementById("cartTotal").innerText = subtotal;
}
