const VideoService = require("../service/VideoService");

class VideoController {
    async create(req, res ) {
        try {
            const result = await VideoService.create(req.body)
            return res.status(201).json(result)
        } catch (error) {
            return res.status(400).json(error)
        }
    }

    async list(req, res) {
        try {
            const result = await VideoService.list(req.query)
            return res.status(200).json(result)
        } catch (error) {
            return res.status(400).json(error) 
        }
    }

    async getById(req, res) {
        try {
            const result = await VideoService.getById(req.params.id) 
            return res.status(200).json(result)
        } catch (error) {
            return res.status(400).json(error)
        }
    }

    async update(req, res) {
        try {
            const result = await VideoService.update(req.params.id, req.body)
            return res.status(200).json(result)
        } catch (error) {
            return res.status(400).json(error);
          }
    }

    async delete(req, res) {
        try {
            const result = await VideoService.delete(req.params.id)
            return res.status(204).json(result)
        } catch (error) {
            return res.status(400).json(error);
          }
    }
}

module.exports = new VideoController()