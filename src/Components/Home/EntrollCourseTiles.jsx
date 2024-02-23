import React from 'react';
import {courseBook} from "../../Constant/svgs";

const EntrollCourseTiles = (props) => {
    const {heading,price} = props;

    return (
        <div className="courseTiles">
            <div className="tilesText">
                <h6>{heading}</h6>
                <p>{price}</p>
            </div>
            {courseBook}
        </div>
    );
}

export default EntrollCourseTiles