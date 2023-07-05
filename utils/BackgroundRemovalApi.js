const express = require("express");
const multer = require("multer");
const removeBg = require("remove.bg");

const app = express();
const upload = multer({ dest: "uploads/" });

// Configure remove.bg API credentials
removeBg.configure({
  apiKey: BG_Remove_API,
});

// API endpoint for background removal
app.post("/remove-background", upload.single("image"), async (req, res) => {
  try {
    const imagePath = req.file.path;

    // Perform background removal using remove.bg library
    const result = await removeBg.fromFile(imagePath);

    if (result.statusCode !== 200) {
      throw new Error("Failed to process image. Please try again.");
    }

    // Send the processed image URL in the response
    res.json({ processedImageUrl: result.result.dest });
  } catch (error) {
    console.error(error);
    // Handle error appropriately (e.g., send error response)
    res.status(500).json({ error: "Failed to process image." });
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
