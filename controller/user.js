import User from "../model/user.js";

export const registerUser = async(req, res) => {
    try {
        const user = new User(req.body);
        console.log(user)
        await user.save();
        res.status(201).json({
            status: "success",
            message: "User registered successfully",
            data: user,
        });
    }
    catch (error) {
        res.status(500).json({
            status: "failure",
            message: error.message,
        });
    }
}