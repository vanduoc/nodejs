const { multipleMongooseToObject } = require('../../util/mongoose');
const Course = require('../models/Courses');

class MeController {
  //[GET]/me/store/courses
  storedCourses(req, res, next) {
    Promise.all([Course.find({}), Course.countDeleted()])
      .then(([courses, numCoursesDeleted]) => {
        res.render('me/store-courses', {
          courses: multipleMongooseToObject(courses),
          numCoursesDeleted,
        });
      })
      .catch(next);
  }

  //[GET]/me/trash/courses
  trashCourses(req, res, next) {
    Course.findDeleted({})
      .then((courses) => {
        res.render('me/trash-courses', {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }
}

module.exports = new MeController();
