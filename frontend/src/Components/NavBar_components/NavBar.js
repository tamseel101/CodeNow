import React from "react";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
  //   <Navbar bg="secondary" variant="dark" fixed="top">
  //   <Container>
  //     <Nav className="m-auto">
  //       <Nav.Link href="#Home">HOME</Nav.Link>
  //       <Nav.Link href="#Roadmap">PERSONAL ROADMAP</Nav.Link>
  //       <Nav.Link href="#PreQuiz">PRE-QUIZ</Nav.Link>
  //       <Nav.Link href="#Interview">MOCK INTERVIEW</Nav.Link>
  //     </Nav>
  //   </Container>
  // </Navbar>
  <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          <a className="navbar-brand" href="/">CodeNext</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/Dashboard">Dashboard</a>
              <a className="nav-link active" aria-current="page" href="/PreQuiz">Pre-Quiz</a>
              <a className="nav-link active" aria-current="page" href="/Mockinterview">Mock Interview</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;