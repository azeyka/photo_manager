import React, { useRef } from "react";
import nanoid from "nanoid";
import PropTypes from "prop-types";

function AddPhoto(props) {
  const { setFiles, isAddTextShown, setisAddTextShown } = props;
  const fileRef = useRef();

  const handleChange = event => {
    event.preventDefault();
    const newFiles = [];
    for (let file of fileRef.current.files) {
      if (file.type.includes("image")) {
        newFiles.push({
          id: nanoid(),
          name: file.name,
          url: URL.createObjectURL(file)
        });
      }
    }
    setFiles(prevFiles => [...prevFiles, ...newFiles]);
    setisAddTextShown(false);
  };

  return (
    <>
      <input
        name="files"
        type="file"
        ref={fileRef}
        onChange={handleChange}
        accept="image/*"
        multiple
        hidden
      />
      <button onClick={() => fileRef.current.click()} id="select">
        {isAddTextShown ? (
          <p>
            <i className="material-icons">add_circle_outline</i>
            <span> Кликните в пустое поле чтобы добавить изображение</span>
          </p>
        ) : (
          ""
        )}
      </button>
    </>
  );
}

AddPhoto.propTypes = {
  setFiles: PropTypes.func,
  isAddTextShown: PropTypes.bool,
  setisAddTextShown: PropTypes.func
};

export default AddPhoto;
