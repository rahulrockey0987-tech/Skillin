import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    phone: String,
    dob: String,
    address: String,

    college: String,
    branch: String,
    graduationYear: String,
    rollNumber: String,
    cgpa: String,
    university: String,

    skills: String,

    github: String,
    linkedin: String,

    bio: String,

    photo: String,
    resume: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Profile", profileSchema);