import React, { useState } from "react";
import AddPhoto from "./AddPhoto";
import PhotosListing from "./PhotosListing";
import Photo from "./Photo";

function PhotoManager() {
  const [files, setFiles] = useState([]);
  const [isPhotoOpened, setisPhotoOpened] = useState(false);
  const [openedPhoto, setopenedPhoto] = useState({});
  const [isAddTextShown, setisAddTextShown] = useState(true);

  return (
    <React.Fragment>
      <AddPhoto
        setFiles={setFiles}
        isAddTextShown={isAddTextShown}
        setisAddTextShown={setisAddTextShown}
      />
      <PhotosListing
        files={files}
        setFiles={setFiles}
        setisPhotoOpened={setisPhotoOpened}
        setopenedPhoto={setopenedPhoto}
        setisAddTextShown={setisAddTextShown}
      />
      <Photo
        isVisible={isPhotoOpened}
        file={openedPhoto}
        setisPhotoOpened={setisPhotoOpened}
      />
    </React.Fragment>
  );
}

export default PhotoManager;
