import React from 'react'
import Heading from '../../../../Layout/Heading'
import WrapperContainer from '../../../../Layout/WrapperContainer'
import Subheading from '../../../../Layout/Subheading'

function Azure_Card() {
  return (
   <>
   <WrapperContainer>
        <Heading>
        <p>Start with us</p>
        </Heading>
   <div className="flex justify-center items-center mt-[30px] mb-20">
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 p-6">
       {/* Card 1 */}
       <div className="bg-white rounded-xl border border-gray-300 p-8 w-full max-w-[500px]">
       <Subheading><h2 className="text-xl font-semibold">Start building free</h2></Subheading>
         <p className="text-gray-600 mt-2">
           Get free services and a USD 200 credit to explore Azure for up to 30 days.
         </p>
         <button className="mt-4 bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700">
           Try Azure for free
         </button>
       </div>

       {/* Card 2 */}
       <div className="bg-white rounded-xl border border-gray-300 p-8 w-full max-w-[500px]">
         <Subheading><h2 className="text-xl font-semibold">Started with pay as you go</h2></Subheading>
         <p className="text-gray-600 mt-2">
           Pay only for what you use beyond free amounts of services.
         </p>
         <button className="mt-9 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
           Sign up
         </button>
       </div>
     </div>
   </div>
   </WrapperContainer>
   </>
  )
}

export default Azure_Card
