import React from 'react';
import CollapsibleExample from '../components/layout/Navbar';
import ControlledCarousel from '../components/layout/Carousel';
import CardComponent from '../components/layout/Cards';

const Home = () => {
  return (
    <>
      <CollapsibleExample />
      <ControlledCarousel />
      <section className="service-2 section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="title text-center">
                <h1>What Do We Offer</h1>
                <p style={{ color: 'black' }}>
                  As guides through the maze of digital change, we help our
                  clients deliver the amazing digital customer experiences{' '}
                </p>
                <div className="border"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 text-center d-none d-md-block">
              <img
                loading="lazy"
                src="images/about/member.jpg"
                className="img-fluid inline-block"
                alt=""
              />
            </div>
            <div className="col-md-8">
              <div className="row text-center">
                <div className="col-md-6 col-sm-6">
                  <CardComponent />
                </div>
                <div className="col-md-6 col-sm-6">
                  <CardComponent />
                </div>
                <div className="col-md-6 col-sm-6">
                  <CardComponent />
                </div>
                <div className="col-md-6 col-sm-6">
                  <CardComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div classNameName="outer">
        <h1>Home Page</h1>
      </div> */}
    </>
  );
};

export default Home;
