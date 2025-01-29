var products = [
    { name: "Laptop", quantity: 5, price: 1000 },
    { name: "Mouse", quantity: 15, price: 25 },
    { name: "Keyboard", quantity: 10, price: 50 },
    { name: "Monitor", quantity: 7, price: 300 }
];
function displayProducts() {
    var tableBody = document.getElementById("productTableBody");
    if (!tableBody)
        return;
    tableBody.innerHTML = ""; // Clear table before re-rendering
    products.forEach(function (product) {
        var row = document.createElement("tr");
        row.innerHTML = "\n            <td>".concat(product.name, "</td>\n            <td>").concat(product.quantity, "</td>\n            <td>$").concat(product.price.toFixed(2), "</td>\n        ");
        tableBody.appendChild(row);
    });
}
function addProduct() {
    var nameInput = document.getElementById("productName");
    var quantityInput = document.getElementById("productQuantity");
    var priceInput = document.getElementById("productPrice");
    if (!nameInput || !quantityInput || !priceInput)
        return;
    var name = nameInput.value.trim();
    var quantity = parseInt(quantityInput.value);
    var price = parseFloat(priceInput.value);
    if (name === "" || isNaN(quantity) || isNaN(price) || quantity <= 0 || price <= 0) {
        alert("Please enter valid product details.");
        return;
    }
    products.push({ name: name, quantity: quantity, price: price });
    displayProducts();
    // Clear input fields
    nameInput.value = "";
    quantityInput.value = "";
    priceInput.value = "";
}
// Run script only after the page loads
document.addEventListener("DOMContentLoaded", function () {
    displayProducts();
    var addButton = document.querySelector("button");
    if (addButton) {
        addButton.addEventListener("click", addProduct);
    }
});
