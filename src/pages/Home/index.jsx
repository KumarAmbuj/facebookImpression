import "./home.css";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [profile, setProfile] = useState(null);
  const [data, setData] = useState([]);
  const url = `https://graph.facebook.com/v19.0/3799971930326902/posts?access_token=EAAFrAe5yoZAEBOZC2ZAq8mWS2BZA9hMvTDjByUqqFoYY20xWgUc7Hu2y5aZBHiqc8DsWu3Tt3OVSvdbdkRRxHwCn6SRlOavuyNSl2igP7p6Vw7ny2Xt4pxKpyakNvWAJeLZBK2jpqlhtA9QGRkZBpGwWYTJDFGrOyxc2ivvm0TJhpXj81obF2ss0i31CsKnMBZAXAzKzdBEUYZAJP6nc2c9pFUxkGrF11JRZBgGfpZC4BJ5BpZCxPtgpIGFl`;
  const url2 =
    "https://graph.facebook.com/v19.0/3799971930326902_2313005489023561?fields=id,message,reactions.summary(total_count).as(reactions_total),reactions.type(LIKE).summary(total_count).as(like_reactions),reactions.type(LOVE).summary(total_count).as(love_reactions),reactions.type(WOW).summary(total_count).as(wow_reactions),reactions.type(HAHA).summary(total_count).as(haha_reactions),reactions.type(SAD).summary(total_count).as(sad_reactions),reactions.type(ANGRY).summary(total_count).as(angry_reactions),comments.summary(total_count),shares&access_token=EAAFrAe5yoZAEBOZBPJ2LOMiJfu3mDc0BmpFt95rHc5TFp1Ntv9LMobmN4czfE310iZBvlHss9qEc5fucH5k22jeE2IAhB5ao1pKshBSikCXZArPudZCp78RF25tsjOWRQC1y35uuUPOZA7sK4XrKq6S9AQL5VNzcJUE1EUvdCkSTVZBX3Q6UWjxoM8ZC";
  async function getData() {
    try {
      const response = await fetch(url);
      const responseJson = await response.json();
      console.log(responseJson.data);
      setData(responseJson.data);
      navigate("/post", { state: { data: responseJson.data } });
    } catch (error) {
      console.log(error);
    }
  }
  //   useEffect(() => {
  //     getData();
  //   }, []);
  return (
    <>
      <div>
        <div className="userName">
          Welcome Ambuj !!!{" "}
          <button className="myPost" onClick={getData}>
            My Posts
          </button>
        </div>
      </div>
      {/* {!profile ? (
        <div>
          <LoginSocialFacebook
            style={{ zIndex: "2" }}
            appId="988550662701776"
            onResolve={(response) => {
              console.log(response);
              setProfile(response.data);
              setToken(response.data.accessToken);
              console.log(response.data.accessToken);
            }}
            onReject={(error) => console.log(error)}
          >
            <FacebookLoginButton />
          </LoginSocialFacebook>
        </div>
      ) : (
        <div>
          <div className="userName">
            Welcome {profile.name} !!!{" "}
            <button className="myPost" onClick={getData}>
              My Posts
            </button>
          </div>
        </div>
      )} */}
      <div>
        <div className="homeContainer">
          <div className="homeRow">
            <div className="homeRowImage">
              <img src="/images/download.png" />
            </div>

            <div className="homeRowImage">
              <img src="/images/fb.webp" />
            </div>
          </div>

          <div className="homeRow">
            <div className="homeRowImage">
              <img src="/images/fb2.png" />
            </div>

            <div className="homeRowImage">
              <img src="/images/fb3.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
