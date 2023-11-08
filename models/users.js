const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    prenom: String,
    nom: String,
    pseudo: String,
    password: String,
    saltHash: Number,
    email: String,
    role: String,
    favoris: String,
    created_at: { type: Date, default: Date.now },
    last_modified: { type: Date, default: Date.now }
})

const UsersModel = mongoose.model("users", UsersSchema);

module.exports = UsersModel;