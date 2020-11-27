const mongoose = require('mongoose')

let LendBookSchema = mongoose.Schema({
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

    lenddate: {
        type: Date,
        required: false
    },

    returndate: {
        type: Date,
        required: true
    },

    hasitbeenreturned: {
        type: Boolean,
        required: false
    },

    logtype: {
        type: Boolean,
        required: false
    },

    expectedreturndate: {
        type: Date,
        required: false
    },

    borrowertype: {
        type: String,
        required: false
    },

    comments: {
        type: String,
        required: false,
        trim: false
    },

    penalty: {
        type: Number,
        required: false //default 0 naira
    },

    defaulteddays: {
        type: Number,
        required: false
    }

    /*user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }*/

}, {
    timestamps: true
})

module.exports = mongoose.model('lendbook', LendBookSchema)