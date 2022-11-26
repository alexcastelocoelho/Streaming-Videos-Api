const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        cpf: {
            type: String,
            required: true,
            unique: true
        },

        birthday: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true,
            unique: true
        },

        password: {
            type: String,
            required: true
        }
    },
    {versionKey: false}
)

const user = mongoose.model("User", UserSchema)
module.exports = user