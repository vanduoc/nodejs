module.exports = {
    // Giải quyết vấn đề của handlebar khi tải dữ liệu lên từ server
    multipleMongooseToObject: function(mongooses) {
        return mongooses = mongooses.map(mongoose => mongoose.toObject());
    },

    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
}