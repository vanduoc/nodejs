const { multipleMongooseToObject } = require('../../util/mongoose');
const Course = require('../models/Courses');

class MeController {
  //[GET]/me/store/courses
  storedCourses(req, res, next) {
    let coursesQuery = Course.find({});

    if (req.query.hasOwnProperty('_sort')) {
      coursesQuery = coursesQuery.sort({
        [req.query.column]: req.query.type,
      });
    }

    Promise.all([coursesQuery, Course.countDeleted()])
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
