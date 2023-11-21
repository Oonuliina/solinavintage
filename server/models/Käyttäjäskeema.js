const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
        {
                Sahkoposti: { type: String, required: true, unique: true },
                Salasana: { type: String, required: true }
        },
        { timestamps: true }
);

module.exports = mongoose.model('Käyttäjä', UserSchema)