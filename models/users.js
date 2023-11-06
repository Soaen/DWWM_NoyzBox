const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    prenom: String,
    nom: String,
    password: String,
    email: String,
    created_at: { type: Date, default: Date.now },
    role: String,
    favoris: String
})

const UsersModel = mongoose.model("noyzbox", UsersSchema);

module.exports = UsersModel;