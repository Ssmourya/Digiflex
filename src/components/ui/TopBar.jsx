import { Phone, Mail } from "lucide-react";

export default function TopBar() {
  return (
    <div className="w-full bg-white text-[#172554] border-b px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 group">
            <Phone size={16} className="text-[#172554] group-hover:text-blue-800 transition-colors duration-200" />
            <span className="text-sm md:text-base font-medium cursor-pointer text-[#172554]">+91 9111454949</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-2 group">
            <Mail size={16} className="text-[#172554] group-hover:text-blue-800  transition-colors duration-200" />
            <span className="text-sm cursor-pointer md:text-base font-medium text-[#172554]">hr@digiflex.ai</span>
          </div>
        </div>
        </div>
      </div>
  );
}