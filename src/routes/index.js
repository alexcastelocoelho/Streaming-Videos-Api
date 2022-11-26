const {Router} = require("express")
const User = require("./UserRouter")
const Video = require("./VideoRouter")
module.exports = (server) => {
    server.use((req, res, next) => {
        User(server, new Router())
        Video(server, new Router())

        next();
    })
}