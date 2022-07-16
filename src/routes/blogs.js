import "./blogs.css"

function Blogs() {
  return (
    <div className="blogs">
      <div className="row-blogs">
        <div className="column-left-blogs">
          <div className="card-blogs">
            <h2>TITLE HEADING</h2>
            <h5>Title description, De 7, 2017</h5>
            <div className="fakeimg-blogs" style={{heigh: "200px"}}>Image</div>
            <p>Some text...</p>
          </div>
          <div className="card-blogs">
            <h2>TITLE HEADING</h2>
            <h5>Title description, Sep 2, 2017</h5>
            <div className="fakeimg-blogs" style={{height: "200px"}}>Image</div>
            <p>Some text...</p>
          </div>
        </div>
        <div className="column-right-blogs">
            <div className="card-blogs">
                <h2>About Me</h2>
                <div className="fakeimg-blogs" style={{height: "100px"}}>Image</div>
                <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
            </div>
            <div className="card-blogs">
                <h2>Popular Post</h2>
                <div class="fakeimg-blogs">Image</div><br/>
                <div class="fakeimg-blogs">Image</div><br/>
                <div class="fakeimg-blogs">Image</div>
            </div>
            <div className="card-blogs">
              <h3>Follow Me</h3>
              <p>Some text..</p>
            </div>
        </div>
      </div>
      <div className="footer-blogs">Footer</div>
    </div>
  );
}

export default Blogs;
