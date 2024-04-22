import "./postCard.css";
import { Link, useNavigate } from "react-router-dom";
function PostCard(props) {
  const navigate = useNavigate();
  const { data } = props;
  function handleClick(id) {
    console.log(id);
    navigate(`/post-detail/${id}`);
  }
  
  return (
    <div className="postCardContainer">
      <div className="postCardImage">
        <img src="./images/images.jpg" />
      </div>
      <div style={{ fontSize: "15px", fontWeight: "500" }}>
        {data.message?.slice(0, 40)}
      </div>
      <div style={{ fontSize: "15px", fontWeight: "500" }}>
        Date: {data.created_time}
      </div>
      <div className="button">
        <button
          onClick={() => {
            handleClick(data.id);
          }}
        >
          Detail
        </button>
      </div>
    </div>
  );
}

export default PostCard;
