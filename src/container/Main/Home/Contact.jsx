import React, { useState } from "react";

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
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    const baseClasses =
      "mt-1 block w-full px-4 py-3 bg-gray-900 text-white rounded-lg border shadow-sm text-sm transition-all duration-300 backdrop-blur-sm";
    const validClasses =
      "border-blue-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent";
    const invalidClasses =
      "border-red-500 focus:ring-2 focus:ring-red-500 focus:border-transparent";
    const defaultClasses = "border-gray-700 focus:ring-2 focus:ring-blue-600 focus:border-transparent";

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
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        console.log("Form submitted successfully:", formData);
        setIsSubmitting(false);
      }, 1500);
    } else {
      setErrors(validationErrors);
      // Mark all fields as touched on submit
      const touchedFields = {};
      Object.keys(formData).forEach((key) => {
        touchedFields[key] = true;
      });
      setTouched(touchedFields);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black bg-gradient-to-b from-black to-gray-900 p-6">
      <div className="flex flex-col justify-between w-full max-w-5xl md:flex-row bg-gray-950 p-8 lg:p-12 rounded-2xl shadow-2xl border border-gray-800 backdrop-filter backdrop-blur-lg">
        {/* Left Section */}
        <div className="md:w-2/5 md:pr-12">
          <div className="bg-gradient-to-r from-blue-600 to-blue-400 h-1 w-16 mb-6 rounded-full"></div>
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-300">
            Get in Touch
          </h1>

          <p className="text-gray-300 mb-8 leading-relaxed">
            Let's explore how Digiflex.ai can transform your IT infrastructure with cutting-edge AI solutions.
          </p>

          <div className="space-y-6 mb-8">
            <div className="flex items-start space-x-4 group">
              <div className="w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-600/40 transition-all duration-300">
                <span className="text-blue-400 text-lg">✓</span>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">AI-powered Solutions</h3>
                <p className="text-gray-400 text-sm">Tailored enterprise intelligence for your unique business challenges.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 group">
              <div className="w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-600/40 transition-all duration-300">
                <span className="text-blue-400 text-lg">✓</span>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Enterprise Security</h3>
                <p className="text-gray-400 text-sm">Industry-leading security and compliance protocols to protect your data.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 group">
              <div className="w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-600/40 transition-all duration-300">
                <span className="text-blue-400 text-lg">✓</span>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">24/7 Support</h3>
                <p className="text-gray-400 text-sm">Round-the-clock technical support and strategic consulting services.</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3 mt-8">
            <span className="text-blue-500 text-xs uppercase font-bold">Follow us</span>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                <span className="text-white text-sm">X</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                <span className="text-white text-sm">in</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                <span className="text-white text-sm">f</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-3/5 mt-10 md:mt-0 bg-gray-900/40 rounded-xl p-6 lg:p-8 backdrop-filter backdrop-blur-sm border border-gray-800">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  First name *
                </label>
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
                {touched.firstName && errors.firstName && (
                  <p className="text-xs text-red-400 mt-1">{errors.firstName}</p>
                )}
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Last name *
                </label>
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
                {touched.lastName && errors.lastName && (
                  <p className="text-xs text-red-400 mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">
                Work email *
              </label>
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
              {touched.email && errors.email && (
                <p className="text-xs text-red-400 mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">
                Company name *
              </label>
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
              {touched.companyName && errors.companyName && (
                <p className="text-xs text-red-400 mt-1">{errors.companyName}</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Company size *
                </label>
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
                {touched.companySize && errors.companySize && (
                  <p className="text-xs text-red-400 mt-1">{errors.companySize}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Country or region *
                </label>
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
                  <option value="Canada">Canada</option>
                  <option value="Germany">Germany</option>
                  <option value="Japan">Japan</option>
                  <option value="Singapore">Singapore</option>
                </select>
                {touched.country && errors.country && (
                  <p className="text-xs text-red-400 mt-1">{errors.country}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">
                How can we help?
              </label>
              <textarea
                name="inquiry"
                value={formData.inquiry}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Tell us about your needs and challenges..."
                className="mt-1 block w-full px-4 py-3 bg-gray-900 text-white border border-gray-700 rounded-lg shadow-sm text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
                rows={4}
              />
            </div>

            <div>
              <div className="flex items-center space-x-3 py-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <p className="text-xs text-gray-300">
                  By submitting, you agree to our{" "}
                  <a href="#" className="text-blue-400 hover:text-blue-300 underline transition-colors">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-4 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-sm font-medium transition-all duration-300 flex items-center justify-center space-x-2 w-full sm:w-auto disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
                  <span>Processing...</span>
                </>
              ) : (
                "Submit Request"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;