const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post("/", async (req, res) => {
    try {
        const { fullName, email, message } = req.body;
        const newContact = new Contact({ fullName, email, message });
        await newContact.save();
        res.status(201).json({ message: "message sent successfully" });
    } catch (error) {
        res.status(500).json({ message: "something went wrong" });
    }
});

module.exports = router; // ✅ Make sure to export the router
