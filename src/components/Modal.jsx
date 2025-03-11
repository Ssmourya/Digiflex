import React from 'react';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white text-black p-6 rounded-lg shadow-lg w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%]">
                {/* Header */}
                <div className="flex justify-between items-center border-b pb-3">
                    <h2 className="text-2xl font-semibold">Our Services</h2>
                    <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
                        <X className="h-6 w-6" />
                    </button>
                </div>
                
                {/* Content */}
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Left Section */}
                    <div className="bg-red-100 p-4 rounded-lg">
                        <h3 className="font-bold text-lg mb-2">Web Development</h3>
                        <ul className="space-y-1 text-sm">
                            <li>✔ Mobile Development</li>
                            <li>✔ E-commerce Development</li>
                            <li>✔ ERP Services</li>
                            <li>✔ Next-Gen Tech</li>
                            <li>✔ Digital Marketing</li>
                            <li>✔ Cloud Development</li>
                        </ul>
                    </div>
                    
                    {/* Middle Section - Frontend & Backend */}
                    <div>
                        <h3 className="font-bold text-lg mb-2">Frontend</h3>
                        <ul className="space-y-1 text-sm">
                            <li>✔ React.js</li>
                            <li>✔ Angular.js</li>
                            <li>✔ Vue.js</li>
                            <li>✔ Express.js</li>
                            <li>✔ TypeScript</li>
                            <li>✔ HTML/CSS</li>
                        </ul>
                        
                        <h3 className="font-bold text-lg mt-4 mb-2">Backend</h3>
                        <ul className="space-y-1 text-sm">
                            <li>✔ Python</li>
                            <li>✔ Django</li>
                            <li>✔ PHP</li>
                            <li>✔ Node.js</li>
                            <li>✔ Laravel</li>
                            <li>✔ Golang</li>
                        </ul>
                    </div>
                    
                    {/* Right Section - UI/UX */}
                    <div>
                        <h3 className="font-bold text-lg mb-2">UI/UX</h3>
                        <ul className="space-y-1 text-sm">
                            <li>✔ UI/UX Design</li>
                            <li>✔ Graphics Design</li>
                            <li>✔ Mobile App Design</li>
                            <li>✔ Design Prototyping</li>
                            <li>✔ Wireframes & Mockups</li>
                        </ul>
                    </div>
                </div>
                
                {/* Footer */}
                <div className="mt-6 border-t pt-4 text-center">
                    <button onClick={onClose} className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700 transition">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
