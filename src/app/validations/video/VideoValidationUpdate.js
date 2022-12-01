const joi = require("joi").extend(require("@joi/date"))

module.exports = async (req, res, next) => {

    try {
        const validVideo = joi.object({
          title: joi.string().max(45).required(),
          description: joi.string().max(90).required(),
          author: joi.string().min(3).max(20).required(),
          genre: joi.string().min(4).required(),
          keywords: joi.array().min(1).message("keywords cannot be empty").required(),
          tag: joi.object({_id: joi.string().hex().length(24)}).required()
        })

        const {error} = await validVideo.validate(req.body, {
            abortEarly: false
        }) 
        if (error) throw error

        return next()
    } catch (error) {
        return res.status(400).json({
          errors: error.details.map((alert) => ({
            description: alert.message,
            name: alert.path.join('.')
          }))
        });
      }
}