const mongoose = require("mongoose");
const submissionSchema = new mongoose.Schema(
  {
    assignmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Assignment",
      required: true,
    },
    submittedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    dateTime: {
      type: Date,
      required: true,
    },
    crossedDeadLine: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Assigment = new mongoose.model("Submission", submissionSchema);

module.exports.submissionSchema = submissionSchema;
module.exports.Submission = Submission;
