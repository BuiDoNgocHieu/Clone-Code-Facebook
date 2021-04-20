const express = require("express");

const AuthController = require("../controllers/auth.controller");

const router = express.Router();

router.get("/login", (req, res) => {
    const result = AuthController.login();
    res.send(result);
});

router.post("/signup", async (req, res) => {
    try {
        console.log('string')
        const { lastName, firstName, email, password } = req.body
        const result = await AuthController.signup(
            lastName,
            firstName,
            email,
            password
        );
        res.send(result);
    } catch (error) {
        res.send({
            status: 3,
            massage: error.toString()
        })
    }
});


module.exports = router;
