import React from "react";
import star from "./Star 1.png";

function Product(props) {
  // props = props.item;
  console.log(props);
  return (
    <div className="relative" data-id={props.id}>
      {props.openSpots === 0 && (
        <p className="absolute bg-white m-2 px-4 badge">Sold out</p>
      )}
      <img src={`../images/${props.coverImg}`} alt={props.coverImg}></img>
      <div className="flex py-2 space-x-1">
        <img src={star}></img>
        <p>{props.rating}</p>
        <p>{props.reviewCount}</p>
        <p>{props.location}</p>
      </div>
      <div>
        <p>{props.title}</p>
        <p>
          <span>From ${props.price}</span>/person
        </p>
      </div>
    </div>
  );
}

export default Product;
