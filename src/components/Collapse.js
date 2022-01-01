import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";

const Collapse = (props) => {
    console.log(props.children)
  return (
    <div className="col-md-03">
      <a
        className="btn btn-primary"
        data-bs-toggle="collapse"
        href= {"#".concat(props.href)}
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        {props.name}
      </a>

      <div  className="collapse" id={props.href}>
        <div className="card card-body">
          
          {props.children}
         
        </div>
      </div>
    </div>
  );
};

export default Collapse;
