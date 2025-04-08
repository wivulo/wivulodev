import React from "react";

interface UIButtonLinkProps {
  href: string | undefined;
  children: React.ReactNode;
  className?: string;
  isDesabled?: boolean;
}

const UIButtonLink: React.FC<UIButtonLinkProps> = ({
  href,
  children,
  className,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer"
    >
      <button
        disabled={href ? false : true}
        className={'bg-sky-700 hover:bg-sky-600 text-white px-5 py-2 rounded-sm transition disabled:bg-black/10 cursor-pointer' + (className ? ` ${className}` : "")}
      >
        {children}
      </button>
    </a>
  );
};

export default UIButtonLink;
