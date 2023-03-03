import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import Blogcard from "../components/Blogcard";
import ProductCard from "../components/ProductCard";
import SpecialCard from "../components/SpecialCard";
const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative ">
                <img
                  src="images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt="main-banner"
                ></img>
                <div className="main-banner-content position-absolute">
                  <h4 className="">SUPERCHARGED FOR PROS</h4>
                  <h5>iPad S13+ pro.</h5>
                  <p>From $999.00* onwards.</p>
                  <Link to="" className="button">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className=" small-banner position-relative  ">
                  <img
                    src="images/catbanner-01.jpg"
                    className="img-fluid rounded-3 "
                    alt="main-banner"
                  ></img>
                  <div className="small-banner-content position-absolute">
                    <h4 className="mb-1">Best Sale</h4>
                    <h5>Laptop Max</h5>
                    <p>
                      From $1699.00* or
                      <br />
                      $64.62/mo.
                    </p>
                  </div>
                </div>
                <div className=" small-banner position-relative ">
                  <img
                    src="images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="main-banner"
                  ></img>
                  <div className="small-banner-content position-absolute">
                    <h4 className="mb-1">15% off</h4>
                    <h5>Smartwatch 7</h5>
                    <p>
                      Shop the latest
                      <br />
                      band style and color
                    </p>
                  </div>
                </div>
                <div className=" small-banner position-relative ">
                  <img
                    src="images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="main-banner"
                  ></img>
                  <div className="small-banner-content position-absolute">
                    <h4 className="mb-1">New Arrival</h4>
                    <h5>Buy iPad Air</h5>
                    <p>
                      From $599.00* or
                      <br />
                      $49.32/mo.
                    </p>
                  </div>
                </div>
                <div className=" small-banner position-relative ">
                  <img
                    src="images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="main-banner"
                  ></img>
                  <div className="small-banner-content position-absolute">
                    <h4 className="mb-1">Free Engraving</h4>
                    <h5>AirPodes Max</h5>
                    <p>
                      High-fidelity playback &<br />
                      ultra-low distortion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 ">
              <div className="d-flex justify-content-between">
                <div className="d-flex gap-15 align-items-center">
                  <img src="images/service.png" alt=""></img>
                  <div>
                    <h6 className="">Free Shipping</h6>
                    <p className="mb-0">From orders over $5</p>
                  </div>
                </div>
                <div className="d-flex  gap-15 align-items-center">
                  <img src="images/service-02.png" alt=""></img>
                  <div>
                    <h6 className="">Daily Surprise offers</h6>
                    <p className="mb-0">Save upto 25% off</p>
                  </div>
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <img src="images/service-03.png" alt=""></img>
                  <div>
                    <h6 className="">Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <img src="images/service-04.png" alt=""></img>
                  <div>
                    <h6 className="">Affordable Price</h6>
                    <p className="mb-0">Get Factor default price</p>
                  </div>
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <img src="images/service-05.png" alt=""></img>
                  <div>
                    <h6 className="">Secure Payment</h6>
                    <p className="mb-0">100% protected payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5 ">
        <div className="container-xxl ">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap  align-items-center rounded-3 justify-content-between">
                <div className="d-flex align-items-center ">
                  <div>
                    <h5>Cameras</h5>
                    <p className="mb-0">10 items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera"></img>
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h5>Laptop</h5>
                    <p className="mb-0">10 items</p>
                  </div>
                  <img src="images/laptop.jpg" alt="laptop"></img>
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h5>Headphones</h5>
                    <p className="mb-0">10 items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="headphones"></img>
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h5>Smart TV</h5>
                    <p className="mb-0">10 items</p>
                  </div>
                  <img src="images/tv.jpg" alt="smart tv"></img>
                </div>
                <div className="d-flex align-items-center ">
                  <div>
                    <h5>Cameras</h5>
                    <p className="mb-0">10 items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera"></img>
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h5>Laptop</h5>
                    <p className="mb-0">10 items</p>
                  </div>
                  <img src="images/laptop.jpg" alt="laptop"></img>
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h5>Headphones</h5>
                    <p className="mb-0">10 items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="headphones"></img>
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h5>Smart TV</h5>
                    <p className="mb-0">10 items</p>
                  </div>
                  <img src="images/tv.jpg" alt="smart tv"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 featured-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collections</h3>
            </div>
            <div className="col-3">
              <ProductCard />
            </div>
            <div className="col-3">
              <ProductCard />
            </div>
            <div className="col-3">
              <ProductCard />
            </div>
            <div className="col-3">
              <ProductCard />
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 special-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Collections</h3>
            </div>
            <SpecialCard />
            <SpecialCard />
            <SpecialCard />
          </div>
        </div>
      </section>
      <section className=" marquee-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper rounded-3 card-wrapper">
                <Marquee>
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png" alt="brand-01"></img>
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-02.png" alt="brand-01"></img>
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-03.png" alt="brand-01"></img>
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-04.png" alt="brand-01"></img>
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-05.png" alt="brand-01"></img>
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-06.png" alt="brand-01"></img>
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-07.png" alt="brand-01"></img>
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-08.png" alt="brand-01"></img>
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 blog-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
            <div className="col-3">
              <Blogcard />
            </div>
            <div className="col-3">
              <Blogcard />
            </div>
            <div className="col-3">
              <Blogcard />
            </div>
            <div className="col-3">
              <Blogcard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
