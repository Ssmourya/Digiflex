// import React, { useState } from 'react';
// import { ChevronDown, ChevronUp, ArrowRight, Globe, ShoppingCart, Users, BarChart, Zap, Server, Monitor, MessageSquare } from 'lucide-react';

// const Digital360 = () => {
//   const [activeTab, setActiveTab] = useState('overview');
//   const [activeAccordion, setActiveAccordion] = useState('marketing');

//   const toggleAccordion = (section) => {
//     setActiveAccordion(activeAccordion === section ? null : section);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
//       {/* Header */}
//       <header className="bg-white shadow-md">
//         <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
//           <div className="mb-4 md:mb-0">
//             <h1 className="text-3xl font-bold text-blue-800">Digital <span className="text-indigo-600">360</span></h1>
//             <p className="text-gray-600">Transform Your Business Digitally</p>
//           </div>
//           <nav className="flex space-x-6">
//             <button 
//               onClick={() => setActiveTab('overview')} 
//               className={`px-3 py-2 ${activeTab === 'overview' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600'}`}
//             >
//               Overview
//             </button>
//             <button 
//               onClick={() => setActiveTab('components')} 
//               className={`px-3 py-2 ${activeTab === 'components' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600'}`}
//             >
//               Components
//             </button>
//             <button 
//               onClick={() => setActiveTab('benefits')} 
//               className={`px-3 py-2 ${activeTab === 'benefits' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600'}`}
//             >
//               Benefits
//             </button>
//             <button 
//               onClick={() => setActiveTab('case-studies')} 
//               className={`px-3 py-2 ${activeTab === 'case-studies' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600'}`}
//             >
//               Case Studies
//             </button>
//           </nav>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="container mx-auto px-4 py-8">
//         {activeTab === 'overview' && (
//           <section>
//             <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
//               <div className="md:flex">
//                 <div className="md:w-1/2 p-8">
//                   <h2 className="text-3xl font-bold text-gray-800 mb-4">Accelerate Your Digital Transformation</h2>
//                   <p className="text-gray-600 mb-6">
//                     Digital 360 combines Marketing Cloud, Commerce Cloud, and Experience Cloud to deliver a complete solution for businesses looking to thrive in the digital economy.
//                   </p>
//                   <button className="bg-indigo-600 text-white px-6 py-3 rounded-md flex items-center hover:bg-indigo-700 transition duration-300">
//                     Get Started <ArrowRight className="ml-2 h-4 w-4" />
//                   </button>
//                 </div>
//                 <div className="md:w-1/2 bg-indigo-600 flex items-center justify-center p-8">
//                   <div className="text-white">
//                     <h3 className="text-2xl font-bold mb-4">Why Digital 360?</h3>
//                     <ul className="space-y-2">
//                       <li className="flex items-center"><Zap className="mr-2 h-5 w-5" /> Unified customer data platform</li>
//                       <li className="flex items-center"><Zap className="mr-2 h-5 w-5" /> AI-powered insights and automation</li>
//                       <li className="flex items-center"><Zap className="mr-2 h-5 w-5" /> Seamless omnichannel experiences</li>
//                       <li className="flex items-center"><Zap className="mr-2 h-5 w-5" /> Rapid time to value</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <h2 className="text-2xl font-bold text-gray-800 mb-6">Core Components</h2>
            
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
//               <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
//                 <div className="mb-4 text-indigo-600">
//                   <Globe className="h-10 w-10" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">Marketing Cloud</h3>
//                 <p className="text-gray-600">
//                   Connect with your customers through personalized marketing campaigns across email, mobile, social, and web.
//                 </p>
//               </div>
              
//               <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
//                 <div className="mb-4 text-indigo-600">
//                   <ShoppingCart className="h-10 w-10" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">Commerce Cloud</h3>
//                 <p className="text-gray-600">
//                   Create seamless shopping experiences that convert browsers into buyers across all digital channels.
//                 </p>
//               </div>
              
//               <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
//                 <div className="mb-4 text-indigo-600">
//                   <Users className="h-10 w-10" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">Experience Cloud</h3>
//                 <p className="text-gray-600">
//                   Build engaging digital experiences that delight your customers and keep them coming back.
//                 </p>
//               </div>
//             </div>

//             <div className="bg-white p-6 rounded-lg shadow-md mb-10">
//               <h2 className="text-2xl font-bold text-gray-800 mb-4">The Digital 360 Advantage</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <h3 className="text-lg font-semibold mb-2 flex items-center">
//                     <BarChart className="mr-2 h-5 w-5 text-indigo-600" /> Data-Driven Decision Making
//                   </h3>
//                   <p className="text-gray-600 mb-4">
//                     Leverage unified customer data and AI-powered analytics to make informed business decisions that drive growth.
//                   </p>

//                   <h3 className="text-lg font-semibold mb-2 flex items-center">
//                     <Server className="mr-2 h-5 w-5 text-indigo-600" /> Scalable Cloud Infrastructure
//                   </h3>
//                   <p className="text-gray-600">
//                     Built on a secure, reliable cloud platform that scales with your business needs, from startup to enterprise.
//                   </p>
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold mb-2 flex items-center">
//                     <Monitor className="mr-2 h-5 w-5 text-indigo-600" /> Omnichannel Presence
//                   </h3>
//                   <p className="text-gray-600 mb-4">
//                     Deliver consistent experiences across all customer touchpoints, from web and mobile to social and physical.
//                   </p>

//                   <h3 className="text-lg font-semibold mb-2 flex items-center">
//                     <MessageSquare className="mr-2 h-5 w-5 text-indigo-600" /> Personalized Engagement
//                   </h3>
//                   <p className="text-gray-600">
//                     Create 1:1 customer journeys that respond to individual preferences, behaviors, and needs in real-time.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </section>
//         )}

//         {activeTab === 'components' && (
//           <section>
//             <h2 className="text-3xl font-bold text-gray-800 mb-6">Digital 360 Components</h2>
//             <p className="text-gray-600 mb-8">
//               Digital 360 integrates three powerful cloud platforms to provide a comprehensive solution for your digital transformation needs.
//             </p>

//             <div className="mb-8">
//               <div 
//                 className="bg-white p-6 rounded-lg shadow-md mb-2 cursor-pointer"
//                 onClick={() => toggleAccordion('marketing')}
//               >
//                 <div className="flex justify-between items-center">
//                   <h3 className="text-xl font-bold text-indigo-600 flex items-center">
//                     <Globe className="mr-2 h-6 w-6" /> Marketing Cloud
//                   </h3>
//                   {activeAccordion === 'marketing' ? <ChevronUp className="h-5 w-5 text-gray-600" /> : <ChevronDown className="h-5 w-5 text-gray-600" />}
//                 </div>
//               </div>
//               {activeAccordion === 'marketing' && (
//                 <div className="bg-white p-6 rounded-b-lg shadow-md border-t">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <h4 className="font-semibold text-gray-800 mb-2">Key Features</h4>
//                       <ul className="list-disc pl-5 text-gray-600 space-y-1 mb-4">
//                         <li>Journey Builder - Create personalized customer journeys</li>
//                         <li>Email Studio - Design and send targeted email campaigns</li>
//                         <li>Mobile Studio - Engage customers through SMS and push notifications</li>
//                         <li>Advertising Studio - Manage digital advertising campaigns</li>
//                         <li>Social Studio - Monitor and engage across social platforms</li>
//                       </ul>
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-800 mb-2">Benefits</h4>
//                       <ul className="list-disc pl-5 text-gray-600 space-y-1">
//                         <li>Increase customer engagement and loyalty</li>
//                         <li>Improve conversion rates with personalized messaging</li>
//                         <li>Gain insights into campaign performance</li>
//                         <li>Automate marketing processes to save time and resources</li>
//                         <li>Coordinate messaging across all customer touchpoints</li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>

//             <div className="mb-8">
//               <div 
//                 className="bg-white p-6 rounded-lg shadow-md mb-2 cursor-pointer"
//                 onClick={() => toggleAccordion('commerce')}
//               >
//                 <div className="flex justify-between items-center">
//                   <h3 className="text-xl font-bold text-indigo-600 flex items-center">
//                     <ShoppingCart className="mr-2 h-6 w-6" /> Commerce Cloud
//                   </h3>
//                   {activeAccordion === 'commerce' ? <ChevronUp className="h-5 w-5 text-gray-600" /> : <ChevronDown className="h-5 w-5 text-gray-600" />}
//                 </div>
//               </div>
//               {activeAccordion === 'commerce' && (
//                 <div className="bg-white p-6 rounded-b-lg shadow-md border-t">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <h4 className="font-semibold text-gray-800 mb-2">Key Features</h4>
//                       <ul className="list-disc pl-5 text-gray-600 space-y-1 mb-4">
//                         <li>Storefront - Build customizable, responsive online stores</li>
//                         <li>Order Management - Streamline fulfillment processes</li>
//                         <li>Pricing & Promotion - Create dynamic pricing strategies</li>
//                         <li>B2B Commerce - Support complex business buying processes</li>
//                         <li>Headless Commerce - Flexible frontend presentation layer</li>
//                       </ul>
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-800 mb-2">Benefits</h4>
//                       <ul className="list-disc pl-5 text-gray-600 space-y-1">
//                         <li>Increase conversion rates with optimized checkout flows</li>
//                         <li>Expand to new markets and channels quickly</li>
//                         <li>Personalize shopping experiences based on customer data</li>
//                         <li>Reduce cart abandonment with targeted strategies</li>
//                         <li>Scale operations efficiently during peak seasons</li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>

//             <div className="mb-8">
//               <div 
//                 className="bg-white p-6 rounded-lg shadow-md mb-2 cursor-pointer"
//                 onClick={() => toggleAccordion('experience')}
//               >
//                 <div className="flex justify-between items-center">
//                   <h3 className="text-xl font-bold text-indigo-600 flex items-center">
//                     <Users className="mr-2 h-6 w-6" /> Experience Cloud
//                   </h3>
//                   {activeAccordion === 'experience' ? <ChevronUp className="h-5 w-5 text-gray-600" /> : <ChevronDown className="h-5 w-5 text-gray-600" />}
//                 </div>
//               </div>
//               {activeAccordion === 'experience' && (
//                 <div className="bg-white p-6 rounded-b-lg shadow-md border-t">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <h4 className="font-semibold text-gray-800 mb-2">Key Features</h4>
//                       <ul className="list-disc pl-5 text-gray-600 space-y-1 mb-4">
//                         <li>Communities - Create branded customer and partner portals</li>
//                         <li>CMS - Manage content across all digital channels</li>
//                         <li>Site Builder - Design responsive websites without code</li>
//                         <li>Digital Asset Management - Organize and distribute media</li>
//                         <li>Customer Service Portal - Provide self-service options</li>
//                       </ul>
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-800 mb-2">Benefits</h4>
//                       <ul className="list-disc pl-5 text-gray-600 space-y-1">
//                         <li>Enhance customer satisfaction and engagement</li>
//                         <li>Build branded digital experiences quickly</li>
//                         <li>Foster community among customers and partners</li>
//                         <li>Reduce support costs with self-service options</li>
//                         <li>Deliver consistent experiences across touchpoints</li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </section>
//         )}

//         {activeTab === 'benefits' && (
//           <section>
//             <h2 className="text-3xl font-bold text-gray-800 mb-6">Benefits of Digital 360</h2>
//             <p className="text-gray-600 mb-8">
//               Digital 360 provides a comprehensive suite of tools to help businesses grow and thrive in the digital economy.
//             </p>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
//               <div className="bg-white p-6 rounded-lg shadow-md">
//                 <h3 className="text-xl font-bold text-indigo-600 mb-4">For Business Leaders</h3>
//                 <ul className="space-y-4">
//                   <li className="flex">
//                     <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-3 mt-1">
//                       <BarChart className="h-4 w-4" />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-800">Revenue Growth</h4>
//                       <p className="text-gray-600">Increase sales through personalized marketing, optimized commerce, and enhanced customer experiences.</p>
//                     </div>
//                   </li>
//                   <li className="flex">
//                     <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-3 mt-1">
//                       <Users className="h-4 w-4" />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-800">Customer Retention</h4>
//                       <p className="text-gray-600">Build lasting relationships with customers through consistent, personalized experiences.</p>
//                     </div>
//                   </li>
//                   <li className="flex">
//                     <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-3 mt-1">
//                       <Zap className="h-4 w-4" />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-800">Operational Efficiency</h4>
//                       <p className="text-gray-600">Automate processes and streamline operations to reduce costs and improve productivity.</p>
//                     </div>
//                   </li>
//                 </ul>
//               </div>

//               <div className="bg-white p-6 rounded-lg shadow-md">
//                 <h3 className="text-xl font-bold text-indigo-600 mb-4">For IT Leaders</h3>
//                 <ul className="space-y-4">
//                   <li className="flex">
//                     <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-3 mt-1">
//                       <Server className="h-4 w-4" />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-800">Scalable Architecture</h4>
//                       <p className="text-gray-600">Built on a cloud platform that can handle growing traffic and data without performance issues.</p>
//                     </div>
//                   </li>
//                   <li className="flex">
//                     <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-3 mt-1">
//                       <Monitor className="h-4 w-4" />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-800">Integration Capabilities</h4>
//                       <p className="text-gray-600">Connect with existing systems and applications through robust APIs and pre-built connectors.</p>
//                     </div>
//                   </li>
//                   <li className="flex">
//                     <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-3 mt-1">
//                       <MessageSquare className="h-4 w-4" />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-800">Security & Compliance</h4>
//                       <p className="text-gray-600">Enterprise-grade security features and compliance certifications to protect sensitive data.</p>
//                     </div>
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             <div className="bg-indigo-600 text-white p-8 rounded-lg shadow-md">
//               <h3 className="text-2xl font-bold mb-4">Digital 360 Success Metrics</h3>
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//                 <div className="text-center">
//                   <p className="text-4xl font-bold mb-2">34%</p>
//                   <p>Average increase in conversion rates</p>
//                 </div>
//                 <div className="text-center">
//                   <p className="text-4xl font-bold mb-2">45%</p>
//                   <p>Faster time-to-market for new initiatives</p>
//                 </div>
//                 <div className="text-center">
//                   <p className="text-4xl font-bold mb-2">28%</p>
//                   <p>Reduction in customer service costs</p>
//                 </div>
//                 <div className="text-center">
//                   <p className="text-4xl font-bold mb-2">3.2x</p>
//                   <p>Return on investment within first year</p>
//                 </div>
//               </div>
//             </div>
//           </section>
//         )}

//         {activeTab === 'case-studies' && (
//           <section>
//             <h2 className="text-3xl font-bold text-gray-800 mb-6">Success Stories</h2>
//             <p className="text-gray-600 mb-8">
//               Learn how leading companies have transformed their businesses with Digital 360.
//             </p>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
//               <div className="bg-white p-6 rounded-lg shadow-md">
//                 <div className="h-40 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
//                   <p className="text-gray-500">Company Logo</p>
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-800 mb-2">Global Retail Chain</h3>
//                 <p className="text-gray-600 mb-4">
//                   A leading retail chain increased online sales by 47% and reduced cart abandonment rates by 23% after implementing Digital 360.
//                 </p>
//                 <div className="mb-4">
//                   <h4 className="font-semibold text-gray-800 mb-2">Challenges</h4>
//                   <ul className="list-disc pl-5 text-gray-600">
//                     <li>Fragmented customer data across channels</li>
//                     <li>Inconsistent shopping experiences</li>
//                     <li>Limited personalization capabilities</li>
//                   </ul>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-gray-800 mb-2">Solutions</h4>
//                   <ul className="list-disc pl-5 text-gray-600">
//                     <li>Unified customer profiles with Marketing Cloud</li>
//                     <li>Seamless omnichannel shopping with Commerce Cloud</li>
//                     <li>Personalized customer portals with Experience Cloud</li>
//                   </ul>
//                 </div>
//               </div>

//               <div className="bg-white p-6 rounded-lg shadow-md">
//                 <div className="h-40 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
//                   <p className="text-gray-500">Company Logo</p>
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-800 mb-2">Financial Services Provider</h3>
//                 <p className="text-gray-600 mb-4">
//                   A major bank increased customer satisfaction scores by 38% and reduced operational costs by 25% with Digital 360.
//                 </p>
//                 <div className="mb-4">
//                   <h4 className="font-semibold text-gray-800 mb-2">Challenges</h4>
//                   <ul className="list-disc pl-5 text-gray-600">
//                     <li>Legacy systems limiting digital innovation</li>
//                     <li>High customer service costs</li>
//                     <li>Regulatory compliance requirements</li>
//                   </ul>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-gray-800 mb-2">Solutions</h4>
//                   <ul className="list-disc pl-5 text-gray-600">
//                     <li>Personalized financial journeys with Marketing Cloud</li>
//                     <li>Secure customer portal with Experience Cloud</li>
//                     <li>Streamlined service with integrated systems</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-bold text-gray-800 mb-4">Industry Success Metrics</h3>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 <div className="p-4 border border-gray-200 rounded-md">
//                   <h4 className="font-semibold text-indigo-600 mb-2">Retail & E-commerce</h4>
//                   <ul className="text-gray-600 space-y-2">
//                     <li><span className="font-semibold">+42%</span> Average order value</li>
//                     <li><span className="font-semibold">-18%</span> Cart abandonment rate</li>
//                     <li><span className="font-semibold">+54%</span> Customer engagement</li>
//                   </ul>
//                 </div>
//                 <div className="p-4 border border-gray-200 rounded-md">
//                   <h4 className="font-semibold text-indigo-600 mb-2">Financial Services</h4>
//                   <ul className="text-gray-600 space-y-2">
//                     <li><span className="font-semibold">+32%</span> Digital adoption rate</li>
//                     <li><span className="font-semibold">-27%</span> Service call volume</li>
//                     <li><span className="font-semibold">+48%</span> Cross-selling success</li>
//                   </ul>
//                 </div>
//                 <div className="p-4 border border-gray-200 rounded-md">
//                   <h4 className="font-semibold text-indigo-600 mb-2">Healthcare</h4>
//                   <ul className="text-gray-600 space-y-2">
//                     <li><span className="font-semibold">+39%</span> Patient engagement</li>
//                     <li><span className="font-semibold">-22%</span> Administrative costs</li>
//                     <li><span className="font-semibold">+45%</span> Appointment adherence</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </section>
//         )}
//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-8">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div>
//               <h3 className="text-xl font-bold mb-4">Digital <span className="text-indigo-400">360</span></h3>
//               <p className="text-gray-400">
//                 Comprehensive solution for businesses looking to thrive in the digital economy.
//               </p>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-4">Products</h4>
//               <ul className="text-gray-400 space-y-2">
//                 <li>Marketing Cloud</li>
//                 <li>Commerce Cloud</li>
//                 <li>Experience Cloud</li>
//                 <li>Integration Solutions</li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-4">Resources</h4>
//               <ul className="text-gray-400 space-y-2">
//                 <li>Documentation</li>
//                 <li>Case Studies</li>
//                 <li>Blog</li>
//                 <li>Webinars</li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-4">Contact</h4>
//               <ul className="text-gray-400 space-y-2">
//                 <li>Support</li>
//                 <li>Sales</li>
//                 <li>Partners</li>
//                 <li>Careers</li>
//               </ul>
//             </div>
//           </div>
//           <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400">
//             <p>© 2025 Digital 360. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Digital360;

"use client"
import { motion } from "framer-motion";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";

const Digital360 = () => {
  const services = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-blue-600"
        >
          <path d="M10.5 2.75a2.25 2.25 0 0 1 3 0l8.4 9.6a1 1 0 0 1-.8 1.65h-18a1 1 0 0 1-.8-1.65l8.4-9.6z" />
          <path d="m2 18 10-4 10 4" />
          <path d="M12 22v-6" />
        </svg>
      ),
      title: "Marketing Cloud",
      description:
        "Automate marketing campaigns, personalize customer interactions, and drive engagement with AI-powered insights.",
      bgGradient: "from-blue-50 to-blue-100",
      hoverBorder: "hover:border-blue-400",
      iconBg: "bg-blue-100"
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-green-600"
        >
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
      ),
      title: "Commerce Cloud",
      description:
        "Create seamless shopping experiences with AI-driven recommendations, mobile optimization, and omnichannel commerce.",
      bgGradient: "from-green-50 to-green-100",
      hoverBorder: "hover:border-green-400",
      iconBg: "bg-green-100"
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-purple-600"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "Experience Cloud",
      description:
        "Build connected digital experiences with branded portals, communities, and self-service solutions for customers and partners.",
      bgGradient: "from-purple-50 to-purple-100",
      hoverBorder: "hover:border-purple-400",
      iconBg: "bg-purple-100"
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <WrapperContainer>
      <div className="flex flex-col items-center justify-center ">
      
          <Heading>
              Salesforce Digital 360
          </Heading>
          <Paragraph className="block text-center ">
              Empower your business with Salesforce Digital 360 by leveraging powerful
              tools in marketing, commerce, and customer experience to drive digital
              transformation.
          </Paragraph>
      

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-8 w-full max-w-6xl mt-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="h-full"
            >
              <div 
                className={`h-full bg-gradient-to-br ${service.bgGradient} border border-gray-200 ${service.hoverBorder} rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex flex-col items-center text-center h-full">
                  <div className={`p-4 rounded-full ${service.iconBg} mb-4`}>
                    {service.icon}
                  </div>
                  <h2 className="text-2xl font-bold mt-2 mb-3 text-gray-800">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mt-2 leading-relaxed">
                    {service.description}
                  </p>
              
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </WrapperContainer>
  );
};

export default Digital360;