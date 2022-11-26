const mongoose = require("mongoose")
require("dotenv/config")
class Database {
    constructor() {
        this.connect()
    }

    connect() {
       return mongoose.connect(
        `mongodb://localhost:27017/${process.env.DB_NAME}`
       )
    }
}

module.exports = new Database()