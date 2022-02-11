import React from "react";
import styles from "./Card.module.scss";

const EpisodeCard = ({ results }) => {
  let display;

  if (results) {
    display = results.map((x) => {
      let { id, name, air_date, episode, characters } = x;

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
                <div className="fs-6 fw-normal">Air Date:</div>
                <div className="fs-5">{air_date}</div>
                <div className="fs-6 fw-normal">Episode:</div>
                <div className="fs-5">{episode}</div>
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        + info
                      </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse hide" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        Number of characters that appeared on the episode: {characters.length}
                      </div>
                    </div>
                  </div>
                </div>
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
