const { multipleMongooseToObject } = require('../../util/mongoose');
const Course = require('../models/Courses');


class MeController {

    //[GET]/me/store/courses
    storeCourses(req, res, next) {
        Course.find({})
        .then(courses => {
            res.render('me/store-courses', { 
                courses: multipleMongooseToObject(courses),
             });
        })
        .catch(next);
    }
}

module.exports = new MeController;