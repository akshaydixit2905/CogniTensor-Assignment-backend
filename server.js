const express = require('express')
const cors = require('cors');
const taskRoutes = require("./src/tasks/routes")
const app = express()
const port = 3002

app.use(cors());
app.use(express.json())

app.get("/", (req, res) => {
    res.send("App root!")
})

app.use("/api/v1/tasks", taskRoutes)

app.listen(port, () => console.log(`App lisiting on port ${port}`))