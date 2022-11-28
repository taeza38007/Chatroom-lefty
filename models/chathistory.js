const mongoose = require('mongoose');

const chathistorySchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    text: {
        type: String
    }
}, { timestamps: true }
);

const chathistory = mongoose.model('Chathistory', chathistorySchema);
module.exports = chathistory;


