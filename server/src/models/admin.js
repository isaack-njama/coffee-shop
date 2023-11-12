const mongoose = require('mongoose');

const schema = mongoose.Schema;

const adminSchema = new schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email_address: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;