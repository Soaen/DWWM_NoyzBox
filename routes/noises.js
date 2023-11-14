const NoisesController = require('../controllers/noises')

module.exports = server => {

    server.get("/noises", (req, res) => {
        NoisesController.getAll(req, res);
    })


    server.get("/noises/:pseudo", (req,res) => {
        NoisesController.getByName(req, res);
    })

    server.post("/noises", (req, res) =>{
        NoisesController.create(req,res);
    })

    server.put("/noises/:id", (req, res) =>{
        NoisesController.update(req,res);
    })

    server.delete("/noises/:id", (req, res) => {
        NoisesController.delete(req,res);
    })
    
}