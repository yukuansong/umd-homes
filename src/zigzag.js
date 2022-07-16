
import "./zigzag.css"
export default function Zigzag() {

return (
<div className="root">

<div style={{textAlign:"center"}}>
  <h2>Responsive Zig Zag Layout Example</h2>
  <p>Resize the browser window to see the effect.</p>
</div>

{/* The App Section */}
<div className="container">
  <div className="row">
    <div className="column-66">
      <h1 className="xlarge-font"><b>The App</b></h1>
      <h1 className="large-font" style={{color:"MediumSeaGreen"}}><b>Why buy it?</b></h1>
      <p><span style={{fontSize: "36px"}}>Take photos like a pro.</span> You should buy this app because lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <button className="button">Download Application</button>
    </div>
    <div className="column-33">
        <img src={process.env.PUBLIC_URL + '/img_app.jpeg'} width="335" height="471" alt="column-333"/>
    </div>
  </div>
</div>

{/* Clarity Section */}
<div className="container" style={{backgroundColor:"#f1f1f1"}}>
  <div className="row">
    <div className="column-33">
      <img src={process.env.PUBLIC_URL + '/app5.jpeg'} alt="App" width="335" height="471"/>
    </div>
    <div className="column-66">
      <h1 className="xlarge-font"><b>Clarity</b></h1>
      <h1 className="large-font" style={{color:"red"}}><b>Pixels, who?</b></h1>
      <p><span style={{fontSize:"24px"}}>A revolution in resolution.</span> Sharp and clear photos with the world's best photo engine, incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      <button className="button" style={{backgroundColor:"red"}}>Read More</button>
    </div>
  </div>
</div>

{/* The App Section */}
<div className="container">
  <div className="row">
    <div className="column-66">
      <h1 className="xlarge-font"><b>The App</b></h1>
      <h1 className="large-font" style={{color:"MediumSeaGreen"}}><b>Why buy it?</b></h1>
      <p><span style={{fontSize:"36px"}}>Take photos like a pro.</span> You should buy this app because lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      <button className="button">Download Application</button>
    </div>
    <div className="column-33">
        <img src={process.env.PUBLIC_URL + '/img_app.jpeg'} width="335" height="471" alt="column-33"/>
    </div>
  </div>
</div>

</div>
)
}