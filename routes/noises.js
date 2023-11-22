const NoisesController = require('../controllers/noises')
const multer = require('multer');
const path = require('path');

// Configuration multer pour gérer les fichiers
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/uploads'); // Dossier où les fichiers seront stockés temporairement
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });


module.exports = server => {

    server.get("/noises", (req, res) => {
        NoisesController.getAll(req, res);
    })


    server.get("/noises/:name", (req,res) => {
        NoisesController.getByName(req, res);
    })


    server.put("/noises/:id", (req, res) =>{
        NoisesController.update(req,res);
    })

    server.delete("/noises/:id", (req, res) => {
        NoisesController.delete(req,res);
    })


    server.post('/noises', upload.single('audioFile'), (req, res) => {
      NoisesController.create(req, res);
  });

  server.get("/noisesbycate/:categorie",(req,res)=>{
    NoisesController.getByCategorie(req,res);
  })

  
}