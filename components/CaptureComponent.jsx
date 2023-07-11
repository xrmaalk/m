"use client";
import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

const CaptureComponent = ({ onCapture }) => {
  const webcamRef = useRef(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);

  const capture = () => {
    const imageData = webcamRef.current.getScreenshot();
    if (imageData) {
      saveImageToDevice(imageData);
      setCapturedImage(imageData); // Set the captured image
      setIsCapturing(false);
    }
  };

  const startCapture = () => {
    setIsCapturing(true);
  };

  const cancelCapture = () => {
    setIsCapturing(false);
  };

  const saveImageToDevice = (imageData) => {
    const link = document.createElement("a");
    link.href = imageData;
    link.download = "captured_image.jpeg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {isCapturing ? (
        <div>
          <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
          <button className="mt-2" onClick={capture}>
            Capture
          </button>
          <button className="mt-2 pl-9" onClick={cancelCapture}>
            Cancel
          </button>
        </div>
      ) : (
        <div>
          <button className="mt-2" onClick={startCapture}>
            Capture Image
          </button>
          {capturedImage && (
            <img className="mt-2" src={capturedImage} alt="Captured" />
          )}{" "}
        </div>
      )}
    </div>
  );
};

export default CaptureComponent;
