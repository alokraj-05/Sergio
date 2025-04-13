import React, { useState, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import commands from "../data/commands.json";

const CommandCard = lazy(() => import("../components/CommandCard"));

const Commands = () => {
  const [activeCategory, setActiveCategory] = useState("Getting Started");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const categories = commands.map((cat) => cat.category);

  // Global search across all categories
  const filteredCommands = searchQuery
    ? commands.flatMap((category) =>
        category.commands
          .filter(
            (cmd) =>
              cmd.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              cmd.description.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((cmd) => ({ ...cmd, category: category.category }))
      )
    : commands.find((cat) => cat.category === activeCategory)?.commands || [];

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white py-20">
      <AnimatePresence>
        {isSearchFocused && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-10"
            onClick={() => setIsSearchFocused(false)}
          />
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 font-syne">Bot Commands</h1>
          <p className="text-gray-400">
            Browse and search all available commands
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Navigation */}
          <nav className="md:w-64 flex-shrink-0">
            <div className="sticky top-24 bg-gray-800/30 rounded-lg p-4 backdrop-blur-sm border border-gray-700/50">
              <h2 className="text-xl font-semibold mb-4 text-violet-400/80 font-syne">
                Categories
              </h2>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => {
                        setActiveCategory(category);
                        setSearchQuery("");
                      }}
                      className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                        activeCategory === category && !searchQuery
                          ? "bg-violet-400/20 text-violet-400"
                          : "hover:bg-gray-700/30"
                      }`}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Main Content */}
          <main className="flex-1">
            {/* Search Bar */}
            <div className="relative mb-8 z-20">
              <div
                className={`relative transition-all duration-300 ${
                  isSearchFocused ? "scale-105" : ""
                }`}
              >
                <input
                  type="text"
                  placeholder="Search all commands..."
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/30 border border-gray-700/50 focus:outline-none focus:border-violet-400/50 transition-colors pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                />
                <i className="fa-solid fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
                  >
                    <i className="fa-solid fa-times"></i>
                  </button>
                )}
              </div>
            </div>

            {/* Commands Section */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold mb-6 font-syne">
                  {searchQuery
                    ? `Search Results ${
                        filteredCommands.length
                          ? `(${filteredCommands.length})`
                          : ""
                      }`
                    : `${activeCategory} Commands`}
                </h2>
                <div className="grid gap-6">
                  <Suspense fallback={<div>Loading...</div>}>
                    {filteredCommands.length > 0 ? (
                      filteredCommands.map((command) => (
                        <div key={`${command.category}-${command.name}`}>
                          {searchQuery && (
                            <div className="text-sm text-gray-400 mb-2">
                              Category: {command.category}
                            </div>
                          )}
                          <CommandCard command={command} />
                        </div>
                      ))
                    ) : (
                      <div className="text-center text-gray-400 py-8">
                        <i className="fa-solid fa-search text-4xl mb-4"></i>
                        <p>No commands found. Try a different search term.</p>
                      </div>
                    )}
                  </Suspense>
                </div>
              </motion.div>
            </div>
          </main>

          {/* Quick Links */}
          <aside className="md:w-64 flex-shrink-0">
            <div className="sticky top-24 bg-gray-800/30 rounded-lg p-4 backdrop-blur-sm border border-gray-700/50">
              <h2 className="text-xl font-semibold mb-4 text-violet-400/80 font-syne">
                Quick Links
              </h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#frequently-used"
                    className="text-gray-400 hover:text-violet-400 block px-4 py-2 rounded-md hover:bg-gray-700/30 transition-colors"
                  >
                    Frequently Used
                  </a>
                </li>
                <li>
                  <a
                    href="#moderation"
                    className="text-gray-400 hover:text-violet-400 block px-4 py-2 rounded-md hover:bg-gray-700/30 transition-colors"
                  >
                    Moderation
                  </a>
                </li>
                <li>
                  <a
                    href="#automod"
                    className="text-gray-400 hover:text-violet-400 block px-4 py-2 rounded-md hover:bg-gray-700/30 transition-colors"
                  >
                    AutoMod
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Commands;
