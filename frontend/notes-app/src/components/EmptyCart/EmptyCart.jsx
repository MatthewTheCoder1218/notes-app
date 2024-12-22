import React from "react";

const EmptyCart = ({ imgSrc, message }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <img src={imgSrc} alt="No notes" className="w-60" />

      <p className="w-1/2 text-md font-bold text-slate-700 text-center leading-7 mt-5">
        {message}
      </p>
    </div>
  );
};

export default EmptyCart;