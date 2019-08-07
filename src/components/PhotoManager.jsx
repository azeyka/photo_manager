import React, { useState } from 'react'
import AddPhoto from './AddPhoto';
import PhotosListing from './PhotosListing';


function PhotoManager() {
    const [files, setFiles] = useState([]);

    return (
        <React.Fragment>
            <AddPhoto setFiles={setFiles}/>
            <PhotosListing files={files} setFiles={setFiles}/>
        </React.Fragment>
    )
};

export default PhotoManager

