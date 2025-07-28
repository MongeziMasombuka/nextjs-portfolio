import { Schema, model, models } from "mongoose";

const PostSchema: Schema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  slug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  excerpt: { type: String, required: true },
  date: { type: String, required: true },
  image: { type: String, required: true },
});

//export default mongoose.models.Post || mongoose.model<IPost>('Post', PostSchema);
const Post = models.Post || model("Post", PostSchema);

export default Post;
