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
    
}