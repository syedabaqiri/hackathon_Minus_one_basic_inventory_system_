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
    const tableBody = document.getElementById("productTableBody");

    if (tableBody) {
        tableBody.innerHTML = ""; 

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
}

document.addEventListener("DOMContentLoaded", displayProducts);
