import "./App.css";
// import { Routes, Route } from "react-router-dom";
import CarouselImgs from "./component/Carousel/CarouselImgs";

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="" element={<CarouselImgs />}></Route>
        <Route path="/carousel" element={<CarouselImgs />}></Route>
      </Routes> */}
      <CarouselImgs slides="2" infinite="true" />
    </>
  );
}

export default App;
