import React, {Component} from 'react'

class TabItem extends Component {
    constructor(props) {
        super(props);
        this.state ={
            active: 'f'
        }
    }

    handleClicked = () => {
        this.setState({active:'t'})
    }

    render() {
        return (
           <li>
               <a onclick={this.handleClicked()} href="#">{this.props.content}</a>
           </li>
        )
    }
}

export default TabItem;