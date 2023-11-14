const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const NoisesSchema = new Schema({
    name: String,
    id_categories: String,
    id_propose_user: Number,
    access: String,
    id_admin_approve: Number,
    picture: String,
    created_at: { type: Date, default: Date.now },
    last_modified: { type: Date, default: Date.now }
})

const NoisesModel = mongoose.model("noises", NoisesSchema);

module.exports = NoisesModel;