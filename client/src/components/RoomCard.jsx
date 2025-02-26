import React from "react";

const RoomCard = ({ image, roomNumber, roomCapacity, roomArea }) => {
  console.log("what is iamge here", image);
  return (
    <div>
      <div className="relative  mx-[1rem]">
        <img
          src={image}
          alt={roomNumber}
          className="w-[32.5rem] h-[18.25rem] object-cover"
        />
        <div className="absolute flex flex-col bottom-2 left-2 text-white">
          <span className="text-[1.3rem] font-bold">{roomNumber}</span>
          <span className="text-[0.9rem] font-medium">{roomCapacity}</span>
          <span className="text-[0.9rem] font-medium">{roomArea}</span>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
