// components/CustomLink.tsx
import React from "react";

export default function CustomLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const isExternal = href && (href.startsWith("http") || href.startsWith("//"));

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="text-blue-600 hover:underline">
      {children}
    </a>
  );
}
