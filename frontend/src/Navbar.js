import React from 'react';

const Navbar = () => {
  // task for me: change the about page and name it home, make another page for about
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          <a className="navbar-brand" href="/">CodeNext</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
            <a className="nav-link active" aria-current="page" href="/About">About</a>
              <a className="nav-link active" aria-current="page" href="/Login">Login</a>
              <a className="nav-link active" aria-current="page" href="/Register">Register</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
