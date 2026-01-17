const addToCartBtn = document.getElementById("addToCartBtn");

addToCartBtn.addEventListener("click", function (e) {
  e.preventDefault(); // page reload rokta hai

  const product = {
    name: "Oversized Hoodie",
    price: 45.99,
    size: document.getElementById("Select").value,
    quantity: document.getElementById("quantity").value,
    image: "men 1.jpeg"
  };

  localStorage.setItem("cartProduct", JSON.stringify(product));

  // ab redirect hoga
  window.location.href = "addm1.html";
});

