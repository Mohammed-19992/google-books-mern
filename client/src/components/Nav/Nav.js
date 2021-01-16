import React from 'react';
import "./nav.css";
import {Link} from "react-router-dom";




function Nav() {

    return (
  

/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
      <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
      <Link className="nav-link" to="/saved">Selected</Link>
      </li>
     
    </ul>
  </div>
</nav>
    )
} */

<div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link className="navbar-brand" to="/">Google Books</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle Navigation"
        ></button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <button className="nav-item btn btn-light mb-0 mr-3">
                <Link to="/" id="color">
                  Search Books <span className="sr-only">(current)</span>
                </Link>
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-item btn btn-light mb-0 text-white">
                <Link to="/saved" id="color">Saved Books</Link>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
