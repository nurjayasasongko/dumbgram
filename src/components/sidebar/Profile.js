import React from "react";
import logo from "../../assets/icons/logo.svg";
import lisaProfile from "../../assets/img/Rectangle 6.jpg";

function Profile() {
  return (
    <div class="flex flex-col justify-center items-center w-full px-8 font-nunito">
      <div class="item w-2/6 h-auto -translate-x-full mb-6 mt-3">
        <img src={logo} alt="logo-img" />
      </div>
      <div class="item w-max h-auto">
        <div class="rounded-full p-1 bg-gradient-to-r from-[#4DD4F7] via-[#9090FB] via-[#FF6B81] to-[#FBDF63]">
          <img
            src={lisaProfile}
            alt="logo-img"
            class="rounded-full h-[7.5rem] w-[7.5rem]"
          />
        </div>
      </div>
      <div class="item w-full h-auto m-4">
        <h1 class="text-white text-center font-bold text-2xl">Lisa</h1>
        <p class="text-[#ABABAB] text-center text-sm">@lalalisa_m</p>
      </div>
      <div class="item w-full h-auto flex justify-evenly mb-4">
        <div class="text-[#ABABAB] p-1">
          Post
          <p class="text-white text-center">200</p>
        </div>
        <div class="text-[#ABABAB] px-4 border-x border-x-[#6A6A6A]/50">
          Follower
          <p class="text-white text-center">51.2 M</p>
        </div>
        <div class="text-[#ABABAB] p-1">
          Following
          <p class="text-white text-center">1</p>
        </div>
      </div>
      <div class="item w-full h-auto text-white text-sm text-center font-nunito mb-8">Rapper in Black Pink, Brand Ambasador Penshoppe</div>
    </div>
  );
}

export default Profile;
