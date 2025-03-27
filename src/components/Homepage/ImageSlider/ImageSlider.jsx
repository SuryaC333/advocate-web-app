import React from "react";
import AppConstants from "../../AdvConstants/AppConstants";
import { Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styles from './ImageSlider.module.css';

function ImageSlider() {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide container-fluid carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {AppConstants.Slider.map((image, index) => {
          return (            
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <img
                src={image.location}
                className={`d-block w-100 ${styles.advSliderImage} img-fluid img-responsive rounded`}
                alt="..."
              />
              <div className="carousel-caption rounded opacity-75 bg-info">
                <Typography className={`${styles.advSliderImageCaption} fw-bold text-primary-emphasis`}>
                  {image.caption}
                </Typography>
              </div>
            </div>
          );
        })}
      </div>
      <button
        className={`carousel-control-prev ${styles.advSliderPrevNext} ms-3`}
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <ArrowBackIcon />
      </button>
      <button
        className={`carousel-control-next ${styles.advSliderPrevNext} me-3`}
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <ArrowForwardIcon />
      </button>
    </div>
  );
}

export default ImageSlider;
