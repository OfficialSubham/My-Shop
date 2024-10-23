import React, { useState, useEffect } from "react";
import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';
import img4 from '../../assets/images/img4.png';
import img5 from '../../assets/images/img5.png';



const Carousel = () => {
  const [image, setImage] = useState([img1, img2, img3, img4, img5]);

  const [currImg, setCurrImg] = useState(0);

  const handlePre = () => {
    if(currImg === 0) {
      setCurrImg(image.length - 1)
    }
    else {
      setCurrImg(currImg - 1)
    }
  };
  const handleNxt = () => {
    if(currImg === image.length - 1) {
      setCurrImg(0)
    }
    else {
      setCurrImg(currImg + 1)
    }
  };

  useEffect(() => {

    const intervalId = setInterval(() => {
      handleNxt();
    }, 10000);
  
    return  () => {
      clearInterval(intervalId)
    }
  }, [currImg]);

  return (
    <>
      <div className="w-full h-80 mt-10 relative flex justify-center items-center">
        <div className="relative w-full h-72">
          {/* {image.map((num) => {
            return num%2 === 0 ?  <div key={num} className="w-full h-full bg-slate-600 absolute"></div> : <div key={num} className="w-full h-full bg-black absolute"></div>;
          })} */}
          <div className="w-full h-80 bg-slate-600 absolute">
            <img src={image[currImg]} alt="" className="h-full w-full object-cover transition-opacity duration-1000 ease-in-out"/>
          </div>
        </div>

        <div className="w-full absolute flex justify-between z-20">
          <button className="cursor-pointer" onClick={handlePre}>
            <svg
              className="h-8 w-8 text-navC"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <polygon points="19 20 9 12 19 4 19 20" />{" "}
              <line x1="5" y1="19" x2="5" y2="5" />
            </svg>
          </button>
          <button className="cursor-pointer" onClick={handleNxt}>
            <svg
              className="h-8 w-8 text-navC"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <polygon points="5 4 15 12 5 20 5 4" />{" "}
              <line x1="19" y1="5" x2="19" y2="19" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
