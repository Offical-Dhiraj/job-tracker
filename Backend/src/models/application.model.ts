import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },

    company: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      required: true,
    },

    jdLink: String,
    notes: String,

    status: {
      type: String,
      enum: ["Applied", "Phone Screen", "Interview", "Offer", "Rejected"],
      default: "Applied",
    },

    dateApplied: {
      type: Date,
      default: Date.now,
    },

    salaryRange: String,
    skills: [String],
  },
  { timestamps: true }
);

export const Application = mongoose.model("Application", applicationSchema);