const TagSchema = require("../schema/TagSchema")

class TagRepository {
    async create(payload) {
        const response = await TagSchema.create(payload)
        return response        
    }

    async list(payload) {
        const response = await TagSchema.find(payload)
        return response
    }
    
    async getVideoTag(title_tag) {    
        
        const response = await TagSchema.findOne({title_tag: title_tag}).populate("video")
        return response
    }

    async update(id, payload) {
        const response = await TagSchema.findByIdAndUpdate(id, payload)
        return response
    }
    
    async delete(id) {
        const response = await TagSchema.findByIdAndDelete(id)
        return response
    }    
}

module.exports = new TagRepository()