const app = require("./app")
require("dotenv/config")
const port = 3333 || process.env.PORT

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})