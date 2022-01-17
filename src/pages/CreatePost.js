import React from "react";
import Navbar from "../components/Navbar";
import SidebarBtn from "../components/sidebar/SidebarBtn";
import Profile from "../components/sidebar/Profile";
import Post from "../components/Post";

function CreatePost() {
  return (
    <div class="flex items-center bg-[#0B0B0B] h-auto font-nunito">
      <div class="item w-4/12 h-screen border-x-2 border-x-[#6A6A6A]/20">
        <Profile />
        <SidebarBtn />
      </div>
      <div class="item w-8/12 h-screen overflow-auto">
        <Navbar />
        <Post />
      </div>
    </div>
  );
}

export default CreatePost;