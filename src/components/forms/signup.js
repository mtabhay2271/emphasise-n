import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setuserType] = useState('');

  const submitForm = async () => {
    let user = { username, email, password, userType };
    console.log(user);

    alert('User is successfully registered');

    let result = await fetch('http://localhost:4000/user/signup', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    result = await result.json();
    console.log(result);
  };

  return (
    <>
      <section className="vh-100" style={{ backgroundColor: '#eee' }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: '25px' }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              Username
                            </label>
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              Email
                            </label>
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            >
                              Password
                            </label>
                            <input
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example5c"
                            >
                              UserType
                            </label>
                            <input
                              type="userType"
                              id="form3Example5c"
                              className="form-control"
                              value={userType}
                              onChange={(e) => setuserType(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 ">
                          <button
                            onClick={submitForm}
                            type="button"
                            className="btn btn-primary btn-lg"
                          >
                            Register
                          </button>
                        </div>

                        <div className="d-flex p-5">
                          <p
                            className="mb-5 pb-lg-2"
                            style={{ color: '#393f81;' }}
                          >
                            Already have an account?
                          </p>
                          <NavLink
                            classNameName="nav-link "
                            aria-current="page"
                            to="/"
                          >
                            <a href="#!" style={{ color: '#393f81;' }}>
                              Sign in
                            </a>
                          </NavLink>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      {/* <img src=""
                                                className="img-fluid" alt="Sample image" /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
