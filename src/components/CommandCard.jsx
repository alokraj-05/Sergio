import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CommandCard = ({ command }) => {
  const [copied, setCopied] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");

  const copyToClipboard = async (text) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for mobile devices
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
          document.execCommand("copy");
          textArea.remove();
        } catch (err) {
          textArea.remove();
          throw new Error("Failed to copy");
        }
      }
      setCopied(true);
      setCopyStatus("Copied!");
      setTimeout(() => {
        setCopied(false);
        setCopyStatus("");
      }, 2000);
    } catch (err) {
      setCopyStatus("Failed to copy");
      setTimeout(() => setCopyStatus(""), 2000);
    }
  };

  // Check if command is potentially dangerous (admin commands that can't be easily reverted)
  const isDangerous =
    command.permission === "ADMINISTRATOR" ||
    command.permission === "SERVER_OWNER";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-lg bg-gradient-to-br from-blurple-color/10 to-gray-800/20 backdrop-blur-md border border-gray-700/50 p-4 mb-4"
    >
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-semibold text-violet-400/80 font-syne">
            {command.name}
          </h3>
          {isDangerous && (
            <span className="px-2 py-0.5 text-xs bg-red-500/20 text-red-400 border border-red-500/30 rounded-full">
              <i className="fa-solid fa-triangle-exclamation mr-1"></i>
              Caution
            </span>
          )}
        </div>
        <div className="relative">
          <button
            onClick={() => copyToClipboard(command.usage)}
            className="p-2 text-sm rounded-md bg-gray-800/60 border border-gray-600 hover:bg-gray-700/60 transition-colors flex items-center justify-center touch-manipulation"
            aria-label="Copy command"
          >
            <i
              className={`fa-solid ${
                copied ? "fa-check" : "fa-copy"
              } text-violet-400/80`}
            ></i>
          </button>
          <AnimatePresence>
            {copyStatus && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`fixed top-4 left-1/2 -translate-x-1/2 px-4 py-2 text-sm rounded-lg z-50 ${
                  copyStatus === "Copied!"
                    ? "bg-green-500/90 text-white backdrop-blur-sm border border-green-400/30"
                    : "bg-red-500/90 text-white backdrop-blur-sm border border-red-400/30"
                }`}
              >
                {copyStatus}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      {isDangerous && (
        <div className="mt-2 text-xs text-red-400/80 bg-red-500/10 border border-red-500/20 rounded-md p-2">
          This command requires administrator permissions and its effects may be
          irreversible. Use with caution.
        </div>
      )}
      <p className="text-gray-300 mt-2">{command.description}</p>
      <div className="mt-4 space-y-2">
        <div className="bg-gray-800/60 p-2 rounded-md">
          <span className="text-gray-400">Usage: </span>
          <code className="text-violet-400/80">{command.usage}</code>
        </div>
        <div className="bg-gray-800/60 p-2 rounded-md">
          <span className="text-gray-400">Example: </span>
          <code className="text-violet-400/80">{command.example}</code>
        </div>
        {command.aliases && (
          <div className="text-sm text-gray-400">
            Aliases: {command.aliases.join(", ")}
          </div>
        )}
        {command.permission && (
          <div className="text-sm text-gray-400">
            Required Permission: {command.permission}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CommandCard;
