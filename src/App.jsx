import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import Header from "./component/Header";

import Home from "./pages/Home";
import Post from "./pages/Posts";
import PostDetail from "./pages/PostDeatail";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/post-detail/:postId" element={<PostDetail />} />
      </Routes>

      {/* <Home /> */}
    </>
  );
}

export default App;
