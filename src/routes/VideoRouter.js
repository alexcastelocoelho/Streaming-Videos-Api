const VideoController = require("../app/controller/VideoController")

module.exports = (server, routes, prefix = "/videos" ) => {
    routes.post("/", VideoController.create)
    routes.get("/", VideoController.list)
    routes.get("/:id", VideoController.getById)
    routes.put("/:id", VideoController.update)
    routes.delete("/:id", VideoController.delete)

    server.use(prefix,routes)
}