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
    },
    crossedDeadLine: {
      type: Boolean,
      required: true,
    },
    file: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Submission = new mongoose.model("Submission", submissionSchema);

module.exports.submissionSchema = submissionSchema;
module.exports.Submission = Submission;
