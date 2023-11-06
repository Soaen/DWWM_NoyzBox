const UsersModel = require("../models/users");

module.exports = {
    getAll(req, res){
        UsersModel.find().then(users => {
            res.send(users)
        });
    },
}