import React from "react";


const Card = (props) => {

    return (
       
            <div className="card">
            <img src={props.imageUrl} className="card-img-left"  alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{props.cardTitle}</h5>
                    <p className="card-text">{props.cardContent}</p>
                    <p className="card-text"><small className="text-muted">{props.cardFooter}</small></p>
                  
                </div>
            </div>
      
   

    );
};



export default Card;