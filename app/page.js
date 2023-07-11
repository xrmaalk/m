import React from "react";
import CaptureComponent from "@/components/CaptureComponent";
import ImageBackgroundRemoval from "@/components/ImageBackgroundRemoval";

const Start = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <span className="mt-9">
        <ImageBackgroundRemoval />
        <CaptureComponent />
      </span>
    </div>
  );
};

export default Start;
