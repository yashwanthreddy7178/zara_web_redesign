import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="./images/zara-logo.png" alt="Zara Logo" className="w-48 h-auto mb-4" />
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6" />
              <Instagram className="w-6 h-6" />
              <Twitter className="w-6 h-6" />
              <Youtube className="w-6 h-6" />
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>About US</li>
              <li>Join Life</li>
              <li>Offices</li>
              <li>Stores</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li>Account</li>
              <li>Items and Sizes</li>
              <li>Gift Options</li>
              <li>Deliveries</li>
              <li>Payments and Invoices</li>
              <li>My Purchases</li>
              <li>Exchanges, Returns and Refund</li>
              <li>Zara Pre-Owned</li>
              <li>Zara Experiences</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Policies</h3>
            <ul className="space-y-2">
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>Cookie and Preferences</li>
              <li>Acts</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

