import { ArrowRight } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const NavItem = ({ setActiveDropdown, service }) => {
    
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef(null);
    const dropdownRef = useRef(null);
    const contentRef = useRef(null);
    const timeoutRef = useRef(null);

    // Handle positioning of the dropdown
    useEffect(() => {
        if (!isOpen || !dropdownRef.current || !buttonRef.current || !contentRef.current) return;

        const handlePosition = () => {
            const buttonRect = buttonRef.current.getBoundingClientRect();
            const dropdownEl = dropdownRef.current;
            const contentEl = contentRef.current;
            const viewportWidth = window.innerWidth;

            // Calculate content width (80% of viewport on mobile, 90% on larger screens)
            const contentWidth = Math.min(
                Math.floor(viewportWidth * (viewportWidth < 768 ? 0.8 : 0.9)),
                1200 // Max width
            );

            contentEl.style.width = `${contentWidth}px`;
            contentEl.style.maxWidth = `${contentWidth}px`;

            // Set dropdown width to match content
            dropdownEl.style.width = `${contentWidth}px`;

            // Calculate the center position of the button
            const buttonCenter = buttonRect.left + buttonRect.width / 2;

            // Position dropdown
            let leftPosition = buttonCenter - (contentWidth / 2);

            // Adjust if overflowing right edge
            if (leftPosition + contentWidth > viewportWidth - 20) {
                leftPosition = viewportWidth - contentWidth - 20;
            }

            // Adjust if overflowing left edge
            if (leftPosition < 20) {
                leftPosition = 20;
            }

            // Position dropdown
            dropdownEl.style.left = `${leftPosition}px`;
            dropdownEl.style.top = `${buttonRect.bottom + 10}px`;

            // Position notch at the center of the button
            const notchEl = dropdownEl.querySelector('.dropdown-notch');
            if (notchEl) {
                const notchPosition = buttonCenter - leftPosition - (8); // 8 is half the notch width
                notchEl.style.left = `${notchPosition}px`;
            }
        };

        handlePosition();
        window.addEventListener('resize', handlePosition);

        return () => {
            window.removeEventListener('resize', handlePosition);
        };
    }, [isOpen]);



    return (
        <div
            className="relative px-1 py-1"
            onMouseEnter={() => {
                clearTimeout(timeoutRef.current);
                setIsOpen(true);
            }}
            onMouseLeave={() => {
                timeoutRef.current = setTimeout(() => {
                    setIsOpen(false);
                }, 50); // Small delay before closing
            }}
        >
            <button
                ref={buttonRef}
                className="font-semibold text-base text-blue-950 px-3 py-2 rounded-lg hover:bg-blue-50 transition-all duration-200 cursor-pointer w-full text-center"
            >
                {service.title}
            </button>

            {isOpen && (
                <div
                    ref={dropdownRef}
                    className="fixed z-50 animate-fadeIn"
                    style={{ animationDuration: '500ms' }}
                >
                    {/* {/ Notch /} */}
                    <div className="dropdown-notch absolute top-[-0.41rem] w-4 h-4 rotate-45 bg-blue-950 z-10" />

                    {/* {/ Dropdown Content /} */}
                    <div
                        ref={contentRef}
                        className="relative grid grid-cols-1 md:grid-cols-2 p-6 rounded-xl bg-blue-950 shadow-xl 
                        border border-gray-100
                        "
                    >
                        {/* {/ Left side - Features /} */}
                        <div className="w-full pr-0 md:pr-6">
                            <h3 className="text-lg font-bold text-white mb-4">{service.title} Services</h3>
                            <div className={`${service.features?.length > 4 ? 'grid grid-cols-1 md:grid-cols-2 gap-3' : 'space-y-3'}`}>
                                {
                                    service.features?.map((feature, index) => (
                                        <Link to={feature.path}
                                            key={index}
                                            onClick={() => setActiveDropdown(false)}
                                            className="flex items-center group p-3 rounded-lg w-full bg-white border border-gray-100 hover:border-blue-200 hover:bg-blue-50 shadow-sm hover:shadow transition-all duration-200"
                                        >
                                            <div className="flex-shrink-0 w-10 h-10 rounded-md bg-blue-50 flex items-center justify-center mr-3 group-hover:bg-blue-100">
                                                <feature.icon className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <div className="flex-1 font-medium text-gray-800 group-hover:text-blue-950">{feature.title}</div>
                                            <ArrowRight className="w-4 h-4 text-blue-500 ml-2 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>

                        

                        {/* {/ Right side - Image /} */}
                        <div className="hidden md:flex items-center justify-center h-full mt-6 md:mt-0">
                            {
                                service.image ? (
                                    <div className="relative w-full h-full overflow-hidden rounded-xl">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover rounded-xl"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 to-transparent flex items-end">
                                            <div className="p-6">
                                                <h3 className="text-xl font-bold text-white mb-2">Explore {service.title}</h3>
                                                <button className="flex items-center text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
                                                    Learn more <ArrowRight className="ml-2 w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-center h-full w-full bg-gray-100 rounded-xl">
                                        <span className="text-gray-400">No image available</span>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const MegaMenu = ({ setActiveDropdown, services }) => {
    return (
        <nav className="fixed left-0 top-[107px] w-full bg-white shadow-sm z-40 px-4 py-1">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-start">
                {/* {/ <div className="max-w-7xl mx-auto grid grid-cols-7 grid-"> /} */}
                {services.map((service, index) => (
                    <NavItem key={index} service={service} setActiveDropdown={setActiveDropdown} />
                ))}
            </div>
        </nav>
    );
};

export default MegaMenu;