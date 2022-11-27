const VideoController = require("../app/controller/VideoController")
const VideoValidation = require("../app/validations/video/VideoValidation")
const VideoValidationUpdate = require("../app/validations/video/VideoValidationUpdate")
module.exports = (server, routes, prefix = "/videos" ) => {
    routes.post("/", VideoValidation ,VideoController.create)
    routes.get("/", VideoController.list)
    routes.get("/:id", VideoController.getById)
    routes.put("/:id", VideoValidationUpdate ,VideoController.update)
    routes.delete("/:id", VideoController.delete)

    server.use(prefix,routes)
}