import React, {Component} from 'react'

import TabItem from 'tab-item'

class List extends Component{
    constructor(props){
        super(props);
        this.state({
            item:'home'
        })
    }

    render() {
        return (
                <ul className="nav navbar-nav">
                    <TabItem content = "classes"/>
                    <TabItem content = "races"/>
                </ul>
        )
    }
}

export default List;




