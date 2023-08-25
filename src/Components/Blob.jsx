import React from "react";

const Blob = ({blobColor, clase}) => {
    
  return (
    <>
      <svg viewBox="0 0 200 200" className={`${clase}`} xmlns="http://www.w3.org/2000/svg">
        <path
          fill={`${blobColor}`}
          d="M37,-63.4C51.2,-55.9,68.2,-52.6,74.7,-42.7C81.2,-32.8,77.2,-16.4,72.1,-2.9C67,10.5,60.8,21,54.7,31.6C48.6,42.1,42.6,52.7,33.4,60.9C24.3,69,12.2,74.8,-1.6,77.6C-15.4,80.4,-30.8,80.2,-45.2,75.1C-59.6,69.9,-73.1,60,-77,46.6C-81,33.3,-75.4,16.7,-73,1.4C-70.5,-13.8,-71.1,-27.6,-67.6,-41.7C-64.1,-55.8,-56.4,-70.1,-44.5,-78.9C-32.5,-87.7,-16.3,-90.9,-2.4,-86.7C11.4,-82.5,22.8,-70.9,37,-63.4Z"
          transform="translate(100 100)"
        />
      </svg>
    </>
  );
};

export default Blob;
