import React from 'react';
import Heading from '@/Layout/Heading';
import WrapperContainer from '@/Layout/WrapperContainer';
import Subheading from '@/Layout/Subheading';
import Paragraph from '@/Layout/Paragraph';

const CryptoWalletTypes = () => {
  const walletTypes = [
    {
      title: 'Hot Wallets',
      description: 'Connected to the internet, hot wallets are user-friendly and ideal for daily transactions but pose higher security risks.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12 mb-4">
          <path fill="currentColor" d="M19 7h-1V6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3zM5 5h10a1 1 0 0 1 1 1v1H5a1 1 0 0 1 0-2zm14 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8.83A3 3 0 0 0 5 9h14a1 1 0 0 1 1 1v8z"/>
          <circle fill="currentColor" cx="15" cy="13" r="2"/>
        </svg>
      )
    },
    {
      title: 'Cold Wallets',
      description: 'Offline cold wallets offer enhanced security and are suitable for long-term holdings, minimizing exposure to online threats.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12 mb-4">
          <path fill="currentColor" d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
        </svg>
      )
    },
    {
      title: 'Hardware Wallets',
      description: 'Hardware wallets are physical devices for secure key management, offering a balance between security and usability for crypto storage.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12 mb-4">
          <path fill="currentColor" d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 18H6V4h12v16zm-7-8h2v2h-2v-2zm-3 0h2v2H8v-2zm6 0h2v2h-2v-2z"/>
        </svg>
      )
    },
    {
      title: 'Paper Wallets',
      description: 'Printed wallets with QR codes and paper wallets provide offline storage but have flaws like limited reuse and partial fund issues.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12 mb-4">
          <path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-2-2H7v-2h10v2zm0-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      )
    },
    {
      title: 'Desktop Wallets',
      description: 'Software installed on PCs, and desktop wallets offers enhanced privacy and cold storage security but requires regular backups and antivirus.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12 mb-4">
          <path fill="currentColor" d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v2h12v-2l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z"/>
        </svg>
      )
    },
    {
      title: 'Mobile Wallets',
      description: 'Mobile wallets use QR codes, which are useful for everyday transactions. However, they are vulnerable to malware and require encryption for safety.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12 mb-4">
          <path fill="currentColor" d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
          <circle fill="currentColor" cx="12" cy="17" r="1"/>
        </svg>
      )
    },
  ];

  return (
    <WrapperContainer>
      <div className="container mx-auto lg:w-[80vw] md:w-[80vw] px-4 sm:px-6">
        <Heading>
            Types Of Crypto Wallet 
        </Heading>
        <Paragraph className=' text-center'>  
          Types of crypto wallets include hot, cold, hardware, software, and paper.
        </Paragraph>

        {/* Responsive Grid with Centering and Left/Right Gaps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-items-center">
          {walletTypes.map((wallet, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="text-[#1E3A8A]">
                {wallet.icon}
              </div>
             <Subheading>
             {wallet.title}
             </Subheading>
            <Paragraph>
            {wallet.description}
            </Paragraph>
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default CryptoWalletTypes;
