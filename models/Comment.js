// require mongoose
const mongoose = require("mongoose");

// create the schema
const UserSchema = new mongoose.Schema({
  post_id: {
    type: Int,
  },
  user_id: {
    type: Int,
  },
  comment_content: {
    type: string,
  },
  comment_upvote: {
    type: Int,
  },
});

// export the model
module.exports = Comment = mongoose.model("users", UserSchema);