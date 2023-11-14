const NoisesCateController = require('../controllers/noisescate')

module.exports = server => {

    server.get("/noise_categorie", (req, res) => {
        NoisesCateController.getAll(req, res);
    })

    server.get("/noise_categorie/:pseudo", (req,res) => {
        NoisesCateController.getByName(req, res);
    })

    server.post("/noise_categorie", (req, res) =>{
        NoisesCateController.create(req,res);
    })

    server.put("/noise_categorie/:id", (req, res) =>{
        NoisesCateController.update(req,res);
    })

    server.delete("/noise_categorie/:id", (req, res) => {
        NoisesCateController.delete(req,res);
    })
    
}