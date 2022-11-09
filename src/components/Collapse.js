import React from "react";
import { useState } from "react";
import img from "../assets/images/imgcollapse.png";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <button
        type="button"
        className="collapse__button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <img
          className={!isOpen ? "collapse__arrow" : "collapse__arrow turned"}
          src={img}
          alt="fleche"
        />
      </button>

      {isOpen && (
        <div className="collapse__block show">
          {Array.isArray(content) ? (
            <ul className="list">
              {content.map((equipment, index) => (
                <li key={index} className="listelement">
                  {equipment}
                </li>
              ))}
            </ul>
          ) : (
            <p className="collapse__text"> {content}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Collapse;
