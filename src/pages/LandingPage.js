import React from "react";
import logo from "../assets/icons/logo.svg";
import transpLogo from "../assets/icons/logo-transparent.svg";
import MasonryGrid from '../components/MasonryGrid';
import LoginModal from "../components/modals/Login";
import RegisterModal from "../components/modals/Register";

function LandingPage() {
  return (
    <div>
      <div class="bg-[#0B0B0B] flex justify-evenly items-center h-screen w-auto">
        <div class="item w-5/12 h-3/4">
          <img src={logo} alt="logo-img"></img>
          <img src={transpLogo} alt="mirror"></img>
          <h1 class="font-nunito text-white text-3xl">Share your best photos or videos</h1>
          <p class="text-[#6A6A6A] text-xs font-nunito my-6">Join now, share your creations with another people and enjoy other creations.</p>
          <LoginModal />
          <RegisterModal />
        </div>
        <div class="item w-5/12 h-4/4">
          <MasonryGrid />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
