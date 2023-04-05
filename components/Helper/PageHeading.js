import React from "react";

const PageHeading = ({
  title = "Title",
  text = "Text",
  color = "text-gray-900",
}) => {
  return (
    <div className="m-auto text-center w-4/4 md:w-2/4 ">
      <h3 className="uppercase font-bold text-lg brand headingfont mb-4">
        {title}
      </h3>
      <p className={`text-xl lg:text-4xl md:text-2xl font-bold ${color}`}>
        {text}
      </p>
      <p className="border-b border-gray-400 mt-6"></p>
    </div>
  );
};

export default PageHeading;
