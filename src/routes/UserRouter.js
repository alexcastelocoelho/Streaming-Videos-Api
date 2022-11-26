const UserController = require("../app/controller/UserController")

module.exports = (server, routes, prefix = "/users" ) => {
    routes.post("/", UserController.create)
    routes.get("/", UserController.list)
    routes.get("/:id", UserController.getById)
    routes.put("/:id", UserController.update)
    routes.delete("/:id", UserController.delete)

    server.use(prefix,routes)
}