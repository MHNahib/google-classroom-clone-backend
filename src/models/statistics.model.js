const mongoose = require("mongoose");
const statisticsSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    totalSubmissions: {
      type: Number,
      required: true,
    },
    notSubmitted: {
      type: Number,
      required: true,
    },
    totalSubmittedOnTime: {
      type: Number,
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
