const TagRepository = require("../repository/TagRepository")

class TagService {
    async create(payload) {                   
        const result = await TagRepository.create(payload)
        return result      
       
    }

    async list(payload) {
        const result = await TagRepository.list(payload)
        return result
    }

    async getVideoTag(title_tag) {           
        const result = await TagRepository.getVideoTag(title_tag)
        return result         
                
    }

    async update(id, payload) {
        const result = await TagRepository.update(id, payload)
        return result
    }

    async delete(id) {
        const result = await TagRepository.delete(id)
        
    }

}

module.exports = new TagService()