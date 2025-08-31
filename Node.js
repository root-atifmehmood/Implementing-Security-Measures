const express = require('express');
const router = express.Router();
const validator = require('validator');
const bcrypt = require('bcrypt');
// Assuming you have a User model, e.g., with Mongoose
// const User = require('../models/User');

router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // --- 1. Validation ---
        if (!validator.isEmail(email)) {
            return res.status(400).json({ error: 'Invalid email format.' });
        }
        if (!validator.isLength(password, { min: 8 })) {
            return res.status(400).json({ error: 'Password must be at least 8 characters long.' });
        }

        // --- 2. Sanitization (to prevent XSS) ---
        // The 'escape' function replaces <, >, &, ', " and / with their HTML entity equivalents.
        const sanitizedUsername = validator.escape(username);

        // --- Hashing the password (covered next) ---
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Now you can proceed to create the user with sanitized and validated data
        // const newUser = new User({
        //     username: sanitizedUsername,
        //     email: email,
        //     password: hashedPassword
        // });
        // await newUser.save();
        
        res.status(201).json({ message: 'User registered successfully!', user: sanitizedUsername });

    } catch (error) {
        res.status(500).json({ error: 'Server error during registration.' });
    }
});

module.exports = router;
