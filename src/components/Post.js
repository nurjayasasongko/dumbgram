import React from 'react'

function Post() {
  return (
    <div class="px-4 mt-8">
      <button type="button" class="text-white bg-gradient-to-r from-[#4DD4F7] via-[#9090FB] via-[#FF6B81] to-[#FBDF63] font-bold rounded text-sm px-2.5 py-2.5 inline-flex items-center mb-4 h-9">
      Upload Photos or Videos
      </button>
      <textarea
      class="form-control block w-full px-3 py-1.5
        text-base
        font-normal
        text-gray-700
        bg-[#D2D2D2]/25 bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mb-4
        mr-8
        focus:text-gray-700 focus:bg-white/20 focus:border-black focus:outline-none
      "
      id="exampleFormControlTextarea1"
      rows="5"
      placeholder="Caption"
    ></textarea>
      <button type="button" class="text-white bg-gradient-to-r from-[#4DD4F7] via-[#9090FB] via-[#FF6B81] to-[#FBDF63] font-bold rounded text-sm px-2.5 py-2.5 mt-6 inline-flex items-center h-9 translate-x-[48rem]">
      Upload
      </button>
    </div>
  )
}

export default Post
