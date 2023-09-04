const loginUser = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if(email == "" || email == null) {
        res.status(303).json({message: "email cannot be empty"})
        return;
    }

    if(password == "" || password == null) {
        res.status(303).json({message: "password cannot be empty"})
        return;
    }


    if(password != "mainAdmin") {
        res.status(303).json({message: "password is incorrect"})
    } else {
        res.status(200).json({
            name: "Abigail Addo",
            email: "addoa350@gmail.com",
            password: req.body.password
        })
    }
}

module.exports.loginUser = loginUser;