import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // useEffect(()=>{
  //     alert("this is me");
  // })

  const userlogin = async () => {
    let user = { username, password };
    console.log(user);

    let x = [];
    x.push('true');
    console.log(x);
    localStorage.setItem('loginDone', JSON.stringify(x));

    // stroing username in localstorage
    let y = [];
    y.push(username);
    console.log(y);
    localStorage.setItem('userdata', JSON.stringify(y));

    // let x = ((username[0]).toUpperCase());
    // let y = [];
    // y.push(x);
    // console.log(y);
    // localStorage.setItem("userdata", JSON.stringify(y));

    let result = await fetch('http://localhost:8000/user/login', {
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
      <section className="vh-100" style={{ backgroundColor: '#9A616D' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: '1rem' }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: '1rem 0 0 1rem' }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i
                            className="fas fa-cubes fa-2x me-3"
                            style={{ color: '#ff6219' }}
                          ></i>
                          <span className="h1 fw-bold mb-0">Logo</span>
                        </div>

                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: '1px' }}
                        >
                          Sign into your account
                        </h5>

                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form2Example17"
                          >
                            Username{' '}
                          </label>
                          <input
                            type="email"
                            id="form2Example17"
                            autoComplete="username"
                            className="form-control form-control-lg"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form2Example27"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            id="form2Example27"
                            autoComplete="current-password"
                            className="form-control form-control-lg"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>

                        <div className="pt-1 mb-4">
                          <NavLink
                            className="nav-link "
                            aria-current="page"
                            to="/"
                          >
                            <button
                              onClick={userlogin}
                              className="btn btn-dark btn-lg btn-block"
                              type="button"
                            >
                              Login
                            </button>
                          </NavLink>
                        </div>

                        <a className="small text-muted" href="#!">
                          Forgot password?
                        </a>
                        <div className="d-flex">
                          <p
                            className="mb-5 pb-lg-2 "
                            style={{ color: '#393f81' }}
                          >
                            Don't have an account?
                          </p>
                          <NavLink
                            className="nav-link "
                            aria-current="page"
                            to="/signup"
                          >
                            <a href="#!" style={{ color: '#393f81' }}>
                              Register here
                            </a>
                          </NavLink>
                        </div>
                        <a href="#!" className="small text-muted">
                          Terms of use.
                        </a>
                        <a href="#!" className="small text-muted">
                          Privacy policy
                        </a>
                      </form>
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

export default Login;
