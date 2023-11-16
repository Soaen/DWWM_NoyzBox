const NoisesModel = require("../models/noises");
var sanitize = require('mongo-sanitize');

module.exports = {
    getAll(req, res){
        NoisesModel.find().then(noises => {
            res.send(noises)
        });
    },
    
    async create(req,res){
        const name = req.body.titre;
        const proposeUser = req.body.proposeUser;
        const adminApprove = req.body.adminApprove;
        const category = req.body.category;
        // Récupérer le chemin du fichier téléchargé

        const filePath = req.file.path;
       

        // Exemple avec un modèle fictif
          
        const audioInstance = new NoisesModel({ 
            path: filePath, 
            name: name,
            id_categories: category,
            id_propose_user: proposeUser,
            id_admin_approve: adminApprove
        });
      
        try {
          await audioInstance.save();
          res.status(200).send('Fichier téléchargé et enregistré avec succès.');
        } catch (err) {
            console.error(err);
          res.status(500).send(err);
        }
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
            .then(updatednoise => {
                if (!updatednoise) {
                    return res.status(404).json({ error: 'L\'utilisateur n\'a pas été trouvée' });
                }
                res.json(updatednoise);
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