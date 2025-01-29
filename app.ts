interface Product {
    name: string;
    quantity: number;
    price: number;
}

const products: Product[] = [
    { name: "Laptop", quantity: 5, price: 1000 },
    { name: "Mouse", quantity: 15, price: 25 },
    { name: "Keyboard", quantity: 10, price: 50 },
    { name: "Monitor", quantity: 7, price: 300 }
];

function displayProducts(): void {
    const tableBody = document.getElementById("productTableBody") as HTMLTableSectionElement;
    if (!tableBody) return;

    tableBody.innerHTML = ""; // Clear table before re-rendering

    products.forEach(product => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.quantity}</td>
            <td>$${product.price.toFixed(2)}</td>
        `;
        tableBody.appendChild(row);
    });
}

function addProduct(): void {
    const nameInput = document.getElementById("productName") as HTMLInputElement;
    const quantityInput = document.getElementById("productQuantity") as HTMLInputElement;
    const priceInput = document.getElementById("productPrice") as HTMLInputElement;

    if (!nameInput || !quantityInput || !priceInput) return;

    const name = nameInput.value.trim();
    const quantity = parseInt(quantityInput.value);
    const price = parseFloat(priceInput.value);

    if (name === "" || isNaN(quantity) || isNaN(price) || quantity <= 0 || price <= 0) {
        alert("Please enter valid product details.");
        return;
    }

    products.push({ name, quantity, price });
    displayProducts();

    // Clear input fields
    nameInput.value = "";
    quantityInput.value = "";
    priceInput.value = "";
}

// Run script only after the page loads
document.addEventListener("DOMContentLoaded", () => {
    displayProducts();

    const addButton = document.querySelector("button") as HTMLButtonElement;
    if (addButton) {
        addButton.addEventListener("click", addProduct);
    }
});
