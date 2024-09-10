import React from 'react';

const ArticleCard = ({ title, description, date, link}) => {
  return (
    <a href={link} className="w-full border-t-2 hover:text-blue-300 dark:hover:border-transparent hover:border-transparent border-gray-100 dark:border-gray-800 group" style={{transition:'border-color 0.2s linear'}}>
      <div className="flex flex-col bg-transparent hover:bg-gray-100 dark:hover:bg-opacity-5 transition-colors duration-100 rounded-2xl p-5">
        <h2 className="text-black dark:text-gray-300 text-base sm:text-lg font-semibold mt-2">{title}</h2>
        <p className="text-gray-700 dark:text-slate-400 mt-2 sm:text-base text-sm">{description}</p>
        <div className="flex justify-between items-center mt-4 ">
          <span className="text-gray-600 dark:text-gray-400 group-hover:text-blue-300 transition-colors duration-100">Read →</span>
          <span className="text-gray-500 dark:text-gray-400 text-sm italic">{date}</span>
        </div>
      </div>
    </a>
  );
};

export default ArticleCard;