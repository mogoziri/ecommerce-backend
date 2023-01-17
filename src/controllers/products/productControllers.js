const products = [
    {
        title: "Bag",
        description: "Bag for all ocassions",
        price: 42,
        stock: 10,
    },
    {
        title: "Ring",
        description: "Wedding Ring",
        price: 4200,
        stock: 5,
    },
    {
        title: "Wallet",
        description: "Leather wallet",
        price: 420,
        stock: 15,
    },
]

function getProducts() {
    return products
}

function getProductById(productId) {
    // get product from DB with id 'productId'
    const product = products[productId]
    return product
}

function createProduct(product) {
    const newproduct = {
        id: 4,
        ...product
    }
    return newProduct
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
}