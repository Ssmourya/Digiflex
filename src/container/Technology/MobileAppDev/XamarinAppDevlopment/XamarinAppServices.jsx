import React from 'react';
import Heading from "../../../../Layout/Heading";
import Subheading from "../../../../Layout/Subheading";
const XamarinAppServices = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
         <Heading>
         
            🛠  Our Xamarin App Development Services
        </Heading>
          <p className="text-gray-700 text-lg">
            Discover how our specialized services can elevate your mobile strategy.
          </p>
        </div>
        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Service Card 1 */}
          <div className="flex items-start bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mr-4">📱</div>
            <div>
              <Subheading>
                Custom Xamarin App Development
              </Subheading>
              <p className="text-gray-600 mt-2">
                Tailor-made business solutions.
              </p>
            </div>
          </div>
          {/* Service Card 2 */}
          <div className="flex items-start bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mr-4">🔄</div>
            <div>
              <Subheading>
                Xamarin App Migration & Modernization
              </Subheading>
              <p className="text-gray-600 mt-2">
                Upgrade legacy apps to Xamarin.
              </p>
            </div>
          </div>
          {/* Service Card 3 */}
          <div className="flex items-start bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mr-4">🎨</div>
            <div>
              <Subheading>
                Native UI/UX with Xamarin.Forms
              </Subheading>
              <p className="text-gray-600 mt-2">
                Stunning, high-performing user interfaces.
              </p>
            </div>
          </div>
          {/* Service Card 4 */}
          <div className="flex items-start bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mr-4">📡</div>
            <div>
              <Subheading>
                Backend & API Integration
              </Subheading>
              <p className="text-gray-600 mt-2">
                Azure, REST APIs, GraphQL, Firebase.
              </p>
            </div>
          </div>
          {/* Service Card 5 */}
          <div className="flex items-start bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mr-4">🛠️</div>
            <div>
              <Subheading>
                Xamarin App Testing & Debugging
              </Subheading>
              <p className="text-gray-600 mt-2">
                Performance tuning & security audits.
              </p>
            </div>
          </div>
          {/* Service Card 6 */}
          <div className="flex items-start bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mr-4">🔧</div>
            <div>
              <Subheading>
                Post-Launch Maintenance & Support
              </Subheading>
              <p className="text-gray-600 mt-2">
                Continuous improvements & updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default XamarinAppServices;
