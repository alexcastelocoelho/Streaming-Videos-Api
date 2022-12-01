const TagService = require("../service/TagService");

class TagController {
    async create(req, res ) {
        try {
            const result = await TagService.create(req.body)
            return res.status(201).json(result)
        } catch (error) {
            return res.status(400).json(error)
        }
    }

    async list(req, res) {
        try {
            const result = await TagService.list(req.query)
            return res.status(200).json(result)
        } catch (error) {
            return res.status(400).json(error) 
        }
    }

    async getVideoTag(req, res) {
        try {
            const result = await TagService.getVideoTag(req.params.title_tag) 
            return res.status(200).json(result)
        } catch (error) {
            return res.status(400).json(error)
            
        }
    }

    async update(req, res) {
        try {
            const result = await TagService.update(req.params.id, req.body)
            return res.status(200).json(result)
        } catch (error) {
            return res.status(400).json(error);
          }
    }

    async delete(req, res) {
        try {
            const result = await TagService.delete(req.params.id)
            return res.status(204).json(result)
        } catch (error) {
            return res.status(400).json(error);
          }
    }
}

module.exports = new TagController()