import React from 'react'
import { remoteImgage, internshipImage, partTimeImage } from '../../assets/landingpageimage'

function OfferSection() {
  return (
    <div>
        <p className=' flex justify-center font-montserratRegular pt-16 text-textColor text-sm'>Choose Me</p>
        <div className='flex flex-col justify-center pb-14 pt-3  text-4xl font-montserratSemibold  mb-16'>

            <h1 className=' flex justify-center  '> 
                Why TechLaunch Is Right 
            </h1>
            <h1 className=' flex justify-center'>For You?</h1>

        </div>
        {/* We Offer Best Services */}
        <div  className='  px-4 flex justify-evenly'>
            <div className=' relative'>
                <img 
                    src={remoteImgage}
                    className=' w-[92px] h-[93px] absolute -top-14 left-10'
                />
                <div className=' border  border-gray-300 py-14  px-10 bg-white rounded-xl w-80 h-72 shadow-xl'>
                    
                    <h1 className=' font-montserratBold text-textColor text-2xl'>Remote Work</h1>

                    <p className=' font-montserratRegular py-5 text-subheading text-lg'>
                    Discover remote work opportunities that allow you to gain experience without compromising your studies.
                    </p>
                </div>
            </div>

            <div className=' relative'>
                <img 
                    src={internshipImage}
                    className=' w-[92px] h-[93px] absolute -top-14 left-10'
                />
                <div className=' border border-gray-300 py-14  px-10 bg-white rounded-xl w-80 h-72 shadow-xl'>
                    
                    <h1 className=' font-montserratBold text-textColor text-2xl'>Intership Opportunities</h1>

                    <p className=' font-montserratRegular py-5 text-subheading text-lg'>
                    We connect you with tech companies offering internships that fit your schedule and career goals
                    </p>
                </div>
            </div>

            <div className=' relative'>
                <img 
                    src={partTimeImage}
                    className=' w-[92px] h-[93px] absolute -top-14 left-10'
                />
                <div className=' border border-gray-300 py-14  px-10 bg-white rounded-xl w-80 h-72 shadow-xl'>
                    
                    <h1 className=' font-montserratBold text-textColor text-2xl'>Part-Time Jobs</h1>

                    <p className=' font-montserratRegular py-5 text-subheading text-lg'>
                    Find part-time job opportunities that fit your student schedule, allowing you to earn while you learn
                    </p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default OfferSection
