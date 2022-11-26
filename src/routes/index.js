const {Router} = require("express")
const User = require("./UserRouter")

module.exports = (server) => {
    server.use((req, res, next) => {
        User(server, new Router())

        next();
    })
}