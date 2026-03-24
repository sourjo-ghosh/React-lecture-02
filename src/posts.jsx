import { use } from "react";
import Post from "./post";

export default function Posts({ postsPromises }) {
  const posts = use(postsPromises);
  return (
    <div>
      <p style={{fontSize:'25px'}}> Here are your posts : {posts.length}</p>
      {
        posts.map(post => (<Post key={post.id} post={post}></Post>))
      }
    </div>
  );
}

