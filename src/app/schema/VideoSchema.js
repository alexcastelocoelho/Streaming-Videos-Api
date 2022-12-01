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
        },

        keywords: [{
            type: String,
            required: true           
        } ],
        tag: {
            type: mongoose.Schema.Types.ObjectId,  ref: "Tag"
        }
      
    },
    {versionKey: false}
)

const video = mongoose.model("Video", VideoSchema)
module.exports = video