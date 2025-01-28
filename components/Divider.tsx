import React from 'react';

interface DividerProps {
  text?: string; // Optional text in the middle of the divider
  color?: string; // Optional color for the divider line
}

const Divider: React.FC<DividerProps> = ({ text, color = "gray-300" }) => {
  return (
    <div className="flex items-center">
      {/* Left line */}
      <div className={`flex-grow my-2.5 border-2 border-t border-${color} `}></div>

      {/* Text in the middle */}
      {text && (
        <span
          className={`mx-4 text-sm text-gray-500 uppercase tracking-wide`}
        >
          {text}
        </span>
      )}

      {/* Right line */}
      <div className={`flex-grow my-2.5 border-2 border-t border-${color}`}></div>
    </div>
  );
};

export default Divider;
