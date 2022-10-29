const { multipleMongooseToObject } = require('../../util/mongoose');
const Course = require('../models/Courses');
class SiteController {
    //[GET]/home
    home(req, res, next) {

        Course.find({})
        .then(courses => {
            res.render('home', { 
                courses: multipleMongooseToObject(courses)
             });
        })
        .catch(next);

        // res.render('home');
    }

    //[GET]/search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;