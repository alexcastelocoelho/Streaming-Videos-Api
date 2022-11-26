const UserSchema = require("../schema/UserSchema")

class UserRepository {
    async create(payload) {
        const response = await UserSchema.create(payload)
        return response        
    }

    async list(payload) {
        const response = await UserSchema.find(payload)
        return response
    }
    
    async getById(id) {
        const response = await UserSchema.findById(id)
        return response
    }
    
    async update(id, payload) {
        const response = await UserSchema.findByIdAndUpdate(id, payload)
        return response
    }
    
    async delete(id) {
        const response = await UserSchema.findByIdAndDelete(id)
        return response
    }    
}

module.exports = new UserRepository()