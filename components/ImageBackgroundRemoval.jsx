"use client";
import React, { useState } from "react";

const ImageBackgroundRemoval = ({ capturedImage }) => {
  const [processedImage, setProcessedImage] = useState("");

  const handleBackgroundRemoval = async () => {
    // Make a request to the background removal service or perform image processing logic
    // Set the processed image using setProcessedImage
    try {
      const processedImage = await YourBackgroundRemovalFunction(capturedImage);
      setProcessedImage(processedImage);
    } catch (error) {
      console.error("Error during background removal:", error);
    }
  };

  return (
    <div>
      <img src={capturedImage} alt="Captured Object" />
      <button onClick={handleBackgroundRemoval}>Remove Background</button>

      {processedImage && (
        <img src={processedImage} alt="Object with Background Removed" />
      )}
    </div>
  );
};

export default ImageBackgroundRemoval;
