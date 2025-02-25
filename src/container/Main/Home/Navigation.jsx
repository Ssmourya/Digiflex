import React from 'react';

const footerLinks = {
  'FRONTEND WEB DEVELOPMENT': [
    'Angular JS Development',
    'Vue JS Development',
    'JavaScript Development',
    'Node JS Development',
    'JAVA Development',
    'WordPress Development'
  ],
  'BACKEND WEB DEVELOPMENT': [
    'Python Development',
    'PHP Development',
    'Laravel Development',
    'CodeIgniter Development'
  ],
  'MOBILE APP DEVELOPMENT': [
    'iOS App Development',
    'Android App Development',
    'React Native App Development',
    'Flutter App Development',
    'Swift App Development',
    'Kotlin App Development',
    'Custom App Development',
    'iPhone App Development'
  ],
  'SOFTWARE DEVELOPMENT': [
    'Magento Development',
    'Shopify Development',
    'Big Commerce Development',
    'WooCommerce Development'
  ],
  'RESOURCES': [
    'About Us',
    'Our Work',
    'Blog',
    'Careers',
    'Sitemap',
    'Contact Us'
  ]
};

const Navigation = () => {
  return (
    <div className="flex justify-center items-center bg-black min-h-screen">
      <div className="text-white py-12 w-full max-w-6xl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="space-y-4">
                <h2 className="text-sm font-bold mb-4 text-blue-600">
                  {category}
                </h2>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
