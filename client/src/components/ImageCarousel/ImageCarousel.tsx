import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./ImageCarousel.scss";
import { IImageCarouselProps } from "./types";

const ImageCarousel: React.FC<IImageCarouselProps> = ({
  images,
  ...otherProps
}) => {
  return (
    <Carousel {...otherProps}>
      {images.map(({ _id, src }) => (
        <img key={_id} src={src} alt="some" className="carousel-image" />
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
