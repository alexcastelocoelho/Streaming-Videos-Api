const mongoose = require("mongoose")

const TagSchema = new mongoose.Schema(
    {
        title_tag: {
            type: String,
            required: true
        },
        genero_tag: {
            type: String,
            required: true
        },

        category:[ {
                type: mongoose.Schema.Types.ObjectId, ref: "Video",
       } ]       
      
    },
    {versionKey: false}
)

const tag = mongoose.model("Tag", TagSchema)
module.exports = tag