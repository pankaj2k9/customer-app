const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var organizationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
}, {
        timestamps: true
    });

const customerSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    company_email: {
        type: String,
        required: true
    },
    company_website: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    email_notification: {
        type: Boolean,
        default: false
    },
    organization: [organizationSchema]
}, {
        timestamps: true
    });

var Customers = mongoose.model('Customer', customerSchema);

module.exports = Customers;