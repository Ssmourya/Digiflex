// import { Phone, Mail } from "lucide-react";

// export default function TopBar() {
//     return (
//         <div className="w-full bg-[#172554] text-[#172554] border-b border-blue-800 px-4 md:px-8">
//             <div className="flex justify-end items-center">
//                 <div className="flex items-center space-x-6">
//                     <div className="flex items-center space-x-2 group">
//                         <Phone size={16} className="text-white group-hover:text-blue-800 transition-colors duration-200" />
//                         <span className="text-xs md:text-base font-medium cursor-pointer text-white">+91 90393 83183</span>
//                     </div>

//                     <div className="hidden md:flex items-center space-x-2 group">
//                         <Mail size={16} className="text-white group-hover:text-blue-800  transition-colors duration-200" />
//                         <span className="text-xs cursor-pointer md:text-base font-medium text-white">info@digiflex.ai</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// import { Phone, Mail } from "lucide-react";

// export default function TopBar() {
//     return (
//         <div className="w-full bg-gradient-to-r from-blue-700 to-blue-900 text-white border-b border-blue-400 px-4 md:px-8">
//             <div className="flex justify-end items-center py-2">
//                 <div className="flex items-center space-x-6">
//                     <div className="flex items-center space-x-2 group">
//                         <Phone size={16} className="text-gray-200 group-hover:text-yellow-300 transition-colors duration-200" />
//                         <span className="text-xs md:text-base font-medium cursor-pointer text-gray-200 group-hover:text-yellow-300">+91 90393 83183</span>
//                     </div>

//                     <div className="hidden md:flex items-center space-x-2 group">
//                         <Mail size={16} className="text-gray-200 group-hover:text-yellow-300 transition-colors duration-200" />
//                         <span className="text-xs cursor-pointer md:text-base font-medium text-gray-200 group-hover:text-yellow-300">info@digiflex.ai</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

import { Phone, Mail } from "lucide-react";

export default function TopBar() {
  return (
    <div className="w-full bg-blue-950 border-b border-blue-800 px-4 md:px-8 py-2">
      <div className="flex justify-end items-center">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 group hover:bg-blue-900 px-2 py-1 rounded transition-colors duration-200">
            <Phone size={16} className="text-white group-hover:text-blue-300" />
            <span className="text-xs md:text-sm font-medium cursor-pointer text-white">
              +91 90393 83183
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-2 group hover:bg-blue-900 px-2 py-1 rounded transition-colors duration-200">
            <Mail size={16} className="text-white group-hover:text-blue-300" />
            <span className="text-xs md:text-sm font-medium cursor-pointer text-white">
              info@digiflex.ai
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// import { Phone, Mail } from "lucide-react";

// export default function TopBar() {
//     return (
//         <div className="w-full bg-gradient-to-r from-blue-900 to-blue-800 text-white py-2 px-4 md:px-8">
//             <div className="flex justify-end items-center">
//                 <div className="flex items-center space-x-6">
//                     <a href="tel:+919039383183" className="flex items-center space-x-2 group hover:opacity-80 transition-all duration-200">
//                         <Phone size={16} className="text-blue-200 group-hover:text-white transition-colors duration-200" />
//                         <span className="text-xs md:text-sm font-medium">+91 90393 83183</span>
//                     </a>

//                     <a href="mailto:info@digiflex.ai" className="hidden md:flex items-center space-x-2 group hover:opacity-80 transition-all duration-200">
//                         <Mail size={16} className="text-blue-200 group-hover:text-white transition-colors duration-200" />
//                         <span className="text-xs md:text-sm font-medium">info@digiflex.ai</span>
//                     </a>
//                 </div>
//             </div>
//         </div>
//     );
// }