const mongoose = require('mongoose')

let User = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    regno: {//staff number or student no
        type: String,
        required: true
    },

    department: {
        type: String,
        required: true
    },
    
    phoneno: {
        type: String,
        required: true
    },

    bookdescription:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "lendbook", //it is lendbook not nook
        required: false
    }]

});

module.exports = mongoose.model('user', User)