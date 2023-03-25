import { CarouselProps } from "react-responsive-carousel";

type imageItemType = { id: string; src: any };

export interface IImageCarouselProps extends Partial<CarouselProps> {
  images: imageItemType[];
}
