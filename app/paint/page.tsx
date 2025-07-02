import React from "react";
import Image from "next/image";
import TimedImage from "../ui/timed-image";

const images = ["gubbe0.jpg", "gubbe1.jpg", "gubbe2.jpg", "gubbe3.jpg"];


const Paint: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-3">
           <TimedImage 
          images={images}
          interval={60000} 
          width={400}
          height={500}
        />
    </div>


  );
};

export default Paint;