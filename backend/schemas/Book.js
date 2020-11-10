const mongoose = require('mongoose')

let BookSchema = mongoose.Schema({
    category: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true,
        trim: true
    },

    callnumber: {  //primarykey
        type: Number,
        required: true
    },

    author: {
        type: String,
        required: true,
        trim: true
    },

    pubyear: {
        type: Number,
        required: true
    },

    volume: {
        type: String,
        required: true
    },

    size: {
        type: String,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    }

})

module.exports = mongoose.model('book', BookSchema)