/**
 * Created by crauwjo on 2/06/2017.
 */
import React, {Component} from 'react'

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = { term: 'surfboards'}
    }

    render(){
        return  (
            /* value of element is state, whenever state changes, input renders with new state value */
            <div>
                <input
                    value={this.state.term}
                    onChange={event => this.setState({term: event.target.value})}/>
            </div>
        )
    }
}

export default SearchBar;