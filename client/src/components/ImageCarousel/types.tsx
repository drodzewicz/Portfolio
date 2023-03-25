import { CarouselProps } from "react-responsive-carousel";
import { ImageItemType } from "types";

export interface IImageCarouselProps extends Partial<CarouselProps> {
  images: ImageItemType[];
}
