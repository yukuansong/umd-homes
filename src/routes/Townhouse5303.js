import "./Townhouse5303.css";

function myFunction(videoID) {
  var video1 = document.getElementById(videoID);
  var btn = document.getElementById("myBtn");
  if (video1.paused) {
    video1.play();
    btn.innerHTML = "Pause";
  } else {
    video1.pause();
    btn.innerHTML = "Play";
  }
}
export default function Townhouse5303() {
  return (
    <div>
      <div className="container">
        <div className="row1">
          <div className="content">
            <h1 className="xlarge-font">Guest Room</h1>
            <p>
              The room is on the 3rd floor, sharing a large full bathroom with
              another guest room. The bed is in Queen size. The room has a
              closet.
            </p>
            <button id="myBtn" onClick={() => myFunction("myVideo1")}>
              Pause
            </button>
          </div>
          <video autoPlay muted loop id="myVideo1" className="myVideo">
            <source
              src={process.env.PUBLIC_URL + "guestRoom1.mp4"}
              type="video/mp4"
            />
            Your browser does not support HTML5 video
          </video>
        </div>
      </div>
      <div className="container">
        <div className="row1">
          <div className="content">
            <h1 className="xlarge-font">Full Bathroom</h1>
            <p>
              The room is on the 3rd floor, sharing a large full bathroom with
              another guest room. The bed is in Queen size. The room has a
              closet.
            </p>
            <button id="myBtn" onClick={() => myFunction("myVideo2")}>
              Pause
            </button>
          </div>
          <video autoPlay muted loop id="myVideo2" className="myVideo">
            <source
              src={process.env.PUBLIC_URL + "bathroom.mp4"}
              type="video/mp4"
            />
            Your browser does not support HTML5 video
          </video>
        </div>
      </div>
      <div className="container">
        <div className="row1">
          <div className="content">
            <h1 className="xlarge-font">Living Room at 2nd floor</h1>
            <p>
              The room is on the 3rd floor, sharing a large full bathroom with
              another guest room. The bed is in Queen size. The room has a
              closet.
            </p>
            <button id="myBtn" onClick={() => myFunction("myVideo3")}>
              Pause
            </button>
          </div>
          <video autoPlay muted loop id="myVideo3" className="myVideo">
            <source
              src={process.env.PUBLIC_URL + "livingroom.mp4"}
              type="video/mp4"
            />
            Your browser does not support HTML5 video
          </video>
        </div>
      </div>
      <div className="container">
        <div className="row1">
          <div className="content">
            <h1 className="xlarge-font">Front Door</h1>
            <p>
              The room is on the 3rd floor, sharing a large full bathroom with
              another guest room. The bed is in Queen size. The room has a
              closet.
            </p>
            <button id="myBtn" onClick={() => myFunction("myVideo4")}>
              Pause
            </button>
          </div>
          <video autoPlay muted loop id="myVideo4" className="myVideo">
            <source
              src={process.env.PUBLIC_URL + "frontend.mp4"}
              type="video/mp4"
            />
            Your browser does not support HTML5 video
          </video>
        </div>
      </div>
    </div>
  );
}
