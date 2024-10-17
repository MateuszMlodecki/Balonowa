import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "@mui/icons-material"; // MUI ikony

const images = require.context("../Gallery", true, /\.(jpg|jpeg)$/);

const Galeria = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  const handleImageClick = (image) => {
    setEnlargedImage(image);
  };

  const handleClose = () => {
    setEnlargedImage(null);
  };

  const handleScrollLeft = () => {
    const currentIndex = images.keys().indexOf(enlargedImage);
    const newIndex =
      (currentIndex - 1 + images.keys().length) % images.keys().length;
    setEnlargedImage(images.keys()[newIndex]);
  };

  const handleScrollRight = () => {
    const currentIndex = images.keys().indexOf(enlargedImage);
    const newIndex = (currentIndex + 1) % images.keys().length;
    setEnlargedImage(images.keys()[newIndex]);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-1">
      {images.keys().map((image, index) => (
        <div key={index} className="relative">
          <img
            src={images(image)}
            alt="Zdjęcie"
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => handleImageClick(image)}
          />
          {enlargedImage === image && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[99999] overflow-auto"
              onClick={handleClose}
            >
              <button
                className="bg-white rounded-full p-2 mx-2"
                onClick={(e) => {
                  handleScrollLeft();
                  e.stopPropagation();
                }}
              >
                <ArrowLeft />
              </button>
              <img
                src={images(image)}
                alt="Zdjęcie"
                className="max-w-[75%] max-h-[75%] object-contain pointer-events-none md:max-w-[90%] md:max-h-[90%]"
              />
              <button
                className="bg-white rounded-full p-2 mx-2"
                onClick={(e) => {
                  handleScrollRight();
                  e.stopPropagation();
                }}
              >
                <ArrowRight />
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Galeria;
