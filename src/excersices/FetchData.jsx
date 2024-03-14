import { useState, useEffect } from "react";

function FetchPost() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const getIt = fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((res) => res.json())
        .then((data) => setPost(data));
      setLoading(false);
    }, 2000);
  }, []);

  // if (!post) return <div>Laddar...</div>;

  return (
    <div>
      {loading ? (
        <p>Laddar data... </p>
      ) : (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </>
      )}
    </div>
  );
}

export default FetchPost;
