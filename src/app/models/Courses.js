const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, default: 'courses\'s name'},
    desc: { type: String, default: 'loLorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print'},
    image: {type: String},
    createAt: { type: Date, default: Date.now},
    updateAt: { type: Date, default: Date.now},
});

module.exports = mongoose.model('Course', Course);