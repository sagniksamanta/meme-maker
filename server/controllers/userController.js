import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import UsersMeme from '../models/user.js';

export const signup = async (req, res) => {
    const { email, password, confirmPassword, firstName, lastName} = req.body;
    
    try {
        const existingUser = await UsersMeme.findOne({ email });
        
        if(existingUser) return res.status(400).json({ message: 'User already exist' });
        if(password != confirmPassword) return res.status(400).json({ message: "Password don't match"});

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await UsersMeme.create({ email, password: hashedPassword, firstName, lastName});

        res.status(200).json({result: result});

    } catch (error) {
        res.status(500).json({ message: 'Something went wrong during signup'});
    }
}

export const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await UsersMeme.findOne({ email });
        if(!existingUser) return res.status(404).json({ message: "User doesn't exist" });
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if(!isPasswordCorrect) return res.status(404).json({ message: "Invalid Credentials" });

        res.status(200).json({ result: existingUser });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Something went wrong during signin'});
    }
}