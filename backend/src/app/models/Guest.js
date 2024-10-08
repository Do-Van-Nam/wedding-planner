const mongoose  = require('mongoose')
const Schema = mongoose.Schema

const Guest = new Schema({
    planId : {type: String},
    guestList: [
        {
            name:{type:String},
            email:{type:String}
        }
    ]
})

module.exports = mongoose.model('Guest' , Guest)