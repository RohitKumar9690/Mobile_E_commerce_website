import React from 'react';

const CategoriesCards = ({
  logo,
  title,
  bgColor = 'bg-gray-100',
  textColor = 'text-white',
getOncategory
}) => {
  return (
    <div className="flex justify-center items-center mt-5 space-x-4 px-4 flex-wrap mb-5"onClick={()=>getOncategory(title)}>
      <div
        className={`${bgColor} ${textColor} rounded-xl p-6 relative shadow-lg w-full sm:w-72 md:w-80 lg:w-96 transition-transform transform hover:scale-105 hover:shadow-2xl`}
      >
        <div className="mt-4">
          {/* Logo */}
          <img src={logo} alt={`${title} Logo`} className="w-24 h-24 mx-auto" />

          <div className="mt-3">
            {/* Title */}
            <h2 className={`text-lg text-center font-semibold ${textColor}`}>
              {title}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesCards;
