import { useLayoutEffect, useState } from 'react';

function Posts() {
  const [posts, setPosts] = useState([]);
  useLayoutEffect(() => {
    fetch('https://codebuddy.review/posts')
      .then(response => response.json())
      .then(data => setPosts(data.data.posts))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 rounded-lg shadow-lg">
      {posts.map(post => (
        <div
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col items-center"
          key={post.id}
        >
          <div>
            <img src={post.image} alt="post" />
          </div>

          <div className="mb-4r">
            <div className=" flex flex-col items-center">
              <img
                src={post.avatar}
                alt="user"
                className="mx-auto object-cover rounded-full h-16 w-16 "
              />
              <h3>
                <span className="font-bold">First Name:</span> {post.firstName}
              </h3>
            </div>
            <h5>
              <span className="font-bold">Last Name:</span> {post.lastName}
            </h5>
            <p>
              <span className="font-bold">Write Up:</span> {post.writeup}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
