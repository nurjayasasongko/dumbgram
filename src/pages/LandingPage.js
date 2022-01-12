import React from "react";
import logo from "../assets/icons/logo.svg";
import MasonryGrid from '../components/MasonryGrid';

function LandingPage() {
  return (
    <div>
      <div class="bg-[#0B0B0B] flex justify-evenly items-center h-screen w-auto">
        <div class="item w-5/12 h-3/4">
          <img src={logo} alt="logo"></img>
          <h1 class="font-[Metropolis] text-white text-3xl">
            Share your best photos or videos
          </h1>
          <p class="text-[#6A6A6A] text-xs my-6">
            Join now, share your creations with another people and enjoy other
            creations.
          </p>
          <button class="text-white font-[Metropolis] text-xs bg-gradient-to-r from-[#4DD4F7] via-[#9090FB] via-[#FF6B81] to-[#FBDF63] rounded px-6 py-1">
            Login
          </button>
          <button class="text-[#B7B7B7] font-[Metropolis] text-xs px-6 py-1">
            Register
          </button>
        </div>
        <div class="item w-5/12 h-4/4">
          <MasonryGrid />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
