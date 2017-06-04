import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchbar';
import Videolist from './components/videolist';

import YTSearch from "youtube-api-search";

const API_KEY = 'AIzaSyCyFh_8n1hKjU2tFVyVVArpK9OLgtTPZ4c';

//  JONAS-- TESTING STATE MANIPULATION
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {videos: [], search: ''};

        YTSearch({key: API_KEY, term: 'surfing'}), (videos, term) => {
            this.setState({videos});
            this.setState({search:term});
        }

    }

    render() {
        return (
            <div>
                <SearchBar/>
                <Videolist videos={this.state.videos} search={this.state.search}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector(".container"));