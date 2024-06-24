import React from "react";
import { paperPlane } from "../../assets/landingpageimage";
import { paperPlane1 } from "../../assets/landingpageimage";

function LandingHeader() {
  const navLinks = [
    { href: "#", label: "Home", active: true },
    { href: "#", label: "Jobs", active: false },
    { href: "#", label: "How It Works", active: false },
    { href: "#", label: "Resources", active: false },
    { href: "#", label: "About Us", active: false },
  ];
  return (
    <div>
      <header>
        <nav className="mx-auto px-2 sm:px-6 lg:px-8  flex justify-between items-center max-container ">
          <div className="flex ml-[116px]">
            <img
              src={paperPlane1}
              height={52}
              width={60}
              className=" mt-5"
              // className="px-0  h-20 w-[120px] md:h-[90px] md:w-[120px] bg-transparent"
            />
            <h1 className=" text-black font-robotoBold  text-2xl mt-6">
              TechLaunch
            </h1>
          </div>

          <div className="">
            {/* modification for the menu */}
            {/* flex to col in smaller screens and row on larger */}
            <ul className="hidden sm:flex flex-row justify-center items-center gap-3 font-robotoRegular">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={
                      item.active
                        ? "underline underline-offset-8 decoration-blue-400 decoration-2 text-black px-3 py-2 rounded-md text-sm"
                        : " text-black hover:underline hover:underline-offset-8 hover:decoration-blue-400 hover:decoration-2 hover:text-gray-700 px-3 py-2 rounded-md text-sm"
                    }
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex space-x-3 ">
            <div className="flex gap-6  text-black font-robotoRegular">
              <a className=" mt-[6px] text-sm " href="/login">
                Login
              </a>
              <div className=" border-customColor1 border-[1.5px]  rounded-md px-2 py-[3.0px]">
                <a href="/signup">Sign-up</a>
              </div>
            </div>

            {/* {isSideNavOpen ? (
                
                <button className=" text-red-700 h-[25px] text-4xl sm:hidden 0" onClick={toggleSideNav}>
                  <IonIcon icon={close} />
                </button>
              ) : (
                <button className=" focus:ring-2 focus:out focus:outline-none  focus:ring-green-700 rounded text-white h-[25] text-4xl sm:hidden" onClick={toggleSideNav}>
                  <IonIcon icon={menuOutline} />
                </button>
              )} */}
          </div>

          {/* <div>
            <div className=" absolute lg:hidden right-0 top-0 h-screen w-2/3 bg-buttonBackground text-white z-10 py-6 px-2 transform translate-x-0 transition-transform duration-300">
            <svg className=" h-12 w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#ffffff" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>

              {navLinks.map((item) => (
                <a href={item.href} key={item.label}>
                  <div className=" py-3 px-4 hover:bg-blue-700 rounded transition duration-200">
                    {item.label}
                  </div>
                </a>
              ))}
            </div>
          </div> */}
        </nav>
      </header>
    </div>
  );
}

export default LandingHeader;

{
  /* menu svg icon */
}

{
  /* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>


white menu background

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffffff" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>

// close svg icon


black close background
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg> */
}
