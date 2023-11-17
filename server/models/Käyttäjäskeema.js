

const mongoose = require ('mongoose')


const UserSchema = new mongoose.Schema(
    
        {
        Käyttäjä: {type: String , required:true, unique:true },
        Sähköposti: {type: String, required: true, unique: true },
        Salasana:    {type: String, required:true},
        Admin:  {
            type:boolean,
            default: false,
        },
        },

{timestamps: true}

);


module.exports = mongoose.model('Käyttäjä', UserSchema)