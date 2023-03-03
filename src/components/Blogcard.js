import React from "react";
import { Link } from "react-router-dom";

function Blogcard() {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img className="img-fluid" src="/images/blog-1.jpg" alt="blog" />
      </div>
      <div className="blog-content" >
        <p className="date">1 Dec, 2022</p>
        <h5 className="title">A beautiful sunday morning renaissance</h5>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quaerat
          accusamus officia
        </p>
        <Link to="/" className="button">
          Read more
        </Link>
      </div>
    </div>
  );
}

export default Blogcard;
