import React from "react";

function Navbar() {
  return (
    <nav class="px-2 mt-2 sm:px-4 pt-2.5 font-nunito">
      <div class="container flex justify-between items-center mx-auto">
        <div class="flex order-2">
          {/* Notif Button */}
          <button type="button" class="inline-flex items-center mr-5">
            <svg width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_54_442)">
            <path d="M16.875 5.225C16.53 5.225 16.25 4.945 16.25 4.6V2.5C16.25 1.81125 15.6887 1.25 15 1.25C14.3112 1.25 13.75 1.81125 13.75 2.5V4.6C13.75 4.945 13.47 5.225 13.125 5.225C12.78 5.225 12.5 4.94625 12.5 4.6V2.5C12.5 1.12125 13.6212 0 15 0C16.3787 0 17.5 1.12125 17.5 2.5V4.6C17.5 4.94625 17.22 5.225 16.875 5.225Z" fill="#ABABAB"/>
            <path d="M15 30C12.5875 30 10.625 28.0375 10.625 25.625C10.625 25.28 10.905 25 11.25 25C11.595 25 11.875 25.28 11.875 25.625C11.875 27.3475 13.2775 28.75 15 28.75C16.7225 28.75 18.125 27.3475 18.125 25.625C18.125 25.28 18.405 25 18.75 25C19.095 25 19.375 25.28 19.375 25.625C19.375 28.0375 17.4125 30 15 30Z" fill="#ABABAB"/>
            <path d="M25.625 26.25H4.375C3.34125 26.25 2.5 25.4088 2.5 24.375C2.5 23.8262 2.73875 23.3075 3.15625 22.95C5.12625 21.285 6.25 18.8625 6.25 16.2975V12.5C6.25 7.675 10.175 3.75 15 3.75C19.825 3.75 23.75 7.675 23.75 12.5V16.2975C23.75 18.8638 24.8737 21.285 26.8337 22.9413C27.2612 23.3075 27.5 23.8262 27.5 24.375C27.5 25.4088 26.66 26.25 25.625 26.25ZM15 5C10.8637 5 7.5 8.36375 7.5 12.5V16.2975C7.5 19.2325 6.215 22.0013 3.97375 23.8963C3.83 24.0188 3.75 24.1925 3.75 24.375C3.75 24.72 4.03 25 4.375 25H25.625C25.97 25 26.25 24.72 26.25 24.375C26.25 24.1925 26.17 24.0188 26.0313 23.9C23.7863 22.0013 22.5 19.2312 22.5 16.2975V12.5C22.5 8.36375 19.1363 5 15 5Z" fill="#ABABAB"/>
            </g>
            <defs>
            <clipPath id="clip0_54_442">
            <rect width="30" height="30" fill="white"/>
            </clipPath>
            </defs>
            </svg>
          </button>
          {/* Messages Button */}
          <button type="button" class="inline-flex items-center mr-5">
            <svg width="25" height="21" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.00264052 13.0034C0.0393541 13.6214 0.449322 14.1415 1.04286 14.319L12.0325 17.6416L12.4363 25.2168C12.4547 25.5166 12.6566 25.7797 12.9442 25.8776C13.0237 25.9082 13.1094 25.9205 13.1889 25.9205C13.4031 25.9205 13.605 25.8348 13.7519 25.6696L17.6374 21.368L23.1444 25.1801C23.3892 25.3514 23.6768 25.4432 23.9766 25.4432C24.668 25.4432 25.2677 24.9537 25.4145 24.2684L29.9854 0.973609C30.0405 0.704376 29.9364 0.422906 29.7284 0.251576C29.5142 0.0741267 29.2266 0.0312941 28.9696 0.135316L0.883766 11.5655C0.314706 11.8225 -0.034073 12.3854 0.00264052 13.0034ZM13.8314 23.3383L13.5805 18.5594L16.3952 20.5052L13.8314 23.3383ZM23.9521 23.9196L13.9293 16.9807L27.9845 3.38447L23.9521 23.9196ZM26.4425 2.78481L12.5464 16.2281L1.56909 12.9116L26.4425 2.78481Z" fill="#ABABAB"/>
            </svg>
          </button>
          {/* Post Button */}
          <button type="button" class="text-white bg-gradient-to-r from-[#4DD4F7] via-[#9090FB] via-[#FF6B81] to-[#FBDF63] font-bold rounded text-sm px-2.5 py-2.5 inline-flex items-center mr-2 h-9">
           <div class="bg-black/25 w-6 h-6 mr-2 rounded font-bold p-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
           </div>
            Create Post
          </button>
        </div>
        {/* Search Input */}
        <div class="flex order-1">
          <div class="hidden relative mr-3 md:mr-0 md:block">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input type="text" id="email-adress-icon" class="block p-2 pl-10 w-full text-[#ABABAB] bg-[#ABABAB]/20 rounded sm:text-sm focus:ring-[#ABABAB]/20" placeholder="Search..."/>
          </div>
          <button data-collapse-toggle="mobile-menu-3" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden focus:ring-[#ABABAB]/20">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
      </div>
      <h1 class="text-white font-bold text-2xl mt-10">Feed</h1>
    </nav>
  );
}

export default Navbar;
