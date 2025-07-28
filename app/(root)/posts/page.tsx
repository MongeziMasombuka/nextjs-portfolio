import { getPosts } from "../../actions/post.actions";
import Posts from "./Posts";

const PostsPage = async () => {
  const posts = await getPosts();

  return (
    <div>
      <Posts posts={posts} />
    </div>
  );
};

export default PostsPage;
