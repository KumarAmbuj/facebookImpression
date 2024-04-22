import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Example from "../../component/Graph";
import "./postDetails.css";

function PostDetail() {
  const { postId } = useParams();
  const [data, setData] = useState({});

  async function getData() {
    try {
      const response = await fetch(
        `https://graph.facebook.com/v19.0/${postId}?fields=id,message,reactions.summary(total_count).as(reactions_total),reactions.type(LIKE).summary(total_count).as(like_reactions),reactions.type(LOVE).summary(total_count).as(love_reactions),reactions.type(WOW).summary(total_count).as(wow_reactions),reactions.type(HAHA).summary(total_count).as(haha_reactions),reactions.type(SAD).summary(total_count).as(sad_reactions),reactions.type(ANGRY).summary(total_count).as(angry_reactions),comments.summary(total_count),shares&access_token=EAAODFOMXwtABOZBqjZCGbUleap7ZAYxrLBi6Gnxq99op6ZA1OU1OIkBbH8AKxyxXouivLsT3foM50jx76n6rkZAcKUOuZAFDFOnWFq8bKkhYAXgJgrWQIV8uJhWuZAMBZB0KcENZCOAUoQrKnWsuvyNYu8Czu4fpbrf7iZBPpGpCrRCfJhgRRCnI5IbPjO`
      );
      const responseJson = await response.json();
      setData(responseJson);
      console.log(responseJson);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="postDetailContainer">
      <div className="postLikesCountDiv">
        <div className="postLikesCountDivBox">
          <div className="fontText">Likes</div>
          <div className="fontText">
            {data?.reactions_total?.summary?.total_count}
          </div>
        </div>
        <div className="postLikesCountDivBox">
          <div className="fontText">Comments</div>
          <div className="fontText">{data?.comments?.summary?.total_count}</div>
        </div>
        <div className="postLikesCountDivBox">
          <div className="fontText">Reach</div>
          <div className="fontText">548</div>
        </div>
        <div className="postLikesCountDivBox">
          <div className="fontText">Share</div>
          <div className="fontText">548</div>
        </div>
      </div>
      <div className="postDetailGraph">
        <div className="postDetailGraphRow">
          <Example data={data} />
        </div>
        <div className="postDetailGraphRow">
          <Example data={data} />
        </div>
      </div>
    </div>
  );
}
export default PostDetail;
