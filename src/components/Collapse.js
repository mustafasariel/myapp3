import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";

const Collapse = (props) => {
  console.log(props.children)
  return (
    <div >
      <a
        className="btn btn-primary w-100"
        data-bs-toggle="collapse"
        href={"#".concat(props.href)}
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        {props.name}
      </a>

      <div className="collapse show" id={props.href}>
        {props.children}

      </div>
    </div>

  );
};

export default Collapse;
