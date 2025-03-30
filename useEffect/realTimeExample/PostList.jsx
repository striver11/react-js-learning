can be used in a real-world scenario like fetching a list of users from an API and displaying them:



import { useState, useEffect } from "react";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch posts when component mounts
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data.slice(0, 10)); // Get first 10 posts
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []); // Empty dependency array → Runs only once

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Latest Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;



// Why is useEffect Used Here?
// ✅ Fetches data only once when the component mounts.
// ✅ Updates state with the fetched user list.
// ✅ Handles loading state to show a message while fetching.
// ✅ Prevents unnecessary re-fetching by using [] as the dependency array.

// Where is This Used in Real Apps?
// Fetching API data (products, posts, user profiles, etc.)

// Listening to authentication state (Firebase, OAuth)

// Updating page title dynamically (document.title = "New Title";)

// Subscribing to events (WebSockets, real-time updates)
