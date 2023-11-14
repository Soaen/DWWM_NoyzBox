const NoisesModel = require("../models/noisescate");
var sanitize = require('mongo-sanitize');

module.exports = {
    getAll(req, res){
        NoisesModel.find().then(noises => {
            res.send(noises)
        });
    },
    
    create(req,res){
        const noise = new NoisesModel({...req.body});

        noise.save().then(() => {
            res.send({
                response: `Création de la catégorie ${noise.name} effectuée avec succès`
            });
        })
    },

    getByName(req, res){
        const pseudo = sanitize(req.params.pseudo);
        
        console.log("Récupération de l'utilisateur avec le pseudo " , pseudo);

        NoisesModel.findOne({ pseudo })
            .then(noise => {
                if (!noise) {
                    return res.status(404).json({ error: 'Utilisateur non trouvé' });
                }

                // Renvoyez le mot de passe de l'utilisateur
                res.json({ noise });
            })
            .catch(err => {
                console.error(err);
                res.status(500).json({ error: 'Erreur lors de la recherche de l\'utilisateur' });
            });
    },

    update(req, res) {
        const id = req.params.id;
        const updatedData = req.body;
    
        NoisesModel.findByIdAndUpdate(id, updatedData, { new: true })
            .then(updatedNoise => {
                if (!updatedNoise) {
                    return res.status(404).json({ error: 'L\'utilisateur n\'a pas été trouvée' });
                }
                res.json(updatedNoise);
            })
            .catch(err => {
                console.error(err);
                res.status(500).json({ error: 'Erreur lors de la mise à jour de l\'utilisateur' });
            });
    },
    delete(req,res){
        const id = req.params.id;

        //if(!id){
        //    res.status(400).json({message: "Paramètre id invalide"})
        //}

        NoisesModel.findByIdAndDelete(id).then(noise => {
            res.send({
                response: `Suppression de l'utilisateur ${noise.name} avec l'id ${noise.id}`
            })
        });
    }
    
}