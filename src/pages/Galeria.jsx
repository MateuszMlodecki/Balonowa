import React, { useState } from "react";
import { Grid, IconButton } from "@mui/material";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

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
    <Grid container spacing={2}>
      {images.keys().map((image, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <img
            src={images(image)}
            alt="Zdjęcie"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              cursor: "pointer",
            }}
            onClick={() => handleImageClick(image)}
          />
          {enlargedImage === image && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: "99999",
                overflow: "auto",
              }}
              onClick={handleClose}
            >
              <IconButton
                style={{
                  backgroundColor: "white",
                  borderRadius: "50%",
                  margin: "10px",
                }}
                onClick={(e) => {
                  handleScrollLeft();
                  e.stopPropagation();
                }}
              >
                <ArrowLeft />
              </IconButton>
              <img
                src={images(image)}
                alt="Zdjęcie"
                style={{
                  maxWidth: "90%",
                  maxHeight: "90%",
                  objectFit: "contain",
                  pointerEvents: "none",
                }}
              />
              <IconButton
                style={{
                  backgroundColor: "white",
                  borderRadius: "50%",
                  margin: "10px",
                }}
                onClick={(e) => {
                  handleScrollRight();
                  e.stopPropagation();
                }}
              >
                <ArrowRight />
              </IconButton>
            </div>
          )}
        </Grid>
      ))}
    </Grid>
  );
};

export default Galeria;
