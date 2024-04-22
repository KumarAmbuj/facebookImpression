import { useEffect, useState } from "react";
import PostCard from "../../component/PostCard";
import "./posts.css";
import { useLocation } from "react-router-dom";

function Post() {
  const [showData, setShowData] = useState([]);
  const location = useLocation();
  const data = location.state.data;

  //console.log("dataaaaaaaaaaa", data);

  return (
    <div className="postContainer">
      <div className="postContent">
        {data.map((val) => {
          return <PostCard data={val} key={val.id} />;
        })}

        {/* <PostCard />
        <PostCard />
        <PostCard />
        <PostCard /> */}
      </div>
    </div>
  );
}
export default Post;
