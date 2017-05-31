import React, {Component} from 'react'
import banner from './images/other/dnd_logo_banner.png'
import List from './tabs'

class Header extends Component {

    constructor(props){
      super(props);
      this.state = { term: 'home'}
    }

    render() {

        return (
            <div className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#bs-nav-jonas" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">
                                DndMe
                            </a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-nav-jonas">
                            <List/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;