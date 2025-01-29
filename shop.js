const products = [
    { id: 1, name: "Nike Air Max", category: "sneakers", price: "$120", img: "shoe1.jpg" },
    { id: 2, name: "Adidas Ultraboost", category: "sneakers", price: "$140", img: "shoe2.jpg" },
    { id: 3, name: "Nike Air Max", category: "sneakers", price: "$120", img: "shoe3.jpg" },
    { id: 4, name: "Adidas Ultraboost", category: "sneakers", price: "$140", img: "shoe4.jpg" },
    { id: 5, name: "Nike Air Max", category: "sneakers", price: "$120", img: "shoe5.jpg" },
    { id: 6, name: "Adidas Ultraboost", category: "sneakers", price: "$140", img: "shoe6.jpg" },
    { id: 7, name: "Nike Air Max", category: "sneakers", price: "$120", img: "shoe7.jpg" },
    { id: 8, name: "Adidas Ultraboost", category: "sneakers", price: "$140", img: "shoe8.jpg" },
    { id: 9, name: "Nike Air Max", category: "sneakers", price: "$120", img: "shoe9.jpg" },
    { id: 10, name: "Adidas Ultraboost", category: "sneakers", price: "$140", img: "shoe10.jpg" },
    { id: 11, name: "Nike Air Max", category: "sneakers", price: "$120", img: "shoe11.jpg" },
    { id: 12, name: "Adidas Ultraboost", category: "sneakers", price: "$140", img: "shoe12.jpg" },
    { id: 35, name: "Adidas Ultraboost", category: "sneakers", price: "$140", img: "shoe13.jpg" },
    { id: 36, name: "Nike Air Max", category: "sneakers", price: "$120", img: "shoe14.jpg" },
    { id: 37, name: "Adidas Ultraboost", category: "sneakers", price: "$140", img: "shoe15.jpg" },
    { id: 13, name: "Puma Running Tee", category: "sportswear", price: "$35", img: "gym1.jpg" },
    { id: 14, name: "Under Armour Shorts", category: "sportswear", price: "$45", img: "gym2.jpg" },
    { id: 38, name: "Puma Running Tee", category: "sportswear", price: "$35", img: "gym3.jpg" },
    { id: 39, name: "Under Armour Shorts", category: "sportswear", price: "$45", img: "gym4.jpg" },
    { id: 40, name: "Puma Running Tee", category: "sportswear", price: "$35", img: "gym5.jpg" },
    { id: 41, name: "Under Armour Shorts", category: "sportswear", price: "$45", img: "gym6.jpg" },
    { id: 42, name: "Puma Running Tee", category: "sportswear", price: "$35", img: "gym7.jpg" },
    { id: 43, name: "Under Armour Shorts", category: "sportswear", price: "$45", img: "gym8.jpg" },
    { id: 44, name: "Puma Running Tee", category: "sportswear", price: "$35", img: "gym9.jpg" },
    { id: 45, name: "Under Armour Shorts", category: "sportswear", price: "$45", img: "gym10.jpg" },
    { id: 46, name: "Puma Running Tee", category: "sportswear", price: "$35", img: "gym11.jpg" },
    { id: 47, name: "Under Armour Shorts", category: "sportswear", price: "$45", img: "gym12.jpg" },
    { id: 48, name: "Puma Running Tee", category: "sportswear", price: "$35", img: "gym13.jpg" },
    { id: 49, name: "Under Armour Shorts", category: "sportswear", price: "$45", img: "gym14.jpg" },
    { id: 50, name: "Puma Running Tee", category: "sportswear", price: "$35", img: "gym15.jpg" },
    { id: 15, name: "Nike Cap", category: "accessories", price: "$25", img: "access1.jpg" },
    { id: 16, name: " Cap", category: "accessories", price: "$25", img: "access1.jpg" },
    { id: 17, name: "Nike Cap", category: "accessories", price: "$25", img: "access1.jpg" },
    { id: 18, name: "Nike Cap", category: "accessories", price: "$25", img: "access1.jpg" },
    { id: 19, name: "Nike Cap", category: "accessories", price: "$25", img: "access1.jpg" },
    { id: 20, name: "Nike Cap", category: "accessories", price: "$25", img: "access1.jpg" },
    { id: 21, name: "Nike Cap", category: "accessories", price: "$25", img: "access1.jpg" },
    { id: 22, name: " Cap", category: "accessories", price: "$25", img: "access1.jpg" },
    { id: 23, name: "Nike Cap", category: "accessories", price: "$25", img: "access1.jpg" },
    { id: 24, name: "Nike Cap", category: "accessories", price: "$25", img: "access1.jpg" },
    { id: 25, name: "Nike Cap", category: "accessories", price: "$25", img: "access1.jpg" },
    { id: 26, name: "Nike Cap", category: "accessories", price: "$25", img: "access1.jpg" },
    { id: 27, name: "Nike Cap", category: "accessories", price: "$25", img: "access1.jpg" },
    { id: 28, name: " Cap", category: "accessories", price: "$25", img: "access1.jpg" },
    { id: 29, name: "Nike Cap", category: "accessories", price: "$25", img: "access1.jpg" },
    { id: 30, name: "Nike Cap", category: "accessories", price: "$25", img: "access1.jpg" },
    { id: 31, name: "Nike Cap", category: "accessories", price: "$25", img: "access1.jpg" },
    { id: 32, name: "Nike Cap", category: "accessories", price: "$25", img: "access1.jpg" },
    { id: 33, name: "Nike Cap", category: "accessories", price: "$25", img: "access1.jpg" },
    { id: 34, name: "Nike Cap", category: "accessories", price: "$25", img: "access1.jpg" },

];

function displayProducts(filter) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    products
        .filter(product => filter === "all" || product.category === filter)
        .forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");

            productCard.innerHTML = `
                <img src="images/${product.img}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Price: ${product.price}</p>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            `;

            productList.appendChild(productCard);
        });

    attachCartListeners();
}

function attachCartListeners() {
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", event => {
            const productId = event.target.dataset.id;
            alert(`Product ${productId} added to cart!`);
            // You can later expand this with cart storage logic
        });
    });
}

function filterProducts(category) {
    displayProducts(category);
}

window.onload = () => displayProducts("all");