import React from "react";
import PropTypes from "prop-types";

function Photo(props) {
  const { isVisible, file, setisPhotoOpened } = props;

  const closePhoto = () => setisPhotoOpened(false);

  return (
    <div
      className="shadow"
      style={{ display: isVisible ? "block" : "none" }}
      onClick={closePhoto}
    >
      <img
        className="photo"
        src={file.url}
        style={{ marginTop: window.pageYOffset + window.outerHeight * 0.05 }}
        alt={file.name}
      ></img>
    </div>
  );
}

Photo.propTypes = {
  isVisible: PropTypes.bool,
  file: PropTypes.object,
  setisPhotoOpened: PropTypes.func
};

export default Photo;
