import "./colors.css"

function Colors() {
    return (
        <div className="colors-row">
            <div className="col-1">#9933cc</div>
            <div className="col-2" style={{backgroundColor: "#9933cc"}}/>
            <div className="col-1">#0099cc</div>
            <div className="col-2" style={{backgroundColor: "#0099cc"}} />
            <div className="col-1">#ffffff</div>
            <div className="col-2" style={{backgoundColor: "ffffff"}}/>
            <div className="col-1">#33b5e5</div>
            <div className="col-2" style={{backgroundColor: "#33b5e5"}}/>
            <div className="col-1">#aaa</div>
            <div className="col-2" style={{backgroundColor: "#aaa"}}/>
            <div className="col-1">#f1f1f1</div>
            <div className="col-2" style={{backgroundColor: "#f1f1f1"}}/>
            <div className="col-1">#f2f2f2</div>
            <div className="col-2" style={{backgroundColor: "#f2f2f2"}}/>
        </div>
    )
}

export default Colors;