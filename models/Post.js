// require mongoose
const mongoose = require("mongoose");

// create the schema
const UserSchema = new mongoose.Schema({
  url: {
    type: String,
  },
  title: {
    type: String,
  },
  user_id: {
    type: Int,
  },
  post_content: {
    type: String,
  },
  post_upvote: {
    type: String,
  },
});

// export the model
module.exports = Post = mongoose.model("users", UserSchema);
