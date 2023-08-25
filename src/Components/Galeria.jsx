import React from "react";

export const Galeria = () => {
  return (
    <div className=" row-start-2 row-end-3 md:row-start-1 md:row-end-2 md:col-start-2 md:col-end-3 md:w-2/3">
    <div className="grid grid-cols-2 grid-rows-2 gap-4 mx-3">
      <img
        src="../../imgs/italia2.jpeg"
        className="object-contain col-start-1 col-end-2 row-start-1 row-end-3 rounded-md"
      />
      <img
        src="../../imgs/italia1.jpeg"
        className="object-contain col-start-2 col-end-3 row-start-1 row-end-2 rounded-md"
      />
      <img
        src="../../imgs/DSC04781.jpg"
        className="object-contain col-start-1 col-end-3 row-start-2 row-end-3 rounded-md"
      />
    </div>
  </div>
  );
};
