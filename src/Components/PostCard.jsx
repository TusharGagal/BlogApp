/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import service from "../Appwrite/config";
import { Link } from "react-router-dom";
const PostCard = ({ $id, Title, FeaturedImage }) => {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-pastel-gray rounded-xl p-2">
        <div className="w-full justify-center mb-4">
          <img
            src={service.getFilePreview(FeaturedImage)}
            alt={Title}
            className="rounded-xl"
          />
          <h2 className="text-xl text-center font-serif font-bold py-1">
            {Title}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
