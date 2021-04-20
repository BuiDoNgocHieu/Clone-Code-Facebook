const UserModel = require("../models/user.model");

const bcrypt = require("bcryptjs")

const login = () => {
    return "login";
};

const signup = async (lastName, firstName, email, password) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const user = new UserModel({ lastName, firstName, email, password: hash })
        const result = await user.save();
        if (!result) {
            return {
                status: 3,
                massage: "Lối hệ thống",
            };
        }
        return { status: 1, data: result };
    } catch (error) {
        return {
            status: 3,
            massage: error.toString(),
        }
    }
};



module.exports = {
    login,
    signup,
};
