import React, { useEffect, useState } from "react";
// import { getImages } from "../../API";
import "./CarouselImgs.css";
import axios from "axios";

function CarouselImgs(props) {
  let slides = props.slides;
  console.log(slides);
  const url = `http://localhost:3600/api/carousel?slides=${slides}`;
  console.log(url);
  const [images, setImages] = useState([]);

  //let allImages = [];

  useEffect(() => {
    // axios
    //   .get(url)
    //   .then((response) => {
    //     setImages(response.data.data[0].image);
    //     console.log(response.data.data[0].image);
    //     console.log(images);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    fetchImages();
  }, []);

  const fetchImages = () => {
    axios
      .get(url)
      .then(async (response) => {
        const allImages = response.data.data;
        setImages(allImages);
        console.log(allImages);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const fetchImages = () => {
  //   getImages()
  //     .then((response) => response.json())
  //     .then((photos) => console.log(photos))
  //     .catch((err) => console.log(err));
  // };

  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          {images.map((item) => {
            return (
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={item.image}
                  alt="First slide"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h1>{item.title}</h1>
                  <p>{item.subTitle}</p>
                </div>
              </div>
            );
          })}

          {/* <div className="carousel-item active">
            <img className="d-block w-100" src="/img_1.jpg" alt="First slide" />
            <div className="carousel-caption d-none d-md-block">
              <h1>Light Mask</h1>
              <p>First Description</p>
            </div>
          </div> */}

          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="/img_2.jpg"
              alt="Second slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>Normal Mask</h1>
              <p>Second Description</p>
            </div>
          </div>

          {/* <div className="carousel-item">
            <img className="d-block w-100" src="/img_3.jpg" alt="Third slide" />
            <div className="carousel-caption d-none d-md-block">
              <h1>Dark Mask</h1>
              <p>Third Description</p>
            </div>
          </div> */}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
}

export default CarouselImgs;
