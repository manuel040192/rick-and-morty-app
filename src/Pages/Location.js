import React, { useEffect, useState } from "react";
import LocationCard from "../components/Card/LocationCard";
import Pagination from "../components/Pagination/Pagination";
import SearchLocations from "../components/Search/SearchLocations";

const Location = () => {
  let [search, setSearch] = useState("");
  let [pageNumber, updatePageNumber] = useState(1);
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;
  

  let api = `https://rickandmortyapi.com/api/location/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center mb-3">Locations</h1>
      <SearchLocations setSearch={setSearch} updatePageNumber={updatePageNumber} />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12">
            <div className="row">
              <LocationCard page="/" results={results} />
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

export default Location;
