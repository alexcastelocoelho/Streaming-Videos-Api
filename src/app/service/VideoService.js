const VideoRepository = require("../repository/VideoRepository")

class VideoService {
    async create(payload) {                   
        const result = await VideoRepository.create(payload)
        return result      
       
    }

    async list(payload) {
        const result = await VideoRepository.list(payload)
        return result
    }

    async getById(id) {
        const result = await VideoRepository.getById(id)
        return result
    }

    async update(id, payload) {
        const result = await VideoRepository.update(id, payload)
        return result
    }

    async delete(id) {
        const result = await VideoRepository.delete(id)
        
    }

}

module.exports = new VideoService()