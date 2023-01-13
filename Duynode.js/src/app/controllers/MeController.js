const Course = require('../models/Course');

class MeController {
  // [GET /me/stored/courses
  storedCourses(req, res, next) {
    Course.find({})
      .lean()
      .then((courses) => res.render('me/storedCourses', { courses }))
      .catch(next);
  }
  //Trash
  trashCourses(req, res, next) {
    Course.findDeleted({})
      .lean()
      .then((courses) => res.render('me/trashCourses', { courses }))
      .catch(next);
  }
}

module.exports = new MeController();
