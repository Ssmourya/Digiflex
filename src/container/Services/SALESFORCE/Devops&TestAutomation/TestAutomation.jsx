"use client";

import { useState } from "react";
import { ChevronRight, Search, Copy } from "lucide-react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import Subheading from "@/Layout/Subheading";

const topics = [
    { 
        question: "Role of Automation in CI/CD Pipelines", 
        answer: "🚀 Automation plays a crucial role in CI/CD pipelines by ensuring rapid and consistent testing, reducing manual effort, and enabling faster releases. It helps in maintaining code quality, detecting bugs early in the development cycle, and streamlining deployment processes. Continuous Integration (CI) ensures that new code changes are automatically tested and merged, while Continuous Deployment (CD) automates the release process. This leads to faster time-to-market, improved collaboration, and enhanced software reliability.",
        tags: ["DevOps", "Continuous Integration", "Deployment"]
      },
      { 
        question: "Types of Testing", 
        answer: "🛠 Software testing is categorized into various types, each serving a distinct purpose.\n\n1. **✅ Unit Testing**: Focuses on individual components or functions to ensure they work as expected.\n2. **🔗 Integration Testing**: Verifies the interactions between different components to detect interface issues.\n3. **📌 Functional Testing**: Ensures the application meets business requirements by validating features against specifications.\n4. **🔄 Regression Testing**: Re-tests existing functionality to ensure new changes do not break the application.\n5. **⚡ Performance Testing**: Evaluates the system's speed, stability, and scalability under various conditions.\n\nEach of these testing types plays a crucial role in delivering robust and high-quality software.",
        tags: ["Testing", "Quality Assurance", "Software Development"]
      },
      { 
        question: "Popular Test Automation Tools", 
        answer: "🧰 Test automation tools streamline the testing process by reducing manual intervention and improving efficiency. Some of the most widely used test automation tools include:\n\n- **🌍 Selenium**: A powerful tool for automating web applications across different browsers and platforms.\n- **📜 JUnit**: A widely adopted framework for unit testing in Java-based applications.\n- **🚀 Cypress**: A modern end-to-end testing framework known for its speed and reliability.\n- **🃏 Jest**: A JavaScript testing framework commonly used for React applications.\n- **📱 Appium**: An open-source tool for mobile app automation on iOS and Android.\n- **🔗 Postman**: Used for API testing and automation, ensuring backend services function correctly.\n\nChoosing the right test automation tool depends on the project's technology stack, testing requirements, and team expertise.",
        tags: ["Tools", "Automation", "Testing Frameworks"]
      },
      { 
        question: "Challenges in Test Automation", 
        answer: "⚠️ Despite its advantages, test automation comes with challenges:\n\n- **Initial Setup Costs**: Implementing automation frameworks requires time and resources.\n- **Test Maintenance**: Automated tests need regular updates to accommodate changes in the application.\n- **False Positives/Negatives**: Poorly written tests may produce incorrect results, requiring manual verification.\n- **Tool Selection**: Choosing the right tool for the job is crucial for efficiency and scalability.\n\nOvercoming these challenges requires a well-planned strategy, continuous monitoring, and adoption of best practices.",
        tags: ["Challenges", "Best Practices", "Strategy"]
      },
      { 
        question: "Best Practices in Test Automation", 
        answer: "💡 To maximize efficiency and effectiveness in test automation, consider these best practices:\n\n- **✅ Prioritize Test Cases**: Automate repetitive and high-risk test cases first.\n- **🔍 Use Data-Driven Testing**: Separate test data from scripts to improve reusability.\n- **📦 Maintain a Modular Structure**: Keep test scripts clean, organized, and reusable.\n- **⚡ Optimize Test Execution**: Run tests in parallel to reduce execution time.\n- **📊 Continuous Monitoring**: Regularly review test results to identify patterns and areas of improvement.\n\nImplementing these best practices helps maintain a stable and scalable automation framework.",
        tags: ["Best Practices", "Optimization", "Efficiency"]
      }
];

export default function TestAutomationPage() {
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);
  const [expanded, setExpanded] = useState(false);
  const [copiedTopic, setCopiedTopic] = useState(null);

  // Copy to clipboard function
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedTopic(selectedTopic.question);
    setTimeout(() => setCopiedTopic(null), 2000);
  };

  return (
    <WrapperContainer>
      <Heading>
       Test Automation in DevOps
      </Heading>
      <Paragraph className="block text-center"> 
          Test automation in DevOps ensures fast, reliable, and efficient software delivery.
      </Paragraph>

      <div className="flex flex-col sm:flex-row">
        {/* Sidebar (Topics List) */}
        <div className="w-full sm:w-1/3 bg-white shadow-2xl p-4 rounded-xl border-r-2 border-gray-100">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">📌 Test Automation Topics</h2>
          <ul className="space-y-2">
            {topics.map((topic, index) => (
              <li
                key={index}
                className={`
                  cursor-pointer 
                  p-3 
                  rounded-lg 
                  group 
                  transition 
                  flex 
                  justify-between 
                  items-center 
                  ${selectedTopic.question === topic.question 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'hover:bg-blue-50 text-gray-700'}
                `}
                onClick={() => {
                  setSelectedTopic(topic);
                  setExpanded(false); // Reset expansion on new selection
                }}
              >
                <span>{topic.question}</span>
                <ChevronRight 
                  className={`
                    text-gray-400 
                    group-hover:translate-x-1 
                    transition
                    ${selectedTopic.question === topic.question ? 'text-blue-600' : ''}
                  `} 
                  size={20} 
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section - Detailed Answer */}
        <div className="w-full sm:w-2/3 mt-4 sm:mt-0 sm:ml-6 bg-white shadow-2xl p-6 rounded-xl relative">
          <div className="absolute top-4 right-4">
            <button 
              onClick={() => copyToClipboard(selectedTopic.answer)}
              className="bg-blue-50 p-2 rounded-full hover:bg-blue-100 transition"
            >
              <Copy 
                size={20} 
                className={`
                  ${copiedTopic === selectedTopic.question 
                    ? 'text-green-500' 
                    : 'text-blue-500'}
                `} 
              />
            </button>
          </div>

          <Subheading>{selectedTopic.question}</Subheading>
          
          {/* Tags */}
          <div className="flex space-x-2 mb-4">
            {selectedTopic.tags.map((tag, index) => (
              <span 
                key={index} 
                className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Answer Preview with "Learn More" */}
          <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-wrap">
            {expanded 
              ? selectedTopic.answer 
              : selectedTopic.answer.split("\n\n")[0] + "..."
            }
          </p>

          {!expanded && (
            <button 
              onClick={() => setExpanded(true)}
              className="mt-2 text-blue-600 font-semibold hover:underline"
            >
              Learn More
            </button>
          )}
        </div>
      </div>
    </WrapperContainer>
  );
}
