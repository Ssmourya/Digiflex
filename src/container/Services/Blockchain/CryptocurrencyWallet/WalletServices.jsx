import { motion } from "framer-motion";
import { Wallet, Shield, Globe, Layers, Coins, Database, Lock, Server, KeyRound } from "lucide-react";
import Heading from "../../../../Layout/Heading";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Paragraph from "../../../../Layout/Paragraph";
import Subheading from "../../../../Layout/Subheading";

const services = [
  { title: "White Label Crypto Wallet Development", icon: <Wallet className="w-6 h-6" />, description: "Develop pre-engineered & launch-ready platform to save time and budget." },
  { title: "DeFi Wallet Development", icon: <Shield className="w-6 h-6" />, description: "Offer complete asset authority & DeFi protocol access for users." },
  { title: "Web3 Wallet Development", icon: <Globe className="w-6 h-6" />, description: "Empower users with asset authority & streamline onboarding processes." },
  { title: "Wallet-as-a-Service (WaaS)", icon: <Layers className="w-6 h-6" />, description: "Leverage scalable infrastructure to build secure digital wallets." },
  { title: "MPC Wallet Development", icon: <Lock className="w-6 h-6" />, description: "Safeguard private keys by division & distributing among multiple parties." },
  { title: "Multi-Chain Wallet Development", icon: <Server className="w-6 h-6" />, description: "Streamline multi-asset management across different chains." },
  { title: "Coin-Based Wallet Development", icon: <Coins className="w-6 h-6" />, description: "Store proprietary tokens securely with seamless access." },
  { title: "Centralized Wallet Development", icon: <Database className="w-6 h-6" />, description: "Manage digital assets with instant transactions & whitelisting." },
  { title: "TRON Wallet Development", icon: <KeyRound className="w-6 h-6" />, description: "Secure TRX storage & transfers within the TRON blockchain." },
];

const WalletServices = () => {
  return (
    <WrapperContainer>
      <div>
        <Heading>
          <div>Cryptocurrency Wallet Development Services</div>
        </Heading>
        <Paragraph>
          <span className="block text-center">
            Innovative cryptocurrency wallet development empowers secure, seamless, efficient digital transactions.
          </span>
        </Paragraph>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical timeline line (Hidden on mobile) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 h-full border-l-2 border-blue-200" />

          {/* Timeline items */}
          <div className="space-y-12">
            {services.map((service, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex md:flex-row sm:flex-col items-center w-full"
                >
                  {/* Mobile View: Full width content */}
                  <div className="md:hidden w-full text-center p-4 bg-white rounded-lg shadow">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="bg-blue-100 p-2 rounded-full text-blue-600">{service.icon}</span>
                      <Subheading>{service.title}</Subheading>
                    </div>
                    <Paragraph>{service.description}</Paragraph>
                  </div>

                  {/* Desktop View: Left & Right Side Layout */}
                  {isLeft ? (
                    <>
                      <div className="hidden md:block w-5/12 text-right pr-4">
                        <div className="inline-block bg-white p-4 rounded-lg shadow">
                          <div className="flex items-center justify-end space-x-2">
                            <span className="bg-blue-100 p-2 rounded-full text-blue-600">{service.icon}</span>
                            <Subheading>{service.title}</Subheading>
                          </div>
                          <Paragraph>{service.description}</Paragraph>
                        </div>
                      </div>
                      <div className="hidden md:flex w-2/12 justify-center items-center">
                        <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white z-10"></div>
                      </div>
                      <div className="w-5/12 hidden md:block"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-5/12 hidden md:block"></div>
                      <div className="hidden md:flex w-2/12 justify-center items-center">
                        <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white z-10"></div>
                      </div>
                      <div className="hidden md:block w-5/12 text-left pl-4">
                        <div className="inline-block bg-white p-4 rounded-lg shadow">
                          <div className="flex items-center justify-start space-x-2">
                            <span className="bg-blue-100 p-2 rounded-full text-blue-600">{service.icon}</span>
                            <Subheading>{service.title}</Subheading>
                          </div>
                          <Paragraph>{service.description}</Paragraph>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default WalletServices;
