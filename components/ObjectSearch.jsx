import React, { useState } from "react";
import axios from "axios";

function ObjectSearch() {
  const [image, setImage] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [description, setDescription] = useState("");
  const [shouldAdd, setShouldAdd] = useState(false);

  const searchImage = async () => {
    // Make a request to the backend to search for the image
    const response = await axios.post("/api/searchImage", { image });

    if (response.data.found) {
      setImageData(response.data.imageData);
    } else {
      setShouldAdd(true);
    }
  };

  const addImageToDatabase = async () => {
    // Send a request to the backend to add the image and description
    await axios.post("/api/addImage", { image, description });
    setShouldAdd(false);
    setImage(null);
    setDescription("");
  };

  if (shouldAdd) {
    return (
      <div>
        <p>Image not found. Would you like to add it to the database?</p>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description"
        />
        <button onClick={addImageToDatabase}>Add to Database</button>
      </div>
    );
  }

  return (
    <div>
      {imageData && <img src={imageData.src} alt={imageData.alt} />}
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button onClick={searchImage}>Search Image</button>
    </div>
  );
}

export default ObjectSearch;
