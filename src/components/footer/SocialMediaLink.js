import React from "react";

export default function SocialMediaLink({ children, link }) {
  return (
    <a href={link} target="_main" className="text-white flex items-center">
      {children}
    </a>
  );
}
