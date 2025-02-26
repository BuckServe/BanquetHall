import React from "react";

const HallCard = ({
  image,
  hallNumber,
  hallCapacity,
  hallArea,
  hallService,
}) => {
  return (
    <div>
      <div className="relative mx-[1rem]">
        <img
          src={image}
          alt={hallNumber}
          className="w-[32.5rem] h-[18.25rem] object-cover"
        />
        <div className="absolute flex flex-col bottom-2 left-2 text-white">
          <span className="text-[1.3rem] font-bold">{hallNumber}</span>
          <span className="text-[0.9rem] font-medium">{hallCapacity}</span>
          <span className="text-[0.9rem] font-medium">{hallArea}</span>
          <span className="text-[0.9rem] font-medium">{hallService}</span>
        </div>
      </div>
    </div>
  );
};

export default HallCard;
