import propTypes from "prop-types";
import React from "react";

const Card = (props) => {

    return(
        <>
         
  <div class="card text-center m-2">
    <img src={props.image} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{props.title}</h5>
      <p class="card-text">{props.description}</p>
    </div>
    <div class="card-footer">
    <a href={props.buttonUrl}className="btn btn-dark ">{props.buttonLabel}</a>
    </div>
  </div>
 
   
        </>
    );
}; 

Card.prototype= {
  image: propTypes.string,
  title: propTypes.string,
  description: propTypes.string,
  buttonUrl: propTypes.string,
  buttonLabel: propTypes.string,
}
export default Card;