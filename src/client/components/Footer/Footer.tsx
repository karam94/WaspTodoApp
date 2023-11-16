import React from "react";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={`text-sm text-white mt-4 ${className}`}>
      Made with <span className="text-red-500">&#10084;</span> using{" "}
      <a
        href="https://wasp-lang.dev"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        Wasp
      </a>
    </footer>
  );
};

export default Footer;
