const { sanitizeInput } = require('../utils/utils');

exports.loginUser = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = {
        username: "admin",
        password: "123456"
    };

    if (username == user.username) {
        if (password = user.password) {  
            const welcomeMessage = "<h1>Welcome " + username + "</h1>";
            res.send(welcomeMessage);
        } else {
            res.send("Wrong password");
        }
    } else {
        res.send("User not found");
    }
};
