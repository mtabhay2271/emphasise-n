import React from 'react';
import CollapsibleExample from '../components/layout/Navbar';
import ControlledCarousel from '../components/layout/Carousel';
import CardComponent from '../components/layout/Cards';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <CollapsibleExample />
      <ControlledCarousel />

      <div className="outer">
        <h1>Cards</h1>
        <CardComponent />
      </div>
      <div className="outer">
        <h1>info</h1>
      </div>
      <div className="outer">
        <h2>Let's Create Something Together</h2>
        <p>
          Get the latest updates and happenings in the IT sector and
          technological industries through our latest blogs, articles, and
          tech-updates. We cherish every moment! Have a look!.
        </p>
        <Button variant="warning">
          <NavLink className="nav-link " aria-current="page" to="/contact">
            CONTACT US
          </NavLink>
        </Button>
      </div>
      <div className="outer">
        <h1>team</h1>
      </div>
      <div className="outer">
        <h1>counter</h1>
      </div>
      <div className="outer">
        <h1>latest post</h1>
      </div>
      <div className="outer">
        <h1>footer</h1>
      </div>
    </>
  );
};

export default Home;
