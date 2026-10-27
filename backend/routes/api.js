import express from "express";

const Router = express.Router()

Router.get("/hello", (req, res, next) => {
    res.json({
        "greeting": "Hello!!"
    })
})

export default Router