import React from "react";

const Button = ({ text, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      className="w-fit flex items-center gap-1 text-xl font-medium bg-blue-700 px-6 py-4 rounded-lg hover:bg-blue-800 transition-colors cursor-pointer"
    >
      {text}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        viewBox="0 -960 960 960"
        fill="#fff"
      >
        <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
      </svg>
    </a>
  );
};

export default Button;
