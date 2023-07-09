"use client";
import React, { useState } from "react";

const ImageBackgroundRemoval = ({ capturedImage }) => {
  const [processedImage, setProcessedImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleBackgroundRemoval = async () => {
    try {
      setLoading(true);

      const response = await fetch("https://api.remove.bg/v1.0/removebg", {
        method: "POST",
        headers: {
          "Projectify-api-key-001": "L9uZZghy5Sq1GRatPBcAeW18",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image_url: capturedImage }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.errors[0].title);
      }

      setProcessedImage(data.result);
    } catch (error) {
      console.error("Background removal error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleBackgroundRemoval} disabled={loading}>
        {loading ? "Processing..." : "Remove Background"}
      </button>

      {processedImage ? (
        <img src={processedImage} alt="Processed Image" />
      ) : (
        <p>Capture Image then Click Remove Background to begin.</p>
      )}
    </div>
  );
};

export default ImageBackgroundRemoval;
