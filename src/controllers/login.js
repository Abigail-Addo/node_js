const loginUser = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if(email == "" || email == null) {
        res.status(303).json({message: "Email cannot be empty"})
        return;
    }

    if(password == "" || password == null) {
        res.status(303).json({message: "Password cannot be empty"})
        return;
    }


    if(password != "mainAdmin") {
        res.status(303).json({message: "Password is incorrect"})
    } else {
        res.status(200).json({
            name: "Abigail",
            email: "addoa350@gmail.com",
            password: req.body.password
        })
    }
}

module.exports.loginUser = loginUser;