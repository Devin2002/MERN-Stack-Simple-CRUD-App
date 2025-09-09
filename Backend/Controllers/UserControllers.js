const User = require('../Model/UserModel');

const getAllUsers = async (req, res,next) => {
    let Users;
    //get all users from the database
    try {
        Users = await User.find(); 
    } catch (err) {
        console.log(err);
    }
    //not found any users
    if (!Users) {
        return res.status(404).json({ message: "No users found" });
    }
    //Display all users
    return res.status(200).json({ Users });
}; 

//data Insert 
const addUser = async (req, res, next) => {
    const{name, gmail, age, address} = req.body;
    let user;
    try{
        user = new User({
            name,
            gmail,
            age,
            address
        });
        await user.save();
    }catch(err) {
        console.log(err);
    }

    //not insert any users
    if (!user) {
        return res.status(404).json({ message: "Unable to add user" });
    }
    return res.status(201).json({ user });

};

//Get by   Id
const getById = async (req, res, next) => {
    const id = req.params.id;
    let user;
    try {
        user = await User.findById(id);
    } catch (err) {
        console.log(err);
    }

    //not available users
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    return res.status(201).json({ user });

}
//update user details
const updateUser = async (req, res, next) => {
    const id = req.params.id;
    const { name, gmail, age, address } = req.body;
    let user;
    try {
        user = await User.findByIdAndUpdate(id, {name,gmail,age,address});
        user = await user.save();
    }catch (err) {
        console.log(err);
    }
}

//Update user details
const deleteUser = async (req, res, next) => {
    const id = req.params.id;
    let user;
    try {
        user = await User.findByIdAndDelete(id);
    } catch (err) {
        console.log(err);
    }

    if (!user) {
        return res.status(404).json({ message: "Unable to update user detailes" });
    }
    return res.status(200).json({ user });
};



// Exporting the functions to be used in the routes
exports.getAllUsers = getAllUsers;
//Exporting the addUser function to be used in the routes
exports.addUser = addUser;
//Exporting the getById function to be used in the routes
exports.getById = getById;
//Exporting the updateUser function to be used in the routes
exports.updateUser = updateUser;
//Exporting the deleteUser function to be used in the routes
exports.deleteUser = deleteUser;
