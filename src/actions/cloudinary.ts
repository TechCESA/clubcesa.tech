import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export const getImagesFromCloudinary = (category) => {
  return new Promise((resolve, reject) => {
    cloudinary.api.resources(
      { type: 'upload', prefix: `cesa/${category}`, max_results: 20 },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      },
    );
  });
};
