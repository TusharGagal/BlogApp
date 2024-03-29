import { useEffect, useState } from "react";
import service from "../Appwrite/config";
import { Container, PostCard } from "../Components";
import { useSelector } from "react-redux";
function Home() {
  const [posts, setPosts] = useState([]);
  const authStatus = useSelector((state) => state.auth.status);
  useEffect(() => {
    if (authStatus) {
      service.getPosts().then((posts) => {
        if (posts) {
          setPosts(posts.documents);
        }
      });
    }
    setPosts([]);
  }, [authStatus]);
  if (posts.length === 0 || authStatus === false) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                {!authStatus ? "Login to read posts" : "No posts are there"}
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  } else {
    return (
      <div className="w-full py-8">
        <Container>
          <div className="flex flex-wrap flex-col gap-5">
            <h1 className="text-center font-serif text-2xl font-bold">Posts</h1>
            <div className="posts flex flex-wrap items-center">
              {posts.map((post) => (
                <div key={post.$id} className="postcard p-2 w-1/4">
                  <PostCard {...post} />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Home;
