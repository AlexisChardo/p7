import React from "react";

import redstar from "../assets/images/redstar.png";
import greystar from "../assets/images/greystar.png";

const Rating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {/* Loop to display star by rating */}
      {stars.map((star) =>
        rating >= star ? (
          <img
            key={star.toString()}
            className="rating__icon"
            src={redstar}
            alt="note"
          />
        ) : (
          <img
            key={star.toString()}
            className="rating__icon"
            src={greystar}
            alt="note"
          />
        )
      )}
    </div>
  );
};

export default Rating;
