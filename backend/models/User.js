import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    end_year: String,
    intensity: Number,
    sector: String,
    topic: String,
    insight: String,
    url: {
      data: Buffer,
      contentType: String,
    },
    region: String,
    start_year: String,
    impact: String,

    added: {
      type: String,
      default: Date,
    },
    published: {
      type: String,
      default: Date,
    },
    country: String,
    revelance: Number,
    pestle: String,
    title: String,
    likelihood: Number,
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
