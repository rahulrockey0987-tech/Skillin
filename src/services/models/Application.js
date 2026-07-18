import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    studentName: {
      type: String,
      required: true,
    },

    studentEmail: {
      type: String,
      required: true,
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true,
    },

    status: {
      type: String,
      enum: [
        "Applied",
        "Under Review",
        "Shortlisted",
        "Rejected",
      ],
      default: "Applied",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Application",
  applicationSchema
);