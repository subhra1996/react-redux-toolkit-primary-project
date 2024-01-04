import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./postSlice";

const PostView = () => {
  const { isLoading, posts, error } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <h1>Post View</h1>
      {isLoading && <h5>Loading...</h5>}

      {error && <h5>{error}</h5>}

      <section>
        {posts &&
          posts.map((post) => {
            return (
              <article key={post.id}>
                <h5>{post.title}</h5>
                <p>{post.body}</p>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default PostView;
