const express = require('express');
const router = express.Router();
const User = require('../models/User'); 


router.post('/register', async (req, res) => {
    const { name, email, phone, city, password } = req.body;

   
    console.log('Received data:', req.body);

    if (!name || !email || !password || !phone || !city) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const newUser = new User({ 
            name, 
            email, 
            phone,     
            city,       
            password 
        });

        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
