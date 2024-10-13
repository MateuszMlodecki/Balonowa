import React, { useState } from "react";
import { Grid } from "@mui/material";

const images = require.context("../Gallery", true, /\.(jpg|jpeg)$/);

const Galeria = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  const handleImageClick = (image) => {
    setEnlargedImage(image);
  };

  const handleClose = () => {
    setEnlargedImage(null);
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
              cursor: "pointer", // add a pointer cursor on hover
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
              }}
              onClick={handleClose}
            >
              <img
                src={images(image)}
                alt="Zdjęcie"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          )}
        </Grid>
      ))}
    </Grid>
  );
};

export default Galeria;
