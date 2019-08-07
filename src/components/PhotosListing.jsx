import React from 'react';
import PropTypes from 'prop-types';


function PhotosListing(props) {
    const {files, setFiles} = props;

    const deleteImg = (id) => {
        setFiles(prevFiles => prevFiles.filter(file => file.id !== id));
    };

    return (
        <ul className='files'>
            {files.map(file =>
                <li key={file.id}>
                    <img src={file.url} alt={file.name}/>
                    <button onClick={() => deleteImg(file.id)}>X</button>
                </li>
            )}
        </ul>
    )
};

PhotosListing.propTypes = {
    files: PropTypes.array, 
    setFiles: PropTypes.func
};

export default PhotosListing;

