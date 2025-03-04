import React, { useState } from "react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";

const faqData = [
  {
    question: "What is PrestaShop?",
    answer: "PrestaShop is an open-source eCommerce platform that allows businesses to create and manage online stores efficiently. It offers a range of features for customization, payment integration, and product management."
  },
  {
    question: "Is PrestaShop free to use?",
    answer: "Yes, PrestaShop is free to download and use. However, you may need to purchase premium modules, themes, or web hosting for advanced features."
  },
  {
    question: "How do I install PrestaShop?",
    answer: "You can install PrestaShop by downloading the latest version from the official website, uploading the files to your web server, and running the installation wizard."
  },
  {
    question: "Which hosting is best for PrestaShop?",
    answer: "A good PrestaShop hosting provider should offer fast SSD storage, PHP 7.4 or higher, 1-click installation, and free SSL. Popular options include SiteGround, A2 Hosting, and Cloudways."
  },
  {
    question: "What payment methods does PrestaShop support?",
    answer: "PrestaShop supports multiple payment gateways including PayPal, Stripe, Authorize.net, Bank Transfers, and Cash on Delivery."
  },
  {
    question: "Is PrestaShop secure?",
    answer: "Yes, but you should regularly update PrestaShop and modules, use SSL certificates for encrypted transactions, and enable reCAPTCHA to prevent fraud."
  }
];

const PrestaShopFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <WrapperContainer>
      <div className="max-w-5xl mx-auto py-0">
        {/* Heading & Description */}
        <div className="text-center mb-12">
          <Heading>PrestaShop FAQ</Heading>
          <Paragraph className="text-center text-gray-600">
            Find answers to the most common PrestaShop questions below.
          </Paragraph>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        {/* FAQ Section */}
        <div>
          {faqData.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg shadow-sm overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-lg font-medium bg-gray-100 hover:bg-gray-200 transition"
              >
                {faq.question}
                <span className={`transform transition-transform ${openIndex === index ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>

              {openIndex === index && (
                <div className="p-5 text-gray-700 bg-white border-t border-gray-200 transition-all duration-300">
                  <Paragraph>{faq.answer}</Paragraph>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default PrestaShopFAQ;
