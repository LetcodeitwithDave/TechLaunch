import { pxfuel} from "../assets/images";
import {IonIcon} from '@ionic/react';
import { menuOutline, close } from 'ionicons/icons'; 
import { useState } from "react";


function Nav() {
  const navLinks = [
    { href: "#dashboard", label: "Dashboard", current: true  },
    { href: "#Team", label: "Team", current: false },

  ];
  const [isSideNavOpen, setIsSideNavOpen] = useState(false)

  const toggleSideNav = ((e) =>{
    setIsSideNavOpen(!isSideNavOpen);
    // console.log(e)
  })
  return (
    // w-full h-[250px] bg-cover bg-center bg-no-repeat mb-8 md:h-[350px]
    <header>
      
        <nav  className=' mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  flex justify-between items-center max-container'>

              <div className="">
                {/* <img 
                  src={job1}
                  
                  className="px-0  h-20 w-[120px] md:h-[90px] md:w-[120px] bg-transparent"
                  
                /> */}
                <h1 className=' text-white font-bold text-2xl font-montserrat '>
                  Dev<span className=' text-green-400'><br></br>Board</span>
                </h1>
              </div>
              
            
            <div className="">

              {/* modification for the menu */}
              {/* flex to col in smaller screens and row on larger */}
              <ul className="hidden sm:flex flex-row justify-center items-center gap-7 text-white">

                {navLinks.map((item)=>(
                  <li key={item.label}>
                    <a 
                    href={item.href} 
                    className={ item.current ? 'underline underline-offset-8 decoration-green-500 text-white px-3 py-2 rounded-md text-sm' : 'text-gray-300 hover:underline hover:underline-offset-8 hover:decoration-green-500 hover:text-white px-3 py-2 rounded-md text-sm'}>
                      {item.label}
                    </a>
                  </li>
                ))}

              </ul>
              
            </div>
            <div className="flex space-x-3 ">
              <div className="flex gap-2  bg-green-400 rounded-md px-4 py-2 text-white">
                <a href="#">
                  Post A Job

                </a>
              </div>
              

              {isSideNavOpen ? (
                
                <button className="text-black h-[25px] text-4xl sm:hidden 0" onClick={toggleSideNav}>
                  <IonIcon icon={close} />
                </button>
              ) : (
                <button className="text-white h-[25] text-4xl sm:hidden" onClick={toggleSideNav}>
                  <IonIcon icon={menuOutline} />
                </button>
              )}
             
            
            </div>
                { 
                  isSideNavOpen &&
                  (
                  <div>
                      <button className="text-black h-[25px] text-4xl sm:hidden 0" onClick={toggleSideNav}>
                        <IonIcon icon={close} />
                      </button>
                      <div className=" absolute sm:hidden top-0 right-0 h-screen w-2/3 bg-green-800 text-white z-10 py-6 px-2 transform translate-x-0 transition-transform duration-300">
                          {navLinks.map((item)=>(
                          
                            <a 
                            href={item.href} key={item.label} >
                                <div className=" py-3 px-4 hover:bg-green-700 rounded transition duration-200">
                                  {item.label}

                                </div>
                              </a>
                            
                            ))}
                      </div>
                      
                  </div>
            )}
            
        </nav>
       
    </header>
  )
}

export default Nav

