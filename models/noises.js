const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const NoisesSchema = new Schema({
    name: String,
    lowername: String,
    id_categories: Array,
    id_propose_user: String,
    path: String,
    id_admin_approve: String,
    picture: String,
    created_at: { type: Date, default: Date.now },
    last_modified: { type: Date, default: Date.now }
})

const NoisesModel = mongoose.model("noises", NoisesSchema);

module.exports = NoisesModel;