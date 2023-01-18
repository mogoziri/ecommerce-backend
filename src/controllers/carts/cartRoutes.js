const express = require("express")

const { 
    getCarts, 
    getCartById, 
    getCartByUserId, 
    getCartByUserIdWithProductInfo 
} = require("./cartControllers")

const cartRouter = express.Router()

cartRouter.get("/", async (request, response) => {
    const carts = await getCarts()
    response.json(carts)
})

cartRouter.get("/:cartId", async (request, response) => {
    const cart = await getCartById(request.params.cartId)
    if (!cart) {
        response.status(404).json({
            data: "Cart Not Found"
        })
    }
    response.json(cart)
})

cartRouter.get("/user/:userId", async (request, response) => {
    let cart
    if (request.query.getProductInfo) {
        cart = await getCartByUserIdWithProductInfo(request.params.userId)
    } else {
        cart = await getCartByUserId(request.params.userId)
    }
    if (!cart) {
        response.status(404).json({
            data: "Cart Not Found"
        })
    }
})

module.exports = cartRouter