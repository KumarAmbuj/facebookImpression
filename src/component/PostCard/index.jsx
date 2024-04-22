import "./postCard.css";
function PostCard(props) {
  const { data } = props;
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
        <button>Detail</button>
      </div>
    </div>
  );
}

export default PostCard;
