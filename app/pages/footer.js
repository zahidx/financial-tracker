"use client";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 sm:px-8 md:px-20">
        {/* Brand and Description */}
        <div>
          <h1 className="text-2xl font-bold text-white mb-4">Financial Tracker</h1>
          <p className="text-sm">
            Manage your finances effortlessly with our intuitive tools and features.
          </p>
          <p className="text-sm mt-2">
            <a href="mailto:support@financialtracker.com" className="text-blue-400 hover:underline">
              support@financialtracker.com
            </a>
          </p>
        </div>

        {/* Legal Section */}
        <div className="ml-0 md:ml-16">
          <h2 className="text-lg font-semibold text-white mb-4">Legal</h2>
          <ul className="space-y-2">
            <li>
              <a href="/privacy-policy" className="hover:text-blue-400 transition-colors">
                Privacy Policies
              </a>
            </li>
            <li>
              <a href="/faqs" className="hover:text-blue-400 transition-colors">
                FAQs
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-blue-400 transition-colors">
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-400 transition-colors">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="ml-0 md:ml-16">
          <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-blue-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="/profile" className="hover:text-blue-400 transition-colors">
                Profile
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-400 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-400 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Stay Connected</h2>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors"
              title="Facebook"
            >
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              title="Twitter"
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition-colors"
              title="Instagram"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition-colors"
              title="YouTube"
            >
              <i className="fab fa-youtube text-xl"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition-colors"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
          </div>
          <p className="text-sm mt-4">
            Join our community and stay updated on the latest features.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Financial Tracker. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
