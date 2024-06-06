import React from 'react'

function LandingHeader() {
  const navLinks = [
    {href: '#', label: 'Home', active: true},
    {href: '#', label: 'Jobs', active: false},
    {href: '#', label: 'How It Works', active: false},
    {href: '#', label: 'Resources', active: false},
    {href: '#', label: 'About Us', active: false},
  ];

  return (
    <div>
      <header>
        <nav className=' flex '>

          <div className=''>
            <h1>TechLaunch</h1>
          </div>

          <div className=' flex justify-evenly'>

            <ul className=' flex '>
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
      </header>
    </div>
  )
}

export default LandingHeader
