interface ICarouselImage {
  _id: string;
  image: string;
  title: string;
  subTitle: string;
  createdAt?: string;
  updatedAt?: string;
}

type CarouselImageProps = {
  todo: ICarouselImage;
};

type ApiDataType = {
  message: string;
  status: string;
  images: ICarouselImage[];
  image?: ICarouselImage;
};
