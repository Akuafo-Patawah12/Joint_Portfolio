import React from "react";
import { Github, Gitlab } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 px-3  text-center">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-6 mb-2">
          <a
            href="https://github.com/Akuafo-Patawah12"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <Github size={24}  className=" text-green-500"/>
          </a>
          <a
            href="https://gitlab.com/Akuafo-Patawah12"
            aria-label="GitLab"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <Gitlab size={24}  className=" text-green-500"/>
          </a>
        </div>
        <p className="text-gray-400 text-sm">
          You can follow us on GitHub or GitLab. We are always open for business and project collaborations.
        </p>
        <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Parcch. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
