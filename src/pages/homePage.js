import React from 'react';
import NavbarBasic from '../components/layout/Navbar';
import ControlledCarousel from '../components/layout/Carousel';
import CardComponent from '../components/layout/Cards';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const loginDetails = JSON.parse(localStorage.getItem('loginDone'));
  console.log(loginDetails);

  return (
    <>
      <NavbarBasic isLogin={loginDetails} />
      <ControlledCarousel />

      <div className="outer text-center">
        <h1>Cards</h1>
        <div class="container">
          <div class="row">
            <div class="col">
              <img
                className="d-block w-100 h-100"
                src="https://i.picsum.photos/id/3/5000/3333.jpg?hmac=GDjZ2uNWE3V59PkdDaOzTOuV3tPWWxJSf4fNcxu4S2g"
                alt="First slide"
              />
            </div>
            <div class="col">
              <div class="row ">
                <div class="col-6">
                  <CardComponent />
                </div>
                <div class="col-6">
                  <CardComponent />
                </div>
                <div class="col-6">
                  <CardComponent />
                </div>
                <div class="col-6">
                  <CardComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="outer text-center">
        <h1>We Are Emphasis Tech Agency</h1>
        <p>
          Offering High-Tech Solutions to Enterprises, Startups, and Small
          Businesses.
        </p>
        <div class="container ">
          <div class="row">
            <div class="col">
              <img
                className="d-block w-100 h-100"
                src="https://i.picsum.photos/id/3/5000/3333.jpg?hmac=GDjZ2uNWE3V59PkdDaOzTOuV3tPWWxJSf4fNcxu4S2g"
                alt="First slide"
              />
            </div>
            <div class="col">
              <ul class="checklist">
                <li>
                  Our back-end developers are experts in Java, PHP, Ruby,
                  Python, SQL, and more while our front-end designers are
                  well-versed in using JavaScript, CSS3, HTML5, and more.
                </li>
                <li>
                  Using our many years of experience in mobile app development,
                  our Mobile App Development Team will help you create smooth,
                  seamless experiences on any mobile device.
                </li>
                <li>
                  We use custom APIs and our vast knowledge of web services to
                  build Enterprise Web Applications for digital marketing, CRM,
                  inventory control, expedited workflows, and so much more.
                </li>
                <li>
                  Our expert Full-Stack Web Developers are highly skilled in
                  Java and SQL programming languages with experience in leading
                  12-factor applications and cloud platform implementation.
                </li>
                <li>
                  Our Software Development Team uses Magento, Shopify, and/or
                  BigCommerce platforms to create seamless, scalable, and
                  powerful online stores for e-commerce companies of all sizes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="contactSection">
        <div className="text-center">
          <h2>Let's Create Something Together</h2>
          <p>
            Get the latest updates and happenings in the IT sector and
            technological industries through our latest<br></br> blogs,
            articles, and tech-updates. We cherish every moment! Have a look!.
          </p>
          <Button variant="warning">
            <NavLink className="nav-link " aria-current="page" to="/contact">
              CONTACT US
            </NavLink>
          </Button>
        </div>
      </div>
      <div className="section text-center">
        <h1>team</h1>
        <ControlledCarousel />
      </div>
      <div className="section text-center">
        <h1>counter</h1>
      </div>
      <div className="section text-center">
        <h1>latest post</h1>
      </div>
      <div className="outer">
        <h1>footer</h1>
      </div>
    </>
  );
};

export default Home;
