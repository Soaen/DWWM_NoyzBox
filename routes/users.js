const UsersController = require('../controllers/users')

module.exports = server => {
    server.get("/", (req, res) => {
        res.send("bienvenue sur la page d'accueil");
    })

    server.get("/users", (req, res) => {
        UsersController.getAll(req, res);
    })
}