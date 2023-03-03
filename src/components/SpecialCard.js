import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
const SpecialCard = () => {
  return (
    <div className="col-4">
      <div className="special-prod-card d-flex">
        <div className="special-prod-image">
          <img src="/images/watch.jpg" className="img-fluid"></img>
        </div>
        <div className="">
          <h6 className="special-prod-title">Sony</h6>
          <h5 className="special-prod-heading">
            Sony A1 portable speaker wih bluetooth..
          </h5>
          <p className="special-prod-price">
            <span>$100</span>&nbsp;<strike>$200</strike>
          </p>
          <ReactStars
            count={5}
            size={24}
            activeColor="#ffd700"
            value={3}
            edit={false}
          />
          <div className=" d-flex gap-10 align-items-center">
            <p className=" mb-0 align-items-center">
              <b>5 </b>Days
            </p>
            <div className="d-flex align-items-center gap-10">
              <span className="badge bg-danger rounded-circle p-2">12</span>:
              <span className="badge bg-danger rounded-circle p-2">12</span>:
              <span className="badge bg-danger rounded-circle p-2">12</span>
            </div>
          </div>
          <div className="">
            <div className="my-4">
              <div className="">
                <p className="mb-0 special-prod-count">Product : 5</p>
              </div>
              <div className="progress" style={{ height: "5px" }}>
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="my-3">
              <div className="">
                <Link to="" className="button">
                  Add to Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialCard;
