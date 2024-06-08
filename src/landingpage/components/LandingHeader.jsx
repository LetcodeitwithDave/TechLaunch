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
      {/* <header>
        <nav className=' '>

          <div className=' '>
            <h1 className=' font-Roboto'>TechLaunch</h1>
          </div>

          <div className=''>

            <ul className=''>
              {navLinks.map((item) => (

                <li key={item.label}>
                  <a href={item.href}>
                    {item.label}
                  </a>
                </li>
                
              ))}
            </ul>
          </div>
        </nav>
      </header> */}

      <header>
        <nav className=" mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  flex justify-between items-center max-container ">
          <div className=" flex ">
            <img
              src={paperPlane1}
              height={52}
              width={60}
              className=" mt-5"
              // className="px-0  h-20 w-[120px] md:h-[90px] md:w-[120px] bg-transparent"
            />
            <h1 className=" text-black font-Roboto font-bold  text-2xl mt-6">
              TechLaunch
            </h1>
          </div>

          <div className="">
            {/* modification for the menu */}
            {/* flex to col in smaller screens and row on larger */}
            <ul className="hidden sm:flex flex-row justify-center items-center gap-3 font-Roboto">
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
            <div className="flex gap-6  text-black font-Roboto">
              <a className=" mt-1 text-sm " href="#">
                Login
              </a>
              <div className=" border-customColor1 border  rounded-md px-2 py-0">
                <a href="#">Sign-up</a>
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

          <div>
            <div className=" absolute sm:hidden right-0 top-0 h-screen w-2/3 bg-green-800 text-white z-10 py-6 px-2 transform translate-x-0 transition-transform duration-300">
              {/* <button className=" focus:ring-2 focus:out focus:outline-none  focus:ring-green-700 rounded transition duration-200 my-2 text-white h-[33px] text-4xl sm:hidden mb-2">
                        <IonIcon icon={close} />
                      </button> */}

              {navLinks.map((item) => (
                <a href={item.href} key={item.label}>
                  <div className=" py-3 px-4 hover:bg-green-700 rounded transition duration-200">
                    {item.label}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default LandingHeader;
