import React from 'react';
import Heading from "@/Layout/Heading";
import Subheading from "@/Layout/Subheading";
import Paragraph from '@/Layout/Paragraph';
const XamarinAppServices = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
         <Heading>
         
            🛠  Our Xamarin App Development Services at Digiflex.ai
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
              <Paragraph>
                Tailor-made business solutions.
              </Paragraph>
            </div>
          </div>
          {/* Service Card 2 */}
          <div className="flex items-start bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mr-4">🔄</div>
            <div>
              <Subheading>
                Xamarin App Migration & Modernization
              </Subheading>
              <Paragraph>
                Upgrade legacy apps to Xamarin.
              </Paragraph>
            </div>
          </div>
          {/* Service Card 3 */}
          <div className="flex items-start bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mr-4">🎨</div>
            <div>
              <Subheading>
                Native UI/UX with Xamarin.Forms
              </Subheading>
              <Paragraph>
                Stunning, high-performing user interfaces.
              </Paragraph>
            </div>
          </div>
          {/* Service Card 4 */}
          <div className="flex items-start bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mr-4">📡</div>
            <div>
              <Subheading>
                Backend & API Integration
              </Subheading>
              <Paragraph>
                Azure, REST APIs, GraphQL, Firebase.
              </Paragraph>
            </div>
          </div>
          {/* Service Card 5 */}
          <div className="flex items-start bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mr-4">🛠️</div>
            <div>
              <Subheading>
                Xamarin App Testing & Debugging
              </Subheading>
              <Paragraph>
                Performance tuning & security audits.
              </Paragraph>
            </div>
          </div>
          {/* Service Card 6 */}
          <div className="flex items-start bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mr-4">🔧</div>
            <div>
              <Subheading>
                Post-Launch Maintenance & Support
              </Subheading>
              <Paragraph>
                Continuous improvements & updates.
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default XamarinAppServices;
