const products =[
    {
        name:"Apple Cider",
        image:"images/apple-cider.jpg",
    },
    {
        name:"Grapes Cider",
        image:"images/grapes-cider.jpg",
    },
    {
        name:"Jaman cider",
        image:"images/jaman-cider.jpg"
    }
];
const productList=
document.getElementById("product-list");
products.forEach(function(product) {
    productList.innerHTML += `
    <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <button>Add to Cart</button>
            </div>
    `;
});