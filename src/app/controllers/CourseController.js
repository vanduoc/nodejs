const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');
const Course = require('../models/Courses');


class CourseController {


    // [GET]/courses
    index(req, res, next) {
      Course.find({})
      .then(courses => {
          res.render('courses', { 
              courses: multipleMongooseToObject(courses)
           });
      })
      .catch(next);
    }

    // [GET]/courses/:slug

    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
        .then(course => {
          res.render('courses/show', { course: mongooseToObject(course) })
        })
        .catch(next);
      }

    //[GET]/courses/create

    create(req, res, next) {
      res.render('courses/create')
    }

    //[POST]/courses/store
    store(req, res, next) {
      const formData = req.body;
      formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
      const course = new Course(formData);
      course.save()
        .then(() => res.redirect('/'))
        .catch((err) => {

        })
    }
}

module.exports = new CourseController;