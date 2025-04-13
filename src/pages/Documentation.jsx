import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Documentation = () => {
  const location = useLocation();
  const isCommandsPage = location.pathname.includes("/commands");

  if (isCommandsPage) {
    return <Outlet />;
  }

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 font-syne">Getting Started</h1>
          <p className="text-gray-400">
            Learn how to use Sergio Bot effectively
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Navigation */}
          <nav className="md:w-64 flex-shrink-0">
            <div className="sticky top-24 bg-gray-800/30 rounded-lg p-4 backdrop-blur-sm border border-gray-700/50">
              <h2 className="text-xl font-semibold mb-4 text-violet-400/80 font-syne">
                Guide Sections
              </h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#command-syntax"
                    className="text-gray-400 hover:text-violet-400 block px-4 py-2 rounded-md hover:bg-gray-700/30 transition-colors"
                  >
                    Command Syntax
                  </a>
                </li>
                <li>
                  <a
                    href="#permissions"
                    className="text-gray-400 hover:text-violet-400 block px-4 py-2 rounded-md hover:bg-gray-700/30 transition-colors"
                  >
                    Permissions
                  </a>
                </li>
                <li>
                  <a
                    href="#best-practices"
                    className="text-gray-400 hover:text-violet-400 block px-4 py-2 rounded-md hover:bg-gray-700/30 transition-colors"
                  >
                    Best Practices
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          {/* Main Content */}
          <main className="flex-1">
            <div className="prose prose-invert max-w-none">
              {/* Command Syntax Section */}
              <section id="command-syntax" className="mb-12">
                <h2 className="text-2xl font-bold mb-6 font-syne">
                  Understanding Command Syntax
                </h2>

                <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700/50 mb-8">
                  <h3 className="text-xl mb-4 font-syne">Command Format</h3>
                  <p className="text-gray-300 mb-4">
                    Commands follow this general format:
                  </p>
                  <code className="block bg-black/30 p-4 rounded-md mb-4 text-violet-400/80">
                    s!command &lt;required&gt; [optional]
                  </code>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>
                      <span className="text-violet-400/80">s!</span> - Default
                      prefix (can be changed)
                    </li>
                    <li>
                      <span className="text-violet-400/80">
                        &lt;required&gt;
                      </span>{" "}
                      - Required arguments
                    </li>
                    <li>
                      <span className="text-violet-400/80">[optional]</span> -
                      Optional arguments
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700/50 mb-8">
                  <h3 className="text-xl mb-4 font-syne">Examples</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-300 mb-2">
                        Required argument example:
                      </p>
                      <code className="block bg-black/30 p-4 rounded-md text-violet-400/80">
                        s!ban &lt;@user&gt; [reason]
                      </code>
                    </div>
                    <div>
                      <p className="text-gray-300 mb-2">
                        Optional argument example:
                      </p>
                      <code className="block bg-black/30 p-4 rounded-md text-violet-400/80">
                        s!userinfo [@user]
                      </code>
                    </div>
                  </div>
                </div>
              </section>

              {/* Permissions Section */}
              <section id="permissions" className="mb-12">
                <h2 className="text-2xl font-bold mb-6 font-syne">
                  Understanding Permissions
                </h2>
                <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700/50">
                  <p className="text-gray-300 mb-4">
                    Some commands require specific permissions to use. Common
                    permission levels include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>
                      <span className="text-violet-400/80">ADMINISTRATOR</span>{" "}
                      - Full server control
                    </li>
                    <li>
                      <span className="text-violet-400/80">
                        MANAGE_MESSAGES
                      </span>{" "}
                      - Can delete/manage messages
                    </li>
                    <li>
                      <span className="text-violet-400/80">MANAGE_ROLES</span> -
                      Can manage server roles
                    </li>
                    <li>
                      <span className="text-violet-400/80">BAN_MEMBERS</span> -
                      Can ban members
                    </li>
                  </ul>
                </div>
              </section>

              {/* Best Practices Section */}
              <section id="best-practices" className="mb-12">
                <h2 className="text-2xl font-bold mb-6 font-syne">
                  Best Practices
                </h2>
                <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700/50">
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3">
                      <i className="fa-solid fa-check text-green-400 mt-1"></i>
                      <span>
                        Always provide clear reasons when using moderation
                        commands
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fa-solid fa-check text-green-400 mt-1"></i>
                      <span>
                        Set up logging channels to track important actions
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fa-solid fa-check text-green-400 mt-1"></i>
                      <span>
                        Configure AutoMod features to prevent spam and unwanted
                        content
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fa-solid fa-check text-green-400 mt-1"></i>
                      <span>
                        Regularly check logs and adjust settings as needed
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Commands Link */}
              <div className="mt-8">
                <Link
                  to="/documentation/commands"
                  className="inline-flex items-center gap-2 bg-violet-500/20 text-violet-400 px-6 py-3 rounded-lg hover:bg-violet-500/30 transition-colors border border-violet-500/30"
                >
                  <span>View All Commands</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </main>

          {/* Right Side - Quick Info */}
          <aside className="md:w-64 flex-shrink-0">
            <div className="sticky top-24 bg-gray-800/30 rounded-lg p-4 backdrop-blur-sm border border-gray-700/50">
              <h2 className="text-xl font-semibold mb-4 text-violet-400/80 font-syne">
                Quick Info
              </h2>
              <div className="space-y-4">
                <div className="p-3 bg-gray-800/60 rounded-md">
                  <h3 className="font-medium mb-2">Default Prefix</h3>
                  <code className="text-violet-400/80">s!</code>
                </div>
                <div className="p-3 bg-gray-800/60 rounded-md">
                  <h3 className="font-medium mb-2">Help Command</h3>
                  <code className="text-violet-400/80">s!help</code>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
