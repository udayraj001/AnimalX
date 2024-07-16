import React from "react";
import "./Hero.css";

const Hero = (props) => {
  return (
    <>
      <div className={props.cName}>
        <img src={props.heroImg} alt="HeroImg" />
        <div className="hero-text">
          <h2>{props.title}</h2>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            {props.btnText}
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;