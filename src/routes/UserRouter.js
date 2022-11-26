const UserController = require("../app/controller/UserController")
const userValidation = require("../app/validations/user/UserValidation")
const userValidationUpdate = require("../app/validations/user/UserValidateUpdate")
module.exports = (server, routes, prefix = "/users" ) => {
    routes.post("/", userValidation , UserController.create)
    routes.get("/", UserController.list)
    routes.get("/:id", UserController.getById)
    routes.put("/:id", userValidationUpdate ,UserController.update)
    routes.delete("/:id", UserController.delete)

    server.use(prefix,routes)
}