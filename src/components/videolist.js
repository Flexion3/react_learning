/**
 * Created by crauwjo on 2/06/2017.
 */
import React from 'react'

const Videolist = (props) => {
    return (
        <ul className="col-md-4 list-group">
            youtube videos found for {props.search}: {props.videos.length}
        </ul>
    );
};

export default  Videolist;