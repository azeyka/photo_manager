import React, { useRef, useState } from 'react'
import nanoid from 'nanoid';

function PhotoManager() {
    const fileRef = useRef();
    const [files, setFiles] = useState([]);

    const handleChange = (event) => {
        event.preventDefault();
        const newFiles = [];
        for (let file of fileRef.current.files) {
            if (file.type.includes('image')) {
                newFiles.push({id: nanoid(), name: file.name, url: URL.createObjectURL(file)})
            };
        };
        setFiles(prevFiles => [...prevFiles, ...newFiles]);
    }

    const deleteImg = (id) => {
        setFiles(prevFiles => prevFiles.filter(file => file.id !== id));
    };

    return (
        <div>
            <input name="files" type="file" ref={fileRef} onChange={handleChange} accept="image/*" multiple hidden/>
            <button onClick={() => fileRef.current.click()} id='select'>Click to select</button>

            <ul className='files'>
                {files.map(file =>
                    <li key={file.id}>
                        <img src={file.url} alt={file.name}/>
                        <button onClick={() => deleteImg(file.id)}>X</button>
                    </li>
                )}
            </ul>
        </div>
    )
};

export default PhotoManager

