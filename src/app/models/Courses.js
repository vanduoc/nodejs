const mongoose = require('mongoose');
slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, require: true, default: 'courses\'s name'},
    desc: { type: String, default: 'loLorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print'},
    image: {type: String},
    slug: { type: String},
    level: { type: String},
    videoId: { type: String },
    slug: { type: String, slug: 'name', unique: true },
    // createAt: { type: Date, default: Date.now},
    // updateAt: { type: Date, default: Date.now},
}, {
    timestamps: true,
});

module.exports = mongoose.model('Course', Course);