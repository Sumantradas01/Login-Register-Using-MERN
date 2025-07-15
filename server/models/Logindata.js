const mongoose = require('mongoose')

const logindataSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const LogindataModel = mongoose.model("Logindata", logindataSchema);
module.exports = LogindataModel;