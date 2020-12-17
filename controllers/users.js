const users = require('../data/index');

const usersCount = users.length;

const listUsers = (req, res) => {
    return res.json(users)
};

const showUser = (req, res) => {
    const id = req.params.userId;

    const filteredUsers = users.filter(user => user._id === Number(id));
    if(!filteredUsers) {
        res.status(404).send({ msg: 'Bad Request. User not found.'})
    }
    res.json(filteredUsers);
};

const createUser = (req, res) => {
    const sampleUser = {
        _id: usersCount + 1, 
        ...req.body
    }
    users.push(sampleUser);
    return res.json(sampleUser)
};

const updateUser = (req, res) => {
    const found = users.some(user => user._id === Number(req.params.id))
if (found) {
    const updatedUser = req.body;
    users.forEach(user => {
        if(user._id === Number(req.params.id)) {
            user.name = updatedUser.name ? updatedUser.name : user.name;
            user.username = updatedUser.username ? updatedUser.username : user.username;
            user.email = updatedUser.email ? updatedUser.email : user.email;
            user.address = updatedUser.address ? updatedUser.address : user.address;
            user.phone  = updatedUser.phone ? updatedUser.phone : user.phone;
            user.website = updatedUser.website ? updatedUser.website : user.website;
            user.company = updatedUser.company ? updatedUser.company : user.company;
        };
    });
   };
   return res.json(updatedUser);
};

const deleteUser = (req, res) => {
    const id = req.params.id;

    const filteredUsers = users.filter(user => user._id === Number(id));
    if(filteredUsers) {
        res.status(404).send({ msg: 'Bad Request. User not found.'}) 
    };
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === Number(id)) {
            users.splice(i, 1)
        };
    };
    res.json(filteredUsers)
};








module.exports = {
    listUsers, 
    showUser, 
    createUser, 
    updateUser, 
    deleteUser
}