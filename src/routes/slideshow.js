import React from "react";
import "./slideshow.css";

class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { slideIndex: 0, name: "John" };
    this.plusSlide = this.plusSlide.bind(this);
  }

  plusSlide(n) {
    this.setState((prevState) => ({
      slideIndex:
        (prevState.slideIndex + n) % 3 >= 0
          ? (prevState.slideIndex + n) % 3
          : 2,
    }));
  }
  shouldComponentUpdate(nextProps, nextState) {
    const slides = document.getElementsByClassName("mySlides");
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[nextState.slideIndex].style.display = "block";
    return true;
  }
  render() {
    return (
      <div className="slideshow-container">
        <a href="#!" className="prev" onClick={() => this.plusSlide(-1)}>
          &#10094;
        </a>
        <a href="#!" className="next" onClick={() => this.plusSlide(1)}>
          &#10095;
        </a>
        <div className="mySlides">
          <div className="slideshow-numbertext">1 / 3</div>
          <img
            alt="mountains"
            src={process.env.PUBLIC_URL + "img_mountains_wide.jpeg"}
            style={{ width: "100%" }}
          />
          <div className="slideshow-text">Mountains wide</div>
        </div>
        <div className="mySlides fade-slide">
          <div className="slideshow-numbertext">2 / 3</div>
          <img
            alt="mountains"
            src={process.env.PUBLIC_URL + "img_nature_wide.jpeg"}
            style={{ width: "100%" }}
          />
          <div className="slideshow-text">Nature wide</div>
        </div>
        <div className="mySlides fade-slide">
          <div className="slideshow-numbertext">3 / 3</div>
          <img
            alt="mountains"
            src={process.env.PUBLIC_URL + "img_snow_wide.jpeg"}
            style={{ width: "100%" }}
          />
          <div className="slideshow-text">Snow wide</div>
        </div>
      </div>
    );
  }
}
export default Slideshow;
