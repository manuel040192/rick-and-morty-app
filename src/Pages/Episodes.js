import React, { useEffect, useState } from "react";
import EpisodeCard from "../components/Card/EpisodeCard";
import Pagination from "../components/Pagination/Pagination";
import SearchEpisodes from "../components/Search/SearchEpisodes";

const Episodes = () => {
  let [search, setSearch] = useState("");
  let [pageNumber, updatePageNumber] = useState(1);
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;
  

  let api = `https://rickandmortyapi.com/api/episode/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center mb-3">Episodes</h1>
      <SearchEpisodes setSearch={setSearch} updatePageNumber={updatePageNumber} />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12">
            <div className="row">
              <EpisodeCard page="/" results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber}
      />
    </div>
  );
};

export default Episodes;
