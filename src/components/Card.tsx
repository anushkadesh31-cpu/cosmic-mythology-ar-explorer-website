import React from 'react';

type CardProps = {
  title: string;
  description: string;
  onClick?: () => void;
};

const Card: React.FC<CardProps> = ({ title, description, onClick }) => {
  return (
    <div
      className="cursor-pointer rounded-lg bg-white p-4 shadow hover:shadow-lg transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      onClick={onClick}
      tabIndex={0}
      role="button"
    >
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default Card;
