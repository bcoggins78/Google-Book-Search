import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand h5" href="/">Google Books</a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link h5" href="/searchbooks">Search</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link h5" href="#">|</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link h5" href="/savedbooks">Saved</a>
          </li>
         
        </ul>
  </div>
</nav>
      );
    }
    
    export default Nav;
