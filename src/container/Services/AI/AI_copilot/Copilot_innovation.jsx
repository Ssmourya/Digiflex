import WrapperContainer from "@/Layout/WrapperContainer";
import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start">
      <WrapperContainer>
        <Head>
          <title>AI Innovation for Empowering Your Industry</title>
          <meta
            name="description"
            content="Transform your industry with AI solutions"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="max-w-7xl w-full">
          <h1 className="text-3xl font-bold text-center mb-6">
            AI Innovation for Empowering Your Industry
          </h1>
          <p className="text-center text-gray-600 mb-10">
            We transform operations, increase productivity, and enhance the
            customer experience with bespoke AI copilot services for various
            sectors. See how we have applied AI solutions to optimize your
            business environment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Banking and Finance */}
            <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full animate-bounce-slow">
                  <svg
                    className="w-6 h-6 text-blue-600 animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-9c-1.657 0-3 .895-3 2s1.343 2 3 2m0 0c1.11 0 2.08.402 2.599 1"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Banking and Finance
              </h3>
              <p className="text-gray-600">
                eSparkBiz is an AI copilot development company that provides AI
                copilot development services for automating financial processes.
                Use automation on repetitive jobs such as data entry, document
                processing, and financial report preparation to enhance
                productivity.
              </p>
            </div>

            {/* Retail */}
            <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full animate-bounce-slow">
                  <svg
                    className="w-6 h-6 text-blue-600 animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h18M3 7h18M3 12h18m-6 5h6"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Retail</h3>
              <p className="text-gray-600">
                Our AI copilot development services help retailing businesses
                through inventory management, order management, and customer
                support. Hire AI copilot solutions designed to create
                hassle-free business processes and better customer satisfaction.
              </p>
            </div>

            {/* Healthcare */}
            <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full animate-bounce-slow">
                  <svg
                    className="w-6 h-6 text-blue-600 animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 14l6-6m-6 0l6 6m-3-3h.01"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Healthcare</h3>
              <p className="text-gray-600">
                eSparkBiz is an AI copilot development company that gives out AI
                copilot development for healthcare administration. Streamline
                appointment setting and scheduling, patient record keeping, and
                enhanced patient service delivery.
              </p>
            </div>

            {/* Supply Chain and Logistics */}
            <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full animate-bounce-slow">
                  <svg
                    className="w-6 h-6 text-blue-600 animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM9 17h10m-6-8l4 4-4 4m-6-4h14"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Supply Chain and Logistics
              </h3>
              <p className="text-gray-600">
                Revolutionize supply chain management with eSparkBiz’s advanced
                AI copilot development services. Being an AI development company
                that focuses on the creation of copilot AI, we offer automated
                shipment tracking, automated inventory updates, and route
                planning for better operational efficiency and accuracy in
                delivery.
              </p>
            </div>

            {/* Insurance */}
            <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full animate-bounce-slow">
                  <svg
                    className="w-6 h-6 text-blue-600 animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5 2a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Insurance</h3>
              <p className="text-gray-600">
                To optimize insurance processes, eSparkBiz copilot development
                services provide AI-driven solutions. An AI copilot development
                organization offers solutions to automate the claims, policies,
                and questions for improved functionality.
              </p>
            </div>

            {/* Travel */}
            <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full animate-bounce-slow">
                  <svg
                    className="w-6 h-6 text-blue-600 animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13l-6-3"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Travel</h3>
              <p className="text-gray-600">
                eSparkBiz’s artificial intelligence copilot development services
                help the travel industries streamline. For enhancing the
                customers’ travel experience, we are premier AI copilot
                developing company that automates bookings, customized travel
                planning, and support services.
              </p>
            </div>

            {/* Automotive */}
            <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full animate-bounce-slow">
                  <svg
                    className="w-6 h-6 text-blue-600 animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Automotive</h3>
              <p className="text-gray-600">
                Transform automotive services with the help of professional AI
                copilot development services offered by eSparkBiz. Approaching
                customer inquiries, scheduling services, and even generating
                basic repair reports, our developed AI copilot helps to improve
                the quality of the service.
              </p>
            </div>

            {/* Hospitality */}
            <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full animate-bounce-slow">
                  <svg
                    className="w-6 h-6 text-blue-600 animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Hospitality</h3>
              <p className="text-gray-600">
                eSparkBiz, an AI copilot development firm, provides AI copilot
                development solutions that help improve the hospitality
                industry. Ensure timely and efficient reservation bookings,
                guest inquiries, and the provision of timely information about
                services to enhance the guest experience.
              </p>
            </div>

            {/* Real Estate */}
            <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full animate-bounce-slow">
                  <svg
                    className="w-6 h-6 text-blue-600 animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Real Estate</h3>
              <p className="text-gray-600">
                Bring innovation to your real estate management with the help of
                eSparkBiz AI copilot development services. We enable autonomous
                posting of property listings, self-arranged viewings, and lead
                management, optimizing efficiency and service convenience.
              </p>
            </div>

            {/* Manufacturing */}
            <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full animate-bounce-slow">
                  <svg
                    className="w-6 h-6 text-blue-600 animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Manufacturing</h3>
              <p className="text-gray-600">
                Manufacturing procedures are made smooth by eSparkBiz’s AI
                copilot development services. For better efficiency, our company
                specifically specializes in utilizing AIs copilot to enhance
                product design, product quality, and even inventory.
              </p>
            </div>

            {/* Media and Entertainment */}
            <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full animate-bounce-slow">
                  <svg
                    className="w-6 h-6 text-blue-600 animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 10l4.553 2.276A1 1 0 0121 12.382v-1.764a1 1 0 00-.553-.894L15 7m0 3v6m0-9v9m-3-9H6a2 2 0 00-2 2v10a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Media and Entertainment
              </h3>
              <p className="text-gray-600">
                Transform media and entertainment sectors with eSparkBiz’s AI
                copilot development services. Thus, our AI copilot development
                company provides professional content selection, creation,
                placement, and customer support to increase productivity.
              </p>
            </div>

            {/* Legal */}
            <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full animate-bounce-slow">
                  <svg
                    className="w-6 h-6 text-blue-600 animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Legal</h3>
              <p className="text-gray-600">
                eSparkBiz offers AI copilot development solutions aimed at legal
                processes’ optimization. Manage documents, research cases, and
                schedule cases with precision and efficiency to optimize legal
                processes.
              </p>
            </div>
          </div>
        </main>
      </WrapperContainer>
    </div>
  );
}
