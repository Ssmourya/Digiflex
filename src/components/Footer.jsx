import React from 'react';
import { Menu, Mail, Phone } from 'lucide-react';
import { SocialIcon } from 'react-social-icons';
import WrapperContainer from '../Layout/WrapperContainer';

const locations = [
  {
    id: 'IN',
    city: 'Indore',
    address: '1206 , Skye Earth Corporate Park',
    location: 'Indore , Madhya Pradesh',
    PostalCode: '452010'
  }
];

const contacts = {
  phones: [
    '+91 9111453332',
    '+91 9111454949'
  ],
  emails: [
    'hr@digiflex.ai',
    'info@digiflex.ai'
  ]
};

const socialLinks = [
  { 
    url: 'https://instagram.com/digiflex', 
    network: 'instagram',
    ariaLabel: 'Instagram' 
  },
  { 
    url: 'https://facebook.com/digiflex', 
    network: 'facebook',
    ariaLabel: 'Facebook' 
  },
  { 
    url: 'https://twitter.com/digiflex', 
    network: 'x',
    ariaLabel: 'x' 
  },
  { 
    url: 'https://linkedin.com/company/digiflex', 
    network: 'linkedin',
    ariaLabel: 'LinkedIn' 
  },
  {
    url: 'https://discord.gg/digiflex',
    network: 'discord',
    ariaLabel: 'Discord'
  },
  {
    url: 'https://wa.me/1234567890',
    network: 'whatsapp',
    ariaLabel: 'WhatsApp'
  },
  {
    url: 'https://www.youtube.com/digiflex',
    network: 'youtube',
    ariaLabel: 'YouTube'
  },
  {
    url: 'https://t.me/digiflex',
    network: 'telegram',
    ariaLabel: 'Telegram'
  }
];

function Footer() {
  return (
    
    <footer className="bg-blue-950 text-white">
      <div className="container mx-auto py-4">
        {/* Logo - reduced margin bottom */}
        <div className="mb-4 max-w-[1200px] mx-auto">
          <h1 className="text-3xl font-bold tracking-tight text-white">DIGIFLEX</h1>
        </div>

        {/* Horizontal Line - reduced margin bottom */}
        <div className="w-full h-px bg-blue-800 mb-4"></div>

        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 mb-4 max-w-[1200px] mx-auto">
          {/* Locations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-grow ">
            {locations.map((loc, index) => (
              <React.Fragment key={loc.id}>
                <div className="space-y-0.5">
                  <div className="text-5xl font-bold opacity-20 mb-1 text-blue-700">{loc.id}</div>
                  <h2 className="text-lg font-semibold text-white">{loc.city}</h2>
                  <div className="space-y-0 text-sm text-gray-300">
                    <p>{loc.address}</p>
                    <p>{loc.location}</p>
                    {loc.PostalCode && <p>{loc.PostalCode}</p>}
                  </div>
                </div>
                {index < locations.length - 1 && (
                  <div className="hidden lg:block w-px bg-blue-800 absolute right-0 top-0 h-full"></div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Contacts Section */}
          <div className="lg:w-72 ">
            <h2 className="text-xl font-bold mb-4 text-white">Contacts</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                {contacts.phones.map((phone, index) => (
                  <div key={index} className="flex items-center gap-2">
                    {index === 0 && <Phone className="w-5 h-5 text-blue-400" />}
                    <a href={`tel:${phone.replace(/[^\d+]/g, '')}`} className="hover:text-blue-300 transition-colors text-gray-200">
                      {phone}
                    </a>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {contacts.emails.map((email, index) => (
                  <div key={index} className="flex items-center gap-2">
                    {index === 0 && <Mail className="w-5 h-5 text-blue-400" />}
                    <a href={`mailto:${email}`} className="hover:text-blue-300 transition-colors text-gray-200">
                      {email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Line - reduced margin bottom */}
        <div className="w-full h-px bg-blue-800 mb-3"></div>

        {/* Footer Bottom - reduced gap and padding */}
        <div className="flex flex-col md:flex-row justify-between items-center max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-2 mb-2 md:mb-0">
            <span className="text-sm text-gray-300">©2025 Digiflex. All rights reserved</span>
            <div className="flex gap-2">
              <a href="#" className="text-sm hover:text-blue-300 text-gray-300">Privacy Policy</a>
              <a href="#" className="text-sm hover:text-blue-300 text-gray-300">Accessibility</a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {socialLinks.map((link, index) => (
              <SocialIcon 
                key={index}
                url={link.url}
                network={link.network}
                aria-label={link.ariaLabel}
                style={{ height: 28, width: 28 }}
                bgColor="#1e40af" // Tailwind blue-800
                fgColor="white"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;