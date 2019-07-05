import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
      <a className="navbar-brand h5" href="/">Google Books</a>
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link h5" href="/searchbooks">Search</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link h5" href="/savedbooks">Saved</a>
          </li>
        </ul>
    </nav>
  );
}

export default Nav;
