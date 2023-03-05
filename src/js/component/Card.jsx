import propTypes from "prop-types";
import React from "react";

const Card = (props) => {

    return(
        <>
<div className="card m-5  text-center border" >
  <img className="card-img-top" src={props.image} alt="Card image cap" />
  <div className="card-body ">
    <h5 className="card-title mt-4">{props.title}</h5>
    <p className="card-text  mt-5">{props.description}</p>
    <a href={props.buttonUrl}className="btn btn-dark mb-2">{props.buttonLabel}</a>
  </div>
</div>
        </>
    )
}; 

Card.prototype= {
  image: propTypes.string,
  title: propTypes.string,
  description: propTypes.string,
  buttonUrl: propTypes.string,
  buttonLabel: propTypes.string,
}
export default Card;