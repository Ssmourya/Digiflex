import React from 'react';
import { Link } from "react-router-dom";
import { Menu, Mail, Phone } from 'lucide-react';
import { SocialIcon } from 'react-social-icons';
import logo from "../assets/digiflex.png";
import WrapperContainer from '../Layout/WrapperContainer';

const locations = [
  {
    city: 'Indore',
    address: '1206 , Skye Earth Corporate Park',
    location: 'Indore , Madhya Pradesh',
    postalCode: '452010',
    phone: '+91 9039383183',
    flagUrl: 'https://flagicons.lipis.dev/flags/4x3/in.svg',
    alt: 'India Flag'
  },
  {
    city: 'Dubai',
    address: 'Duja Towers, Sheikh Zayed Road',
    location: 'Dubai',
    postalCode: 'UAE',
    phone: '+971-522627630',
    flagUrl: 'https://flagicons.lipis.dev/flags/4x3/ae.svg',
    alt: 'UAE Flag'
  },
  {
    city: 'USA',
    address: '5101 34th St #A Lubbock,',
    location: 'Texas',
    postalCode: '79410',
    phone: '+1(438) 802-8521',
    flagUrl: 'https://flagicons.lipis.dev/flags/4x3/us.svg',
    alt: 'USA Flag'
  },
  {
    city: 'UK',
    address: '135 Junction Rd, Archway',
    location: 'London',
    postalCode: 'N19 5PX',
    phone: '+44-7727731075',
    flagUrl: 'https://flagicons.lipis.dev/flags/4x3/gb.svg',
    alt: 'UK Flag'
  }
];

const contacts = {
  phones: [
    '+91 9039383183',
    '+91 9111454949'
  ],
  emails: [
    'hr@digiflex.ai',
    'info@digiflex.ai'
  ]
};

const socialLinks = [
  { 
    url: 'https://www.instagram.com/questdigiflex', 
    network: 'instagram',
    ariaLabel: 'Instagram' 
  },
  { 
    url: 'https://www.facebook.com/questdigiflex', 
    network: 'facebook',
    ariaLabel: 'Facebook' 
  },
  { 
    url: 'https://x.com/QuestDigiflex', 
    network: 'x',
    ariaLabel: 'x' 
  },
  { 
    url: 'https://linkedin.com/company/quest-digiflex', 
    network: 'linkedin',
    ariaLabel: 'LinkedIn' 
  },
  {
    url: 'https://wa.me/9111454949',
    network: 'whatsapp',
    ariaLabel: 'WhatsApp'
  },
  {
    url: 'https://www.youtube.com/@QuestDigiflex',
    network: 'youtube',
    ariaLabel: 'YouTube'
  },
  {
    url: 'https://in.pinterest.com/questdigiflex/',
    network: 'pinterest',
    ariaLabel: 'Pinterest'
  },
  {
    url: 'https://digiflex.quora.com/',
    network: 'quora',
    ariaLabel: 'Quora',
    icon: (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        x="0px" 
        y="0px" 
        width="28" 
        height="28" 
        viewBox="0 0 32 32" 
        className="bg-blue-800 rounded-full p-1"
        fill="white"
      >
        <path d="M 15.492188 4 C 10.201187 4 5 8.2304531 5 14.439453 C 5 21.556453 11.968844 26.19875 18.214844 24.46875 C 19.260844 26.25175 20.638625 28 23.265625 28 C 27.606625 28 28 24 28 23 L 26.445312 23 C 26.365313 23.716 25.877594 24.457031 24.683594 24.457031 C 23.595594 24.457031 22.810641 23.704594 22.056641 22.558594 C 24.402641 20.743594 25.949219 17.9135 25.949219 14.4375 C 25.954219 8.2025 20.894188 4 15.492188 4 z M 15.492188 6 C 19.536188 6 21.261719 8.9094531 21.261719 14.439453 C 21.266719 16.657453 20.973047 18.450484 20.373047 19.771484 C 19.338047 18.221484 18.054578 17.001953 15.517578 17.001953 C 13.898578 17.001953 12.792719 17.473344 12.011719 18.152344 L 12.658203 19.443359 C 12.987203 19.284359 13.193688 19.289062 13.554688 19.289062 C 15.438688 19.289062 16.404562 20.924969 17.226562 22.542969 C 16.695563 22.701969 16.126234 22.765625 15.490234 22.765625 C 11.510234 22.765625 9.7851563 19.952219 9.7851562 14.449219 C 9.7861563 8.9082188 11.512187 6 15.492188 6 z"></path>
      </svg>
    )
  },
  {
    url: 'https://medium.com/@questdigiflex',
    network: 'medium',
    ariaLabel: 'Medium'
  }
];

// Country flags data (updated to match new locations)
const countryFlags = [
  {
    country: 'India',
    flagUrl: 'https://flagicons.lipis.dev/flags/4x3/in.svg',
    alt: 'India Flag'
  },
  {
    country: 'UAE',
    flagUrl: 'https://flagicons.lipis.dev/flags/4x3/ae.svg',
    alt: 'UAE Flag'
  },
  {
    country: 'USA',
    flagUrl: 'https://flagicons.lipis.dev/flags/4x3/us.svg',
    alt: 'USA Flag'
  },
  {
    country: 'UK',
    flagUrl: 'https://flagicons.lipis.dev/flags/4x3/gb.svg',
    alt: 'UK Flag'
  }
];

function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <WrapperContainer>
      <div className="container -mt-4">
        <div className="mb-4 max-w-[1240px] mx-auto">
        <Link to="/" className="flex items-center no-underline">
          <img src={logo} alt="logo" className="h-6" />
        </Link>
        </div>
        <div className="w-full h-px bg-blue-800 mb-4"></div>
        <div className="flex flex-col lg:flex-row justify-between gap-8 mb-4 max-w-[1275px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1275px] pt-10">
          {locations.map((loc, index) => (
            <div key={index} className="rounded-none flex flex-col text-left">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold">{loc.city}</h2>
                <img src={loc.flagUrl} alt={loc.alt} className="h-6 w-10" />
              </div>
              <p className="text-sm">{loc.address}</p>
              {loc.location && <p className="text-sm">{loc.location}</p>}
              {loc.postalCode && <p className="text-sm">{loc.postalCode}</p>}
              {loc.phone && (
              <div className="flex items-center gap-1 text-sm">
              <Phone className="w-4 h-4 text-blue-400" /> 
              <span>{loc.phone}</span>
              </div>
              )}
            </div>
          ))}
        </div>

          {/* Contacts Section */}
<div className="lg:w-72">
  <h2 className="text-xl font-bold mb-4 text-white">Contacts</h2>
  <div className="space-y-6">
    <div className="space-y-2">
      {contacts.phones.map((phone, index) => (
        <div key={index} className="flex items-start">
          {index === 0 ? (
            <Phone className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" />
          ) : (
            <div className="w-5 h-5 mr-2 flex-shrink-0"></div>
          )}
          <a href={`tel:${phone.replace(/[^\d+]/g, '')}`} className="hover:text-blue-300 transition-colors text-gray-200">
            {phone}
          </a>
        </div>
      ))}
    </div>
    <div className="space-y-2">
      {contacts.emails.map((email, index) => (
        <div key={index} className="flex items-start">
          {index === 0 ? (
            <Mail className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" />
          ) : (
            <div className="w-5 h-5 mr-2 flex-shrink-0"></div>
          )}
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
              link.icon ? (
                <a 
                  key={index} 
                  href={link.url} 
                  aria-label={link.ariaLabel} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  {link.icon}
                </a>
              ) : (
                <SocialIcon 
                  key={index}
                  url={link.url}
                  network={link.network}
                  aria-label={link.ariaLabel}
                  style={{ height: 28, width: 28 }}
                  bgColor="#1e40af" // Tailwind blue-800
                  fgColor="white"
                />
              )
            ))}
          </div>
        </div>
      </div>
      </WrapperContainer>
    </footer>
  );
}

export default Footer;