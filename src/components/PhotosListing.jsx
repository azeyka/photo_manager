import React from "react";
import PropTypes from "prop-types";

function PhotosListing(props) {
  const {
    files,
    setFiles,
    setopenedPhoto,
    setisPhotoOpened,
    setisAddTextShown
  } = props;

  const deletePhoto = id => {
    setFiles(prevFiles => prevFiles.filter(file => file.id !== id));
    if (files.length <= 1) setisAddTextShown(true);
  };

  const deleteAll = () => {
    setFiles([]);
    setisAddTextShown(true);
  };

  const openPhoto = file => {
    setisPhotoOpened(true);
    setopenedPhoto(file);
  };

  return (
    <>
      <button
        className="delete_all_btn"
        style={{ display: files.length > 0 ? "inline" : "none" }}
        onClick={deleteAll}
      >
        Удалить все
      </button>
      <ul className="files">
        {files.map(file => (
          <li key={file.id}>
            <img
              src={file.url}
              alt={file.name}
              onClick={() => openPhoto(file)}
            />
            <button
              className="delete_img_btn material-icons"
              onClick={() => deletePhoto(file.id)}
            >
              clear
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

PhotosListing.propTypes = {
  files: PropTypes.array,
  setFiles: PropTypes.func,
  setopenedPhoto: PropTypes.func,
  setisPhotoOpened: PropTypes.func,
  setisAddTextShown: PropTypes.func
};

export default PhotosListing;
