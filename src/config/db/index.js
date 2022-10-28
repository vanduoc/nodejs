const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/Node_Learning_DB');
        console.log('connect succesfully!!')
    }
    catch(error) {
        console.log('connect failure!!')
    }
}

module.exports = { connect }