import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from "./components/searchbar";

import YTSearch from "youtube-api-search";

const API_KEY = 'AIzaSyCyFh_8n1hKjU2tFVyVVArpK9OLgtTPZ4c';

YTSearch({key: API_KEY, term: 'surfboards'}), function (data) {
    console.log(date);
}

const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector(".container"));