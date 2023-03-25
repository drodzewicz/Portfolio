import React from "react";
import { IImageCarouselProps } from "./types";
import { Carousel } from "react-responsive-carousel";
import "./ImageCarousel.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel: React.FC<IImageCarouselProps> = ({ images, ...otherProps }) => {
  return (
    <Carousel {...otherProps}>
      {images.map(({ _id, src }) => (
        <img key={_id} src={src} alt="some" className="carousel-image" />
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
