import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, X, Menu, ChevronDown } from "lucide-react";
import logo from "../assets/digiflex.png";
import { mainNavItems, serviceCategories, services, productCategories } from "./HeaderData";
import MegaMenu from "./MegaMenu";
import TopBar from "./ui/TopBar";

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

    const [hoveredCategory, setHoveredCategory] = useState(null);

    const navbarRef = useRef(null);
    const timeoutRef = useRef(null);

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current); // Prevent closing if hovered back
        }
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setActiveDropdown(null);
            setHoveredCategory(null);
        }, 3000);
    };

    const handleDropdownClick = (dropdownType) => {
        setActiveDropdown(activeDropdown === dropdownType ? null : dropdownType);
    };

    // Helper function to find features for a category
    const getFeaturesForCategory = (categoryType) => {
        // First try to find an exact match by id
        const exactMatch = services.find(
            (service) => service.id.toLowerCase() === categoryType.toLowerCase()
        );
        if (exactMatch) return exactMatch.features;

        // If no exact match, try to match by titles (more flexible)
        const matchByTitle = services.find(
            (service) =>
                service.title.toLowerCase().includes(categoryType.toLowerCase()) ||
                categoryType.toLowerCase().includes(service.title.toLowerCase())
        );

        return matchByTitle ? matchByTitle.features : [];
    };

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
                return services;

            case "products":
                return productCategories;

            default:
                return [];
        }
    };

    return (
        <nav className="sticky top-0 z-50 w-full bg-blue-950 text-white" ref={navbarRef}>
            <TopBar/>
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center h-16 gap-x-10">

                    <Link to="/" className="flex items-center no-underline">
                        <img src={logo} alt="logo" className="h-6" />
                    </Link>

                    {!isSearchVisible ? (
                        <>
                            <div className="hidden md:flex items-center space-x-6 mr-auto">
                                {mainNavItems.map((navItem) => (
                                    <div
                                        key={navItem.label}
                                        className="relative group"
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
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
                                                <MegaMenu services={getDropdownItems(navItem.dropdownType)} />
                                            )}
                                    </div>
                                ))}
                            </div>

                            <div className="hidden md:flex items-center space-x-6">
                                <button
                                    onClick={() => setIsSearchVisible(true)}
                                    className="text-white hover:text-gray-300"
                                    aria-label="Open search"
                                >
                                    <Search className="h-5 w-5" />
                                </button>
                                <Link
                                    to="/contact-us"
                                    className="border border-blue-600 text-blue-600 px-6 py-2 hover:bg-blue-500 hover:text-white transition-colors text-sm"
                                >
                                    CONTACT US
                                </Link>
                            </div>

                            <div className="md:hidden flex items-center ml-auto space-x-4">
                                <button
                                    onClick={() => setIsSearchVisible(true)}
                                    className="text-white hover:text-gray-300"
                                    aria-label="Open search"
                                >
                                    <Search className="h-5 w-5" />
                                </button>
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
                                className="bg-[#6B7CFF] px-4 md:px-6 py-2 text-sm mr-2 md:mr-4 hover:bg-[#5A6AE6] transition-colors"
                                aria-label="Submit search"
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
            {isMobileMenuVisible && (
                <div className="md:hidden bg-blue-900 py-4 px-4">
                    {mainNavItems.map((navItem) => (
                        <div key={navItem.label} className="mb-4">
                            <div
                                className="flex items-center justify-between"
                                onClick={() => handleDropdownClick(navItem.dropdownType)}
                            >
                                <span className="text-white font-medium">{navItem.label}</span>
                                {navItem.hasDropdown && (
                                    <ChevronDown
                                        className={`h-4 w-4 text-gray-400 transition-transform duration-300 ${
                                            activeDropdown === navItem.dropdownType ? "rotate-180" : ""
                                        }`}
                                    />
                                )}
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
                                                    className={`h-3 w-3 text-gray-400 transition-transform duration-300 ${
                                                        hoveredCategory === category.id ? "rotate-180" : ""
                                                    }`}
                                                />
                                            </div>

                                            {hoveredCategory === category.id && (
                                                <div className="mt-1 ml-4">
                                                    {getFeaturesForCategory(
                                                        category.dropdownType || category.id
                                                    ).map((feature) => (
                                                        <Link
                                                            key={feature.path}
                                                            to={feature.path}
                                                            className="block py-1 text-gray-300 text-xs hover:text-white"
                                                        >
                                                            {feature.title}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                    <Link
                        to="/contact-us"
                        className="block w-full text-center border border-blue-600 text-blue-600 px-6 py-2 hover:bg-blue-500 hover:text-white transition-colors text-sm mt-4"
                    >
                        CONTACT US
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;