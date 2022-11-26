const mongoose = require("mongoose")

const VideoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },

        description: {
            type: String,
            required: true
        },

        author: {
            type: String,
            required: true
        },

        genre: {
            type: String,
            required: true
        }
      
    },
    {versionKey: false}
)

const video = mongoose.model("Video", VideoSchema)
module.exports = video