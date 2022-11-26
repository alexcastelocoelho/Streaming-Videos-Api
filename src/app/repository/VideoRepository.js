const VideoSchema = require("../schema/VideoSchema")

class VideoRepository {
    async create(payload) {
        const response = await VideoSchema.create(payload)
        return response        
    }

    async list(payload) {
        const response = await VideoSchema.find(payload)
        return response
    }
    
    async getById(id) {
        const response = await VideoSchema.findById(id)
        return response
    }
    
    async update(id, payload) {
        const response = await VideoSchema.findByIdAndUpdate(id, payload)
        return response
    }
    
    async delete(id) {
        const response = await VideoSchema.findByIdAndDelete(id)
        return response
    }    
}

module.exports = new VideoRepository()