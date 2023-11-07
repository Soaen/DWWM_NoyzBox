const UsersModel = require("../models/users");

module.exports = {
    getAll(req, res){
        UsersModel.find().then(users => {
            res.send(users)
        });
    },
    
    create(req,res){
        const user = new UsersModel({...req.body});

        user.save().then(() => {
            res.send({
                response: `Création de l'utilisateur ${user.pseudo} effectuée avec succès`
            });
        })
    },

    get(req, res){
        const id = req.params.id;
        console.log("Récupération de l'utilisateur avec l'id " , id);

        UsersModel.findById(id).then(user => {
            res.send(user)
        })
    },

    update(req, res) {
        const id = req.params.id;
        const updatedData = req.body;
    
        UsersModel.findByIdAndUpdate(id, updatedData, { new: true })
            .then(updatedUser => {
                if (!updatedUSer) {
                    return res.status(404).json({ error: 'L\'utilisateur n\'a pas été trouvée' });
                }
                res.json(updatedUser);
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

        UsersModel.findByIdAndDelete(id).then(user => {
            res.send({
                response: `Suppression de l'utilisateur ${user.name} avec l'id ${user.id}`
            })
        });
    }
    
}