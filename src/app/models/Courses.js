const mongoose = require('mongoose');
slug = require('mongoose-slug-generator');
var mongoose_delete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const Course = new Schema(
  {
    _id: { type: Number },
    name: { type: String, require: true, default: "courses's name" },
    desc: {
      type: String,
      default:
        'loLorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print',
    },
    image: { type: String },
    slug: { type: String },
    level: { type: String },
    videoId: { type: String },
    slug: { type: String, slug: 'name', unique: true },
    // createAt: { type: Date, default: Date.now},
    // updateAt: { type: Date, default: Date.now},
  },
  {
    timestamps: true,
    _id: false,
  },
);
// Add plugin
mongoose.plugin(slug);
Course.plugin(mongoose_delete, {
  deletedAt: true,
  overrideMethods: 'all',
});

Course.plugin(AutoIncrement);

module.exports = mongoose.model('Course', Course);
