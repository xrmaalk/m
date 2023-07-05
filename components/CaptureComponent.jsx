"use client";
import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

const CaptureComponent = ({ onCapture }) => {
  const webcamRef = useRef(null);
  const [isCapturing, setIsCapturing] = useState(false);

  const capture = () => {
    const imageData = webcamRef.current.getScreenshot();
    if (imageData) {
      onCapture(imageData);
    }
    setIsCapturing(false);
  };

  const startCapture = () => {
    setIsCapturing(true);
  };

  const cancelCapture = () => {
    setIsCapturing(false);
  };

  return (
    <div>
      {isCapturing ? (
        <div>
          <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
          <button onClick={capture}>Capture</button>
          <button onClick={cancelCapture}>Cancel</button>
        </div>
      ) : (
        <button onClick={startCapture}>Take Picture</button>
      )}
    </div>
  );
};

export default CaptureComponent;
