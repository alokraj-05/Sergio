import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blurple-color/10 to-gray-800/20 backdrop-blur-md border-t border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white font-syne">
              About Sergio
            </h3>
            <p className="text-gray-300/80 text-sm">
              A powerful Discord moderation bot designed to make your server
              management easy and efficient. Open-source and constantly
              improving.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white font-syne">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/documentation"
                  className="text-gray-300/80 hover:text-violet-400/80 text-sm transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  to="/documentation/commands"
                  className="text-gray-300/80 hover:text-violet-400/80 text-sm transition-colors"
                >
                  Commands
                </Link>
              </li>
              <li>
                <a
                  to="https://github.com/alokraj-05/Sergio/blob/main/src/pages/privacyPolicy.md"
                  className="text-gray-300/80 hover:text-violet-400/80 text-sm transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  to="https://github.com/alokraj-05/Sergio/blob/main/src/pages/TOS.md"
                  className="text-gray-300/80 hover:text-violet-400/80 text-sm transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/alokraj-05/Discord-Moderation-Bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300/80 hover:text-violet-400/80 text-sm transition-colors"
                >
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white font-syne">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/alokraj-05"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-800/60 border border-gray-600 flex items-center justify-center hover:border-violet-400/80 transition-colors"
              >
                <i className="fa-brands fa-github text-gray-300/80 hover:text-violet-400/80"></i>
              </a>
              <a
                href="https://discord.gg/99ugxRgyk5"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-800/60 border border-gray-600 flex items-center justify-center hover:border-violet-400/80 transition-colors"
              >
                <i className="fa-brands fa-discord text-gray-300/80 hover:text-violet-400/80"></i>
              </a>
              <a
                href="mailto:range.rove505@gmail.com"
                className="w-10 h-10 rounded-xl bg-gray-800/60 border border-gray-600 flex items-center justify-center hover:border-violet-400/80 transition-colors"
              >
                <i className="fa-solid fa-envelope text-gray-300/80 hover:text-violet-400/80"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700/50">
          <p className="text-center text-gray-300/80 text-sm">
            © {new Date().getFullYear()} Sergio Bot. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
