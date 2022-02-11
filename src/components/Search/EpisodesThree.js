import React, { useEffect, useState } from "react";
import SearchEpisodes from "../components/Search/SearchEpisodes";

export default function EpisodesTwo() {
  let [search, setSearch] = useState("");
  let [name, updateName] = useState("");
  let [episode, updateEpisode] = useState("");
  let [air_date, updateAirDate] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  

  let api = `https://rickandmortyapi.com/api/episode/?&name=${search}&episode=${episode}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center mb-3">Episodes</h1>
      <SearchEpisodes setSearch={setSearch} />
      <div className="container">
        <div className="row mb-3">
          <h1 className="text-center mb-3">
            Episode name :{" "}
            <span className="text-primary">{name === "" ? "Unknown" : name}</span>
          </h1>
          <h5 className="text-center">
            Air Date: {air_date === "" ? "Unknown" : air_date}
          </h5>
          <h5 className="text-center">
            Episode: {episode === "" ? "Unknown" : episode}
          </h5>
        </div>
      </div>
    </div>
  );
};
