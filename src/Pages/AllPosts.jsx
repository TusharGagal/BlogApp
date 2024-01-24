import { useState, useEffect } from "react";
import { Container, PostCard } from "../Components";
import service from "../Appwrite/config";
function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    service.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);
  if (posts.length !== 0) {
    return (
      <div className="w-full py-8">
        <Container>
          <div className="flex flex-wrap">
            <div className="w-full flex flex-wrap items-center justify-center">
              <h1 className="text-center font-serif text-2xl font-bold">
                Posts
              </h1>
            </div>
            {posts.map((post) => (
              <div key={post.$id} className="p-2 w-1/4">
                <PostCard {...post} />
              </div>
            ))}
          </div>
        </Container>
      </div>
    );
  } else {
    return (
      <div className="w-full py-8">
        <Container>
          <div className="flex flex-wrap justify-center items-center text-3xl ">
            No posts found. Please add the post from Add Post option.
          </div>
        </Container>
      </div>
    );
  }
}

export default AllPosts;
