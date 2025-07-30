import React from "react";

interface ExternalLinkButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline"; // Add more variants if needed
  className?: string; // For any extra custom styles
}

const variantStyles = {
  primary: "text-white bg-blue-600 hover:bg-blue-700 ",
  outline: "text-blue-600 border border-blue-600 hover:bg-blue-50 ",
};

const ExternalLinkButton: React.FC<ExternalLinkButtonProps> = ({
  href,
  children,
  variant = "primary",
  className = "",
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${variantStyles[variant]} inline-block px-6 py-2 rounded transition ${className}`}
    >
      {children}
    </a>
  );
};

export default ExternalLinkButton;
