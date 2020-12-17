// const { filter } = require("../data");
const express = require('express');
const router = express.Router()
const usersController = require('../controllers/users')
router.get('/users', usersController.listUsers)
router.get('/users:usersId', usersController.showUser)
router.post('/users', usersController.createUser)
router.put('/users:usersId', usersController.updateUser)
router.delete('/users/:usersId', usersController.deleteUser)

module.exports = router;

//GET users/
// app.get('/users', (req, res) => {
//     return res.json(users)
// });

//GET users/:id
// app.get('/users/:id', (req, res) => {
//     const id = req.params.userId;

//     const filteredUsers = users.filter(user => user._id === Number(id);
//     res.json(filteredUsers)
// })

///POST /users
// app.post('users/:id', (req, res) => {
//     const sampleUser = {
//         _id: usersCount + 1, 
//         ...req.body
//     }
//     users.push(sampleUser);
//     res.json(sampleUser)
// });

///PUT /users/:id
// app.put('/users/:id', (req, res) => {
//     const found = users.some(user => user._id === Number(req.params.id))
// if (found) {
//     const updatedUser = req.body;
//     users.forEach(user => {
//         if(user._id === Number(req.params.id)) {
//             user.name = updatedUser.name ? updatedUser.name : user.name;
//             user.username = updatedUser.username ? updatedUser.username : user.username;
//             user.email = updatedUser.email ? updatedUser.email : user.email;
//             user.address = updatedUser.address ? updatedUser.address : user.address;
//             user.phone  = updatedUser.phone ? updatedUser.phone : user.phone;
//             user.website = updatedUser.website ? updatedUser.website : user.website;
//             user.company = updatedUser.company ? updatedUser.company : user.company;
//         };
//     });
//    };
// });

///DELETE /users/:id
// app.delete('/users/:id', (req, res) => {
//     const id = req.params.id;

//     const filteredUsers = users.filter(user => user._id === Number(id));
//     if(filteredUsers) {
//         filteredUsers.isActive = "false";
//         res.json(filteredUsers)
//     };
// });