const Course = require('../models/Course');

class coursecontroller {
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .lean()
      .then((Course) => {
        res.render('courses/show', { Course });
      })
      .catch(next);
  }
  //
  create(req, res, next) {
    res.render('courses/create');
  }
  //
  store(req, res, next) {
    req.body.image = `https://i.ytimg.com/vi/${req.body.videoid}/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB8_rE8RxeFtBl2sKBw1tNACfa2WA`;
    const course = new Course(req.body);
    course
      .save()
      .then(() => res.redirect('/me/stored/courses'))
      .catch((error) => {});
  }
  //
  edit(req, res, next) {
    Course.findById(req.params.id)
      .lean()
      .then((Course) => {
        res.render('courses/edit', { Course });
      })
      .catch(next);
  }
  // PUT/courses/:id EDIT
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .lean()
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next);
  }
  //// DELETE
  destroy(req, res, next) {
    Course.delete({ _id: req.params.id })
      .lean()
      .then(() => res.redirect('back'))
      .catch(next);
  }

  //FORCE DELETE
  forcedestroy(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .lean()
      .then(() => res.redirect('back'))
      .catch(next);
  }

  //Patch /courses/:id:restore
  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .lean()
      .then(() => res.redirect('back'))
      .catch(next);
  }

   //courses/handle-form-actions
    handleFormActions(req, res, next) {
     switch(req.body.action){
        case 'delete':
            Course.delete({ _id: { $in: req.body.courseIds} })
              .lean()
              .then(() => res.redirect('back'))
              .catch(next);
        break;
        default:
          res.json({message: 'Action is invalid!' });
     }


  }
}

module.exports = new coursecontroller();
