"use client";
import CaptureComponent from "@/components/CaptureComponent";
import ImageBackgroundRemoval from "@/components/ImageBackgroundRemoval";
import React from "react";

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
