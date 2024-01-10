const UsersModel = require("../models/users");
var sanitize = require('mongo-sanitize');
const bcrypt = require('bcryptjs');

module.exports = {
    getAll(req, res){
        UsersModel.find().then(users => {
            res.send(users)
        });
    },
    
    async create(req,res){
        const user = new UsersModel({...req.body});
        
        let cryptSalt = 10;
        const salt = await bcrypt.genSalt(cryptSalt);
        const hash = await bcrypt.hash(user.password, salt);


        const data = new UsersModel({
            pseudo: user.pseudo,
            password: hash,
            email: user.email,
            picture: user.picture,
            role: user.role,
            favoris: user.favoris,
            created_at: user.created_at,
            last_modified: user.last_modified,
        });


        data.save().then(() => {
            res.send({
                response: `Création de l'utilisateur ${user.pseudo} effectuée avec succès`
            });
        })
    },

    getByName(req, res){
        const pseudo = sanitize(req.params.pseudo);
        
        console.log("Récupération de l'utilisateur avec le pseudo " , pseudo);

        UsersModel.findOne({ pseudo })
            .then(user => {
                if (!user) {
                    return res.status(404).json({ error: 'Utilisateur non trouvé' });
                }

                // Renvoyez le mot de passe de l'utilisateur
                res.json({ user });
            })
            .catch(err => {
                console.error(err);
                res.status(500).json({ error: 'Erreur lors de la recherche de l\'utilisateur' });
            });
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