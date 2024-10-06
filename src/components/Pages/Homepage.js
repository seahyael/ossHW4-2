import React from "react";
import CRUDImage from './CRUD.png';

const Homepage = () => {
  return (
    <>
      <div id="demo" className="homepage slide" data-bs-ride="homepage">
        <div className="homepage-indicators">
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="2"
          ></button>
        </div>

        <div className="homepage-inner">
          <div className="homepage-item active">
            <img src = {CRUDImage}></img>
          </div>
        </div>

        <button
          className="homepage-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span className="homepage-control-prev-icon"></span>
        </button>
        <button
          className="homepage-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span className="homepage-control-next-icon"></span>
        </button>
      </div>
    </>
  );
};

export default Homepage;
