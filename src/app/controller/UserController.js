const UserService = require("../service/UserService");

class UserController {
    async create(req, res ) {
        try {
            const result = await UserService.create(req.body)
            return res.status(201).json(result)
        } catch (error) {
            return res.status(400).json(error)
        }
    }

    async list(req, res) {
        try {
            const result = await UserService.list(req.query)
            return res.status(200).json(result)
        } catch (error) {
            return res.status(400).json(error) 
        }
    }

    async getById(req, res) {
        try {
            const result = await UserService.getById(req.params.id) 
            return res.status(200).json(result)
        } catch (error) {
            return res.status(400).json(error)
        }
    }

    async update(req, res) {
        try {
            const result = await UserService.update(req.params.id, req.body)
            return res.status(200).json(result)
        } catch (error) {
            return res.status(400).json(error);
          }
    }

    async delete(req, res) {
        try {
            const result = await UserService.delete(req.params.id)
            return res.status(204).json(result)
        } catch (error) {
            return res.status(400).json(error);
          }
    }
}

module.exports = new UserController()