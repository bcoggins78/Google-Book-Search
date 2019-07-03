import React from "react";
import "./style.css";

// Container that holds the PictureCards
function Wrapper(props) {
  return (
    <div className="container card-holder">
      <div className="row">{props.children}</div>
    </div>
  )
}

export default Wrapper;