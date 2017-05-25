import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCyFh_8n1hKjU2tFVyVVArpK9OLgtTPZ4c';

const App = () => {
    return (
    <div>
        <SearchBar/>
    </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));