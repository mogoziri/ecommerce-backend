const express = require("express")

const { getCarts, getCartById, getCartByUserId } = require("./cartControllers")

const cartRouter = express.Router()

cartRouter.get("/", (request, response) => {
    const carts = getCarts()
    response.json(carts)
})

cartRouter.get("/:cartId", (request, response) => {
    const cart = getCartById(request.params.cartId)
    if (!cart) {
        response.status(404).json({
            data: "Cart Not Found"
        })
    }
    response.json(cart)
})

cartRouter.get("/user/:userId", (request, response) => {
    const cart = getCartByUserId(request.params.userId)
    if (!cart) {
        response.status(404).json({
            data: "Cart Not Found"
        })
    }
})

module.exports = cartRouter