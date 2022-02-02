import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import UsersMeme from '../models/user.js';

export const signup = async (req, res) => {
    const { email, password, confirmPassword, firstName, lastName } = req.body;

    try {
        const existingUser = await UsersMeme.findOne({ email });

        if (existingUser) return res.status(400).json({ message: 'User already exist' });
        if (password != confirmPassword) return res.status(400).json({ message: "Password don't match" });

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await UsersMeme.create({ email, password: hashedPassword, firstName, lastName });

        res.status(200).json({ result: result });

    } catch (error) {
        res.status(500).json({ message: 'Something went wrong during signup' });
    }
}

export const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await UsersMeme.findOne({ email });
        if (!existingUser) return res.status(404).json({ message: "User doesn't exist" });
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordCorrect) return res.status(404).json({ message: "Invalid Credentials" });

        res.status(200).json({ result: existingUser });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Something went wrong during signin' });
    }
}

export const addUpdateMeme = async (req, res) => {
    try {
        const { id, file } = req.body;
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No User exist with id: ${id}`);

        const user = await UsersMeme.findById(id);
        user.memeData.push(file);
        const updatedUser = await UsersMeme.findByIdAndUpdate(id, user, { new: true });
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: 'Error in uploading file' });
    }
}

export const getMeme = async(req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No User exist with id: ${id}`);
        const user = await UsersMeme.findById(id);

        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}