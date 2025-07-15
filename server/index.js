const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const app = express();
const LogindataModel = require("./models/Logindata");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/login-register", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

app.post("/register", async (req, res) => {
    try {
        const user = await LogindataModel.create(req.body);
        res.json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.listen(5173, () => {
    console.log("Server is running on port 3001");
});