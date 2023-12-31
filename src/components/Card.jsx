import React from "react";

export default function Card(props) {
  return (
    <div className="place--cont">
      <div className="left--cont">
        <img
          src={props.details.imageUrl}
          alt="errod loading"
          className="left--image"
        />
      </div>
      <div className="right--cont">
        <div className="first--location">
          <img src={props.point} alt="" className="location--image" />
          <span className="city--name">{props.details.location}</span>
          <a className="map--link" href={props.details.googleMapsUrl}>
            지도 보기
          </a>
        </div>
        <div className="heading--part">
          <h1 className="mane--h1">{props.details.title}</h1>
        </div>
        <div className="content--part">
          <h4>
            {props.details.startDate} - {props.details.endDate}
          </h4>
          <p>{props.details.description}</p>
        </div>
      </div>
    </div>
  );
}
