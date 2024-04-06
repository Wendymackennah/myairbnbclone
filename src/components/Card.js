import React from "react";

export default function Card(props) {
let badgeText 
if(props.openSpots ===0){
badgeText= "SOLDOUT"
}
else if (props.location === "online"){
  badgeText="ONLINE"
}

}





  return (
    <div className="card"> 
      {badgeText&& <div className="card--badge">
      {badgeText}
      </div>
    }

      <img
        src={`../images/{props.img}`}
        className="card--image"
        alt="Main card image"
      />
      <div className="card--stats">
        <img src="../images/star.png" className="card--star" alt="staricon" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount})</span>
        <span className="gray"> {props.country}</span>
      </div>
      <h2>{props.title}</h2>
      <p>
        <span className="bold">From ${props.price}</span>/person{" "}
      </p>
    </div>
  );
}
