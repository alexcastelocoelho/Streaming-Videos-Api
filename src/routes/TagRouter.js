const TagController = require("../app/controller/TagController")

module.exports = (server, routes, prefix = "/tags" ) => {
    routes.post("/", TagController.create)
    routes.get("/", TagController.list)
    routes.get("/:title_tag/videos", TagController.getVideoTag)
    routes.put("/:id", TagController.update)
    routes.delete("/:id", TagController.delete)

    server.use(prefix,routes)
}