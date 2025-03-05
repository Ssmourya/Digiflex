import React from 'react'
import Heading from '../../../../Layout/Heading'
import WrapperContainer from '../../../../Layout/WrapperContainer'
import Subheading from '../../../../Layout/Subheading'
import Fontheading from '../../../../Layout/Fontheading'

function Azure_Card() {
  return (
   <>
   <WrapperContainer>
        <Heading>
        <p>Start Your Cloud Journey with Digiflex</p>
        </Heading>
   <div className="flex justify-center items-center mt-5">
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 p-6">
       {/* Card 1 */}
       <div className="bg-white rounded-xl border border-gray-300 p-8 w-full max-w-[500px] flex flex-col justify-between">
       <Fontheading>Get Started for Free with Digiflex</Fontheading>
         <p className="text-gray-600 mt-2">
           Experience Azure with Digiflex’s expertise and enjoy free services with a USD 200 credit for up to 30 days.
         </p>
         <div className="mt-4 flex justify-start">
           <button className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700">
             Try Azure with Digiflex
           </button>
         </div>
       </div>

       {/* Card 2 */}
       <div className="bg-white rounded-xl border border-gray-300 p-8 w-full max-w-[500px] flex flex-col justify-between">
       <Fontheading>Flexible Pay-As-You-Go with Digiflex</Fontheading>
         <p className="text-gray-600 mt-2">
           Scale effortlessly and pay only for what you use beyond free service limits with Digiflex’s Azure solutions.
         </p>
         <div className="mt-4 flex justify-start">
           <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
             Get Started with Digiflex
           </button>
         </div>
       </div>
     </div>
   </div>
   </WrapperContainer>
   </>
  )
}

export default Azure_Card