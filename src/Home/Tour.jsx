import React from "react";
import "./Tour.css";
import TourData from "./TourData";
// import Tour1 from "../Assets/sydney.png";
// import Tour2 from "../Assets/rome.png";
// import Tour3 from "../Assets/abu.png";

const Tour = () => {
  return (
    <>
      <div className="tour d-flex justify-conetnt-center align-items-center flex-column">
        <h1 className="fw-bold">Collaborated With !</h1>
        <p className="font-sofias tagline">
          Unveiling Our World, One Journey at a Time!
        </p>
        <div className="tourCard">
          <TourData
            image="https://i.pinimg.com/564x/30/95/ad/3095ad059b348939e9759f32c75ea4c6.jpg"
            heading="Sydney Sojourns Pvt.Ltd"
            text="Explore Sydney's iconic landmarks, stunning beaches, and vibrant culture on our unforgettable guided tour."
            button="Book Now"
          />
          <TourData
            image="https://i.pinimg.com/564x/d6/80/cf/d680cfa37aa8b888cf7bfd83944d488c.jpg"
            heading="Rome Unveiled Pvt.Ltd"
            text="Discover ancient wonders, Renaissance art, and vibrant culture with us in our unforgettable Rome tour."
            button="Book Now"
          />
          <TourData
            image="https://i.pinimg.com/564x/0c/2e/93/0c2e93d091b122384b7ef4fb062fc61a.jpg"
            heading="Abu Dhabi Allure Corporation Pvt.Ltd"
            text="Experience the irresistible allure of Abu Dhabi: a blend of opulence, culture, and desert mystique in one unforgettable tour."
            button="Book Now"
          />
        </div>
      </div>
    </>
  );
};

export default Tour;