'use client';

import { useState } from 'react';
import { useEffect } from 'react';
import Image from 'next/image';

// An image with a counter that switches to the next image after a certain time

export default function TimedImage({
  images,
  interval = 5000, // Default interval of 5 seconds
  width = 400,
  height = 500,
}: {
  images: string[];
  interval?: number;
  width?: number;
  height?: number;
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to switch to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const countdown = Math.ceil(interval / 1000); // Calculate countdown in seconds
  const [timeLeft, setTimeLeft] = useState(countdown);

  // Update the countdown every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          nextImage(); // Change image when countdown reaches 0
          return countdown; // Reset countdown
        }
        return prevTime - 1; // Decrease time left by 1 second
      });
    }, 1000); // Update every second

    return () => clearInterval(timer); // Clear the interval on component unmount
  }, [countdown]);

  return (
    <div className="flex flex-col items-center justify-center p-10">
      <Image
        src={`/${images[currentImageIndex]}`}
        alt={`Image ${currentImageIndex + 1}`}
        className="object-contain rounded-lg shadow-lg"
        width={width}
        height={height}
      />
      <p className="mt-4 text-lg font-semibold">
        Image {currentImageIndex + 1} of {images.length}
      </p>
      <p className="text-sm text-gray-500">
        This image will change in {timeLeft} seconds.
      </p>
    </div>
  );
}
    