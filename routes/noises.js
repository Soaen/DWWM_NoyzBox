const NoisesController = require('../controllers/noises')
const multer = require('multer');
const path = require('path');
const mongoose = require('mongoose');

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


    server.get("/noises/:pseudo", (req,res) => {
        NoisesController.getByName(req, res);
    })


    server.put("/noises/:id", (req, res) =>{
        NoisesController.update(req,res);
    })

    server.delete("/noises/:id", (req, res) => {
        NoisesController.delete(req,res);
    })


    server.post('/noises', upload.single('audioFile'), async (req, res) => {

        // Récupérer le chemin du fichier téléchargé
        const filePath = req.file.path;
      
        // Enregistrer le chemin du fichier dans MongoDB avec Mongoose
        // Utilisez le modèle Mongoose et la méthode save()
      
        // Exemple avec un modèle fictif
        const AudioModel = mongoose.model('noise', { path: String });
        const audioInstance = new AudioModel({ path: filePath });
      
        try {
          await audioInstance.save();
          res.status(200).send('Fichier téléchargé et enregistré avec succès.');
        } catch (err) {
          res.status(500).send(err);
        }
        
      });
    
}