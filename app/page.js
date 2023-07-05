"use client";
import React, { useState } from "react";
import CaptureComponent from "@/components/CaptureComponent";
import BackgroundRemovalComponent from "@/components/ImageBackgroundRemoval";

const Start = () => {
  const [objectCaptured, setObjectCaptured] = useState(null);
  const [objectWithBackgroundRemoved, setObjectWithBackgroundRemoved] =
    useState(null);

  const handleCapture = (imageData) => {
    setObjectCaptured(imageData);
  };

  const handleBackgroundRemoval = async () => {
    // Assuming you have a Background Removal component that accepts an image and returns the image with the background removed
    const processedImage = await BackgroundRemovalComponent(objectCaptured);
    setObjectWithBackgroundRemoved(processedImage);
  };

  return (
    <div>
      {objectCaptured ? (
        <>
          <img src={objectCaptured} alt="Captured Object" />
          <button onClick={handleBackgroundRemoval}>Remove Background</button>
        </>
      ) : (
        <CaptureComponent onCapture={handleCapture} />
      )}

      {objectWithBackgroundRemoved && (
        <img
          src={objectWithBackgroundRemoved}
          alt="Object with Background Removed"
        />
      )}
    </div>
  );
};

export default Start;
