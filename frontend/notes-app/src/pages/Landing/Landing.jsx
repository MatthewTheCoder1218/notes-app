import React from "react";
import Image from "../../assets/images/image.png";

const Landing = () => {
  return (
    <div>
      <div>
        <h1>Your Notes, Organized and Private. Your Productivity, Unleashed</h1>
        <p>
          Effortlessly organize your notes, ideas and to-dos in one central
          place while keeping your data private
        </p>
        <button disabled="disabled">Try now for free</button>
      </div>
      <img src={Image} alt="demo image" className="w-50px" />
    </div>
  );
};

export default Landing;
