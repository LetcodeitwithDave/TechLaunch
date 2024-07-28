import React, { useContext, useState } from "react";
import { paperPlane } from "../../assets/landingpageimage";
import { paperPlane1 } from "../../assets/landingpageimage";
import { AuthContext, useAuth } from "../../authcontext/authcontext";

function LandingHeader() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const { isAuthenticated } = useContext(AuthContext);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };
  const navLinks = [
    { href: "#", label: "Home", active: true },
    { href: "#", label: "Jobs", active: false },
    { href: "#", label: "How It Works", active: false },
    { href: "#", label: "Resources", active: false },
    { href: "#", label: "About Us", active: false },
  ];
  const authLink = [
    { href: "#", label: "Portfolio", active: false },
    { href: "/home", label: "Job Offer", active: true },
    { href: "#", label: "Message", active: false },
    { href: "#", label: "Notification", active: false },
  ];
  return (
    <div>
      <header className=" bg-white">
        {isAuthenticated ? (
          <nav className="relative mx-auto gap-8 px-2 sm:px-6 lg:px-8   flex items-center  ">
            <div className="flex ml-0 ">
              <img src={paperPlane1} height={40} width={50} className="mt-2 " />
              <h1 className=" text-black font-robotoBold  text-md mt-4">
                TechLaunch
              </h1>
            </div>

            <div className="">
              {/* modification for the menu */}
              {/* flex to col in smaller screens and row on larger */}

              <ul className="sm:flex  gap-7 font-robotoRegular">
                <li>
                  <a
                    href="#"
                    className={
                      "underline underline-offset-8 decoration-blue-400 decoration-2 text-black px-3 py-2 rounded-md text-sm"
                    }
                  >
                    Job Offer
                  </a>
                </li>
              </ul>
            </div>

            {/* side Navigation menu */}

            <div
              className={`md:hidden fixed inset-0 top-0 right-0 bg-blue-700 z-10 transform transition-transform duration-[400ms] ease-in-out ${
                isSideNavOpen ? "translate-x-48" : "translate-x-full"
              } overflow-auto`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                onClick={toggleSideNav}
                className="lucide lucide-x md:hidden text-white mt-7  mr-2 ml-[276px]  "
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>

              <div className=" flex mt-3 flex-col px-4">
                {authLink.map((item) => (
                  <a
                    key={item.label}
                    className="text-white py-2 px-2 w-[280px] hover:bg-blue-600 rounded transition duration-200 font-montserratRegular text-sm"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        ) : (
          <nav className="mx-auto px-2 sm:px-6 lg:px-8  flex justify-between items-center  ">
            <div className="flex ml-0">
              <img
                src={paperPlane1}
                height={52}
                width={60}
                className=" mt-5"
                // className="px-0  h-20 w-[120px] md:h-[90px] md:w-[120px] bg-transparent"
              />
              <h1 className=" text-black font-robotoBold  text-xl mt-8">
                TechLaunch
              </h1>
            </div>

            <div className=" hidden md:block">
              {/* modification for the menu */}
              {/* flex to col in smaller screens and row on larger */}

              <ul className="sm:flex flex-row justify-center items-center gap-3 font-robotoRegular">
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
        )}
      </header>
    </div>
  );
}

export default LandingHeader;
