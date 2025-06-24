const { sanitizeInput } = require('../utils/utils');
const bcrypt = require('bcrypt');

exports.loginUser = (req, res) => {
    const rawUsername = req.body.username;
    const rawPassword = req.body.password;

    if (!rawUsername || !rawPassword) {
        return res.status(400).send("Username and password are required");
    }

    const username = sanitizeInput(rawUsername);
    const password = rawPassword;

    const user = {
        username: "admin",
        password: bcrypt.hashSync("123456", 10)
    };

    if (username === user.username) {
        if (bcrypt.compareSync(password, user.password)) {
            const welcomeMessage = "<h1>Welcome " + username + "</h1>";
            res.send(welcomeMessage);
        } else {
            res.send("Wrong password");
        }
    } else {
        res.send("User not found");
    }
};
