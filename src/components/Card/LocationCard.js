import React from "react";
import styles from "./Card.module.scss";

const EpisodeCard = ({ results }) => {
  let display;

  if (results) {
    display = results.map((x) => {
      let { id, name, type, dimension, residents, created } = x;

      return (
        <div
          key={id}
          className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
        >
          <div
            className={`${styles.card} d-flex flex-column justify-content-center`}
          >
            <div className={`${styles.content}`}>
              <div className="fs-5 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6 fw-normal">Type:</div>
                <div className="fs-5">{type}</div>
                <div className="fs-6 fw-normal">Dimension:</div>
                <div className="fs-5">{dimension}</div>
                <div className="fs-6 fw-normal">Residents:</div>
                <div className="fs-5">{residents.length}</div>
                <div className="fs-6 fw-normal">Created on:</div>
                <div className="fs-5">{created}</div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  } else {
    display = "No Episodes Found :/";
  }

  return <>{display}</>;
};

export default EpisodeCard;