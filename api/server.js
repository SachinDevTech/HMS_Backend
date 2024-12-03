import app from "../app.js";
import cloudinary from "cloudinary";
// import { VercelRequest, VercelResponse } from "@vercel/node"; // Optional, for better typing

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// app.listen(process.env.PORT || 3000, () => {
//   console.log(`Server listening at port ${process.env.PORT}`);
// });  // needed for serverless architechture

// Vercel serverless function handler
export default function handler(req, res) {
  app(req, res); // Handle incoming requests with Express
}
