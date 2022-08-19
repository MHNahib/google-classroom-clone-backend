module.exports.home = require("./home");
module.exports.singupconroller = require("./singup.conroller");
module.exports.loginconroller = require("./login.conroller");

// course
module.exports.getAllCourse = require("./course/getAllCourse.controller");
module.exports.getCourseByTeacherId = require("./course/getCourseByTeacherId.controller");
module.exports.getCourse = require("./course/getCourse.controller");
module.exports.createNewCourse = require("./course/createCourse.controller");
module.exports.updateCourse = require("./course/updateCourse.controller");
module.exports.deleteCourse = require("./course/deleteCourse.controller");

// assignment
module.exports.getAllAssignment = require("./assignment/getAllAssignment.controller");
module.exports.getAssignment = require("./assignment/getAssignment.controller");
module.exports.createAssignment = require("./assignment/createAssignment.controller");
module.exports.updateAssignment = require("./assignment/updateAssignment.controller");
module.exports.deleteAssignment = require("./assignment/deleteAssignment.controller");

// enrolled
module.exports.getAllEnrolledCourse = require("./enroll/getAllEnrolledCourse.controller");
module.exports.enrollToTheCourse = require("./enroll/enroll.controller");

// submit
module.exports.submitController = require("./submit/submit");
module.exports.getAllAssignmentByIdController = require("./submit/getAssignmentSubmission.controller");

// statistics
module.exports.statisticscontroller = require("./statistics/statistics.controller");

// profile
module.exports.getUser = require("./profile.controller");
