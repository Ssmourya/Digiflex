import React, { useState } from "react";
import WrapperContainer from '../Layout/WrapperContainer';


const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        companyName: "",
        companySize: "",
        country: "",
        inquiry: "",
    });

    const [touched, setTouched] = useState({});
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        
        // Validate on change
        const validationErrors = validate({ ...formData, [name]: value });
        setErrors(validationErrors);
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched((prev) => ({
            ...prev,
            [name]: true,
        }));
    };

    const validate = (data) => {
        const newErrors = {};
        
        if (!data.firstName.trim()) {
            newErrors.firstName = "First name is required.";
        }

        if (!data.lastName.trim()) {
            newErrors.lastName = "Last name is required.";
        }

        if (!data.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            newErrors.email = "Email is not valid.";
        }

        if (!data.companyName.trim()) {
            newErrors.companyName = "Company name is required.";
        }

        if (!data.companySize) {
            newErrors.companySize = "Company size is required.";
        }

        if (!data.country) {
            newErrors.country = "Country or region is required.";
        }

        return newErrors;
    };

    const getInputClassName = (fieldName) => {
        const baseClasses = "mt-1 block w-full px-3 py-2 border rounded-md shadow-sm text-sm transition-colors duration-200 outline-none";
        const validClasses = "border-green-400 focus:ring-green-300 focus:border-green-400";
        const invalidClasses = "border-red-300 focus:ring-red-200 focus:border-red-300";
        const defaultClasses = "border-gray-300 focus:ring-blue-300 focus:border-blue-400";
    
        if (touched[fieldName]) {
            if (errors[fieldName]) {
                return `${baseClasses} ${invalidClasses}`;
            }
            if (formData[fieldName]) {
                return `${baseClasses} ${validClasses}`;
            }
        }
        return `${baseClasses} ${defaultClasses}`;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate(formData);
        
        if (Object.keys(validationErrors).length === 0) {
            console.log("Form submitted successfully:", formData);
        } else {
            setErrors(validationErrors);
            // Mark all fields as touched on submit
            const touchedFields = {};
            Object.keys(formData).forEach(key => {
                touchedFields[key] = true;
            });
            setTouched(touchedFields);
        }
    };

    return (
            <WrapperContainer>
        <div className="flex flex-col justify-between w-full md:flex-row mx-auto bg-white rounded-lg pb-8 ">
            {/* Left Section */}
            <div className="md:w-1/2 md:pr-8 ">
                <h2 className="text-5xl md:text-5xl font-bold mb-4 text-blue-700">
                    Get in Touch 
                </h2>

                <p className="text-sm md:text-base text-gray-600 mb-6">
                    Let's explore how Digiflex.ai can transform your IT infrastructure.
                </p>
                
                <ul className="space-y-4 text-sm md:text-base border rounded-md bg-blue-50 px-3 py-4">
                    <li className="flex items-start">
                        <span className="text-blue-500 font-bold text-lg mr-2">✓</span>
                        <span className="font-semibold text-blue-900">Advanced AI-powered IT solutions tailored for your business needs.</span>
                    </li>
                    
                    <li className="flex items-start">
                        <span className="text-blue-500 font-bold text-lg mr-2">✓</span>
                        <span className="font-semibold text-blue-900">Enterprise-grade security and compliance measures.</span>
                    </li>
                    
                    <li className="flex items-start">
                        <span className="text-blue-500 font-bold text-lg mr-2">✓</span>
                        <span className="font-semibold text-blue-900">24/7 dedicated technical support and consulting services.</span>
                    </li>
                </ul>
                
                <p className="text-xs md:text-sm text-gray-500 p-6">
                    Looking for support? Visit{" "}
                    <a href="#" className="text-blue-600 underline">
                        help & documentation
                    </a>
                </p>
            </div>

            {/* Right Section */}
            <div className="md:w-1/2 md:mt-0 pb-2">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-medium text-gray-700">First name *</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                                placeholder="John"
                                
                                className={getInputClassName("firstName")}
                            />
                            {touched.firstName && errors.firstName && 
                                <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>
                            }
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-700">Last name *</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                                placeholder="Doe"
                                className={getInputClassName("lastName")}
                            />
                            {touched.lastName && errors.lastName && 
                                <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>
                            }
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-gray-700">Work email *</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            placeholder="you@company.com"
                            className={getInputClassName("email")}
                        />
                        {touched.email && errors.email && 
                            <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                        }
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-gray-700">Company name *</label>
                        <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            placeholder="Your Company"
                            className={getInputClassName("companyName")}
                        />
                        {touched.companyName && errors.companyName && 
                            <p className="text-xs text-red-500 mt-1">{errors.companyName}</p>
                        }
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-gray-700">Company size *</label>
                        <select
                            name="companySize"
                            value={formData.companySize}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            className={getInputClassName("companySize")}
                        >
                            <option value="">Please select</option>
                            <option value="1-10">1-10</option>
                            <option value="11-50">11-50</option>
                            <option value="51-200">51-200</option>
                            <option value="201-500">201-500</option>
                            <option value="500+">500+</option>
                        </select>
                        {touched.companySize && errors.companySize && 
                            <p className="text-xs text-red-500 mt-1">{errors.companySize}</p>
                        }
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-gray-700">Country or region *</label>
                        <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            className={getInputClassName("country")}
                        >
                            <option value="">Please select</option>
                            <option value="India">India</option>
                            <option value="United States">United States</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="Australia">Australia</option>
                        </select>
                        {touched.country && errors.country && 
                            <p className="text-xs text-red-500 mt-1">{errors.country}</p>
                        }
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-gray-700">Anything else?</label>
                        <textarea
                            name="inquiry"
                            value={formData.inquiry}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Tell us how we can help..."
                            className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm text-sm focus:ring-blue-500 focus:border-blue-500"
                            rows={4}
                        />
                    </div>

                    <div>
                        <p className="text-xs text-gray-500 mt-4">
                            By submitting this form, I acknowledge receipt of the{" "}
                            <a href="#" className="text-blue-600 underline">
                                Digiflex.ai Privacy Policy
                            </a>
                            .
                        </p>
                        <p className="text-xs text-gray-500">
                            Fields marked with an asterisk(*) are required.
                        </p>
                    </div>

                    <button
                        type="submit"
                        className="mt-4 w-full sm:w-auto px-6 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 text-sm font-medium transition-colors duration-200"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
            </WrapperContainer>
    );
};

export default ContactForm;