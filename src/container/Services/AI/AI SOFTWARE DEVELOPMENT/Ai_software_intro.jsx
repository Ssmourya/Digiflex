import React from 'react'
import WrapperContainer from '../../../../Layout/WrapperContainer'
import Heading from '../../../../Layout/Heading'
import Subheading from '../../../../Layout/Subheading'
import Paragraph from '../../../../Layout/Paragraph'
import Fontheading from '../../../../Layout/Fontheading'

const data = [
    "AI-Powered Applications",
    "Machine Learning",
    "Business Automation",
    "AI Cloud Services"
]

function AiSoftwareIntro() {
  return (
    <WrapperContainer>
      <div className="text-center mb-8">
        <Heading>Welcome to Digiflex – AI Software Development Experts</Heading>
        <Subheading>Empowering Businesses with Intelligent AI Solutions</Subheading>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div>
          <Paragraph>
            <span className="text-xl font-semibold">Digiflex</span> is a leading AI software development company dedicated to building intelligent, scalable, and high-performance AI-driven applications. We help businesses integrate AI into their software solutions to enhance efficiency, security, and innovation.
          </Paragraph>
          <div className='mt-5 text-center md:text-left'>
            <h1 className='text-2xl hover:text-[#1D4ED8] cursor-pointer w-full md:w-[350px]'>Get Started with Digiflex Today!</h1>
          </div>
        </div>

        {/* Right Section */}
        <div className=" md:pl-20 text-center items-center justify-center">
          <Fontheading className="mb-4">Our AI Services</Fontheading>
          <ul className="space-y-3 md:pl-40">
            {data.map((value, index) => (
              <li key={index} className="flex items-center space-x-3 ">
                <span className="text-blue-500 text-xl">✓</span>
                <span className="text-gray-700 font-medium">{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </WrapperContainer>
  )
}

export default AiSoftwareIntro