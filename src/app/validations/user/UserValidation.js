const joi = require("joi").extend(require("@joi/date"))
const cpfValidation = require("../../utils/CpfValidation")
const AgeValidation = require("../../utils/AgeValidation")
module.exports = async (req, res, next) => {

    try {
        const validUser = joi.object({
            name: joi.string().min(3).required(),
            cpf: joi.string().custom((cpf, helper) => {
                const valid = cpfValidation(cpf)
                if (!valid) {
                    return helper.message('Invalid CPF, check the format or enter a valid CPF');
                }
                return valid
            }).required(),
            birthday: joi.date().custom((cpf, helper) => {
                const valid = AgeValidation(cpf)
                if (valid < 18) {
                    return helper.message("you must be at least 18 years old")
                }
                return valid
            }).format("DD/MM/YYYY").required(),
            email: joi.string().email().required(),
            password: joi.string().min(6).required()
        })

        const {error} = await validUser.validate(req.body, {
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