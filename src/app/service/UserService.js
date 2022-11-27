const UserRepository = require("../repository/UserRepository")

class UserService {
    async create(payload) {                   
        const result = await UserRepository.create(payload)
        return result      
       
    }

    async list(payload) {
        const result = await UserRepository.list(payload)
        return result
    }

    async getById(id) {
        const result = await UserRepository.getById(id)
        return result
    }

    async update(id, payload) {
        const result = await UserRepository.update(id, payload)
        return result
    }

    async delete(id) {
        const result = await UserRepository.delete(id)
        
    }

}

module.exports = new UserService()