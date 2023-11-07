const UsersController = require('../controllers/users')

module.exports = server => {

    server.get("/users", (req, res) => {
        UsersController.getAll(req, res);
    })

    server.get("/users/:id", (req,res) => {
        UsersController.get(req, res);
    })

    server.post("/users", (req, res) =>{
        UsersController.create(req,res);
    })

    server.put("/users/:id", (req, res) =>{
        UsersController.update(req,res);
    })

    server.delete("/users/:id", (req, res) => {
        UsersController.delete(req,res);
    })
    
}