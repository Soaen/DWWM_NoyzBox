const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const NoisesCateSchema = new Schema({
    name: String,
    picture: String
})

const NoisesCateModel = mongoose.model("noise_categorie", NoisesCateSchema);

module.exports = NoisesCateModel;