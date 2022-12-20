import React from 'react';
import NavbarBasic from '../components/layout/Navbar';
import Button from 'react-bootstrap/Button';

const Contact = () => {
  return (
    <>
      <NavbarBasic />
      <div className="outer">
        <h3>Home/Contact Us </h3>
      </div>

      <div className="contact_form">
        <div className="row contact_data p-5 shadow">
          <h1 className="mb-4">Get in Touch</h1>
          <div className="col mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Your name"
              aria-label="Name"
            />
          </div>
          <div className="col mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Your email"
              aria-label="Email"
            />
          </div>
          <div className="col mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Your phone number"
              aria-label="Phone number"
            />
          </div>

          <div className="mb-4">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="col mb-4">
            <Button className="btn btn-primary ml-5">Message</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
