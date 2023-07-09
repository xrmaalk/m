import React from "react";
import CaptureComponent from "@/components/CaptureComponent";
import ImageBackgroundRemoval from "@/components/ImageBackgroundRemoval";

const Start = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-2 pb-4">
      <span>
        <CaptureComponent />
        <ImageBackgroundRemoval />
      </span>
    </div>
  );
};

export default Start;
