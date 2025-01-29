var products = [
    { name: "Laptop", quantity: 5, price: 1000 },
    { name: "Mouse", quantity: 15, price: 25 },
    { name: "Keyboard", quantity: 10, price: 50 },
    { name: "Monitor", quantity: 7, price: 300 }
];
function displayProducts() {
    var tableBody = document.getElementById("productTableBody");
    if (tableBody) {
        tableBody.innerHTML = "";
        products.forEach(function (product) {
            var row = document.createElement("tr");
            row.innerHTML = "\n                <td>".concat(product.name, "</td>\n                <td>").concat(product.quantity, "</td>\n                <td>$").concat(product.price.toFixed(2), "</td>\n            ");
            tableBody.appendChild(row);
        });
    }
}
document.addEventListener("DOMContentLoaded", displayProducts);
