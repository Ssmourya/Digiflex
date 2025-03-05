import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, X, Menu, ChevronDown } from "lucide-react";
import logo from "../assets/digiflex.png";
import { mainNavItems, serviceCategories, productCategories, technologies } from "./HeaderData";
import MegaMenu from "./MegaMenu";
import { Phone, Mail } from "lucide-react";

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

    const [hoveredCategory, setHoveredCategory] = useState(null);

    const navbarRef = useRef(null);
    const timeoutRef = useRef(null);

    const topbarRef = useRef(null);
    const [topbarHeight, setTopbarHeight] = useState(0);

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current); // Prevent closing if hovered back
        }
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 3000);
    };

    const handleDropdownClick = (dropdownType) => {
        setActiveDropdown(activeDropdown === dropdownType ? null : dropdownType);
    };

    // Helper function to find features for a category
    const getFeaturesForCategory = (categoryType) => {
        // First try to find an exact match by id
        const exactMatch = serviceCategories.find(
            (service) => service.id.toLowerCase() === categoryType.toLowerCase()
        );
        if (exactMatch) return exactMatch.features;

        // If no exact match, try to match by titles (more flexible)
        const matchByTitle = serviceCategories.find(
            (service) =>
                service.title.toLowerCase().includes(categoryType.toLowerCase()) ||
                categoryType.toLowerCase().includes(service.title.toLowerCase())
        );

        return matchByTitle ? matchByTitle.features : [];
    };

    useEffect(() => {
        if (topbarRef.current) {
            setTopbarHeight(topbarRef.current.offsetHeight);
        }
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setIsMobileMenuVisible(false);
                setActiveDropdown(null);
                setHoveredCategory(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (activeDropdown) {
            getDropdownItems(activeDropdown);
        }
    }, [activeDropdown]);



    // Function to get the appropriate items for the dropdown based on type
    const getDropdownItems = (dropdownType) => {
        switch (dropdownType) {
            case "services":
                return serviceCategories;

            case "technology" :
                return technologies;

            case "products":
                return productCategories;

            default:
                return [];
        }
    };

    useEffect(() => {
        if (isMobileMenuVisible) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-hidden"); // Cleanup on unmount
        };
    }, [isMobileMenuVisible]);


    return (
        <>
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

            <nav className="sticky top-0 z-50 w-full bg-blue-950 text-white" ref={navbarRef}>

                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center h-16 gap-x-10">

                        <Link to="/" className="flex items-center no-underline">
                            <img src={logo} alt="logo" className="h-6" />
                        </Link>

                        {!isSearchVisible ? (
                            <>
                                <div className="hidden lg:flex items-center space-x-6 mr-auto"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}>
                                    {mainNavItems.map((navItem) => (
                                        <div
                                            key={navItem.label}
                                            className="group overflow-visible"
                                        >
                                            <div
                                                className="flex items-center space-x-1 cursor-pointer"
                                                onClick={() =>
                                                    handleDropdownClick(navItem.dropdownType)
                                                }
                                            >
                                                <Link
                                                    to={navItem.href}
                                                    className="text-white hover:text-white transition-colors text-md"
                                                    onClick={(e) =>
                                                        navItem.hasDropdown && e.preventDefault()
                                                    }
                                                >
                                                    {navItem.label}
                                                </Link>

                                                {navItem.hasDropdown && (
                                                    <ChevronDown
                                                        className={`h-4 w-4 text-gray-400 transition-transform duration-300
                                                            ${activeDropdown === navItem.dropdownType ? "rotate-180" : ""}`}
                                                    />
                                                )}

                                            </div>

                                            {navItem.hasDropdown &&
                                                activeDropdown === navItem.dropdownType && (
                                                    <MegaMenu setActiveDropdown={setActiveDropdown} services={getDropdownItems(navItem.dropdownType)} topbarHeight={topbarHeight} />
                                                )}
                                        </div>
                                    ))}
                                </div>

                                <div className="hidden lg:flex items-center space-x-6">
                                    <button
                                        onClick={() => setIsSearchVisible(true)}
                                        className="text-white hover:text-gray-300"
                                        aria-label="Open search"
                                    >
                                        <Search className="h-5 w-5" />
                                    </button>


                                    <Link
                                        to="/contact-us"
                                        className="border border-blue-600 text-blue-600 px-6 py-2 text-sm font-medium 
                                        rounded-md hover:bg-white hover:text-blue-600 transition-all duration-300 
                                        shadow-md hover:shadow-lg"
                                    >
                                        CONTACT US
                                    </Link>

                                </div>

                                <div className="lg:hidden flex items-center ml-auto space-x-4">
                                    {/* <button
                                        onClick={() => setIsSearchVisible(true)}
                                        className="text-white hover:text-gray-300"
                                        aria-label="Open search"
                                    >
                                        <Search className="h-5 w-5" />
                                    </button> */}
                                    <button
                                        onClick={() => setIsMobileMenuVisible(!isMobileMenuVisible)}
                                        className="text-white hover:text-gray-300"
                                        aria-label="Toggle mobile menu"
                                        aria-expanded={isMobileMenuVisible}
                                    >
                                        <Menu className="h-6 w-6" />
                                    </button>
                                </div>
                            </>
                        ) : (
                            <div className="flex-1 flex items-center ml-4 md:ml-8">
                                <Search className="h-5 w-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="e.g. Business Intelligence"
                                    className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-400 ml-4"
                                    autoFocus
                                    aria-label="Search input"
                                />
                                <button
                                    className="border border-blue-600 text-blue-600 px-4 md:px-6 py-2 text-sm mr-2 md:mr-4  font-medium 
                                        rounded-md hover:bg-white hover:text-blue-600 transition-all duration-300 
                                        shadow-md hover:shadow-lg"
                                >
                                    SEARCH
                                </button>
                                <button
                                    onClick={() => setIsSearchVisible(false)}
                                    className="text-white hover:text-gray-300"
                                    aria-label="Close search"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile menu */}
                {
                    isMobileMenuVisible && (
                        <div className="lg:hidden bg-blue-900 py-4 px-4 inset-0 z-50 overflow-y-auto h-screen">
                            {
                                mainNavItems.map((navItem) => (


                                    <div key={navItem.label} className="mb-4">

                                        <div
                                            className="flex items-center justify-between"
                                            onClick={() => handleDropdownClick(navItem.dropdownType)}
                                        >
                                            <span className="text-white font-medium">{navItem.label}</span>
                                            {
                                                navItem.hasDropdown && (
                                                    <ChevronDown
                                                        className={`h-4 w-4 text-gray-400 transition-transform duration-300 ${activeDropdown === navItem.dropdownType ? "rotate-180" : ""
                                                            }`}
                                                    />
                                                )
                                            }
                                        </div>

                                        {navItem.hasDropdown && activeDropdown === navItem.dropdownType && (
                                            <div className="mt-2 ml-4">
                                                {getDropdownItems(navItem.dropdownType).map((category) => (
                                                    <div key={category.id} className="mb-2">
                                                        <div
                                                            className="flex items-center justify-between"
                                                            onClick={() =>
                                                                setHoveredCategory(
                                                                    hoveredCategory === category.id
                                                                        ? null
                                                                        : category.id
                                                                )
                                                            }
                                                        >
                                                            <span className="text-white text-sm">
                                                                {category.title}
                                                            </span>
                                                            <ChevronDown
                                                                className={`h-3 w-3 text-gray-400 transition-transform duration-300 ${hoveredCategory === category.id ? "rotate-180" : ""
                                                                    }`}
                                                            />
                                                        </div>

                                                        {hoveredCategory === category.id && (
                                                            <div className="mt-1 ml-4">
                                                                {
                                                                    getFeaturesForCategory(
                                                                        category.dropdownType || category.id
                                                                    ).map((feature) => (


                                                                        <Link
                                                                            key={feature.path}
                                                                            onClick={() => setIsMobileMenuVisible(false)}
                                                                            to={feature.path}
                                                                            className="flex py-1 text-gray-300 text-xs hover:text-white"
                                                                        >
                                                                            <feature.icon className="w-4 h-4 text-blue-600 mr-2" />
                                                                            {feature.title}
                                                                        </Link>

                                                                    ))
                                                                }
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))
                            }

                            <Link
                                to="/contact-us"
                                className="block w-full text-center border border-blue-600 text-blue-600 px-6 py-2 hover:bg-blue-500 hover:text-white transition-colors text-sm mt-4"
                            >
                                CONTACT US
                            </Link>
                        </div>
                    )
                }

            </nav>
        </>
    );
};

export default Navbar;