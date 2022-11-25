const User = require('../models/users');
const bcrypt = require('bcryptjs');

const hashPassword = async password => {
    const salt = await bcrypt.genSalt(8);
    return await bcrypt.hash(password, salt);
};

const addUser = (res, username, password) => {
    let user = new User({
        username: `${username}`,
        password: `${password}`
    });

    user.save()
        // .then(result => res.send(result))
        .catch(err => console.log(err))
    // res.redirect('/');
};

module.exports = { addUser, hashPassword };

// const hashPassword = async (password, hashedpass) => {
//     const salt = await bcrypt.genSalt(8);
//     // console.log(`Salt: ${salt}`);

//     hashedpass = await bcrypt.hash(password, salt);
//     // console.log(`Hashed pass: ${hashedpass}`);

//     return await hashedpass;
// };

