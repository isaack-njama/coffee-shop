import { Router } from 'express';
import jwt from 'jsonwebtoken';

import { Password } from '../../helpers/password.js';
import User from '../../models/user.js';
import { config } from '../../config/config.js';

const router = Router();

// Registration
router.post('/register', async (req, res) => {
    try {
        const { first_name, last_name, email_address, username, password } = req.body;

        const existingUser = await User.findOne({ email_address });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt(password, 10);

        // Create a new user
        const newUser = new User({
            first_name,
            last_name,
            email_address,
            username,
            password: hashedPassword,
        });

        await newUser.save();

        res.status(201).json({ message: 'User registed successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Login feature
router.post('/login', async(req, res) => {
    try {
        const { email_address, password } = req.body;

        // Check if the user exists
        const user = await User.findOne({ email_address });

        if (!user) {
            return res.status(401).json({ message: 'User does not exist' });
        }

        // // Check if password is correct
        // const passwordMatch = await compare(password, user.password);
        // if(!passwordMatch) {
        //     return res.status(401).json({ message: 'Invalid credentials' });
        // }

        // Generate a JWT token
        const token = jwt.sign(
            { 
                userId: user._id 
            }, 
            config.JWT_SECRET, 
            { 
                expiresIn: config.JWT_TOKEN_EXPIRES_IN, 
            });

        res.status(200).json({ token });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
})

export default router;