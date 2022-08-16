const { responce } = require("../../services");
const { Enrolled } = require("../../models/enrolled.model");
const { Assigment } = require("../../models/assignment.model");
const { Submission } = require("../../models/submission.model");

const statisticscontroller = async (res, req) => {
  let enrolled;
  let total = 0;
  let submittedOnTime = 0;
  let notSubmittedOnTime = 0;
  let statistics = {};
  try {
    const enrolled = await Enrolled.find({ studentsId: req.user._id }).select(
      "courseId -_id"
    );

    enrolled.forEach(async (element) => {
      // total assignment
      try {
        //   console.log("courseId", String(element.courseId));
        const assignment = await Assigment.count({
          courseId: String(element.courseId),
        });
        console.log("assignment:", assignment);
        total += assignment;
        // console.log("total:", total);
      } catch (error) {
        console.log(error);
        return responce(res, true, {}, 500, "Internal server error.");
      }
      // find all the assignments
      try {
        //   console.log("courseId", String(element.courseId));
        const assignment = await Assigment.find({
          courseId: String(element.courseId),
        }).select("_id");
        // console.log(assignment);

        // select submitted on time
        assignment.forEach(async (element) => {
          try {
            // submittion on time
            const submission = await Submission.count({
              assignmentId: element._id,
              submittedBy: req.user._id,
              crossedDeadLine: false,
            });
            // console.log("submissions: ", submission);

            submittedOnTime += submission;

            // crossed the submission time
            const crossedTheTime = await Submission.count({
              assignmentId: element._id,
              submittedBy: req.user._id,
              crossedDeadLine: true,
            });
            // console.log("crossedTheTime: ", crossedTheTime);
            notSubmittedOnTime += crossedTheTime;
            statistics = {
              totalAssignments: total,
              submittedOnTime: submittedOnTime,
              crossedDeadLine: notSubmittedOnTime,
              notSubmitted: total - submittedOnTime,
            };

            return responce(res, true, { statistics }, 200, "Successful.");
          } catch (error) {
            console.log(error);
            return responce(res, true, {}, 500, "Internal server error.");
          }
        });
      } catch (error) {
        console.log(error);
        return responce(res, true, {}, 500, "Internal server error.");
      }
    });

    if (!enrolled) return responce(res, false, {}, 404, "No course found.");
  } catch (error) {
    responce(res, true, {}, 500, "Internal server error.");
  }
};

module.exports = statisticscontroller;
