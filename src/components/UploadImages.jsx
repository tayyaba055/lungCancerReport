import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import axios from "axios";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const UploadImages = () => {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));
    setImages((prev) => [...prev, ...newImages]);
  };

  const handleRemoveImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    images.forEach((image) => formData.append("images", image.file));

    try {
      // const response = await axios.post("/api/upload", formData, {
      //   headers: { "Content-Type": "multipart/form-data" },
      // });
      // console.log("Upload successful:", response.data);

      // Navigate to correct path
      navigate("/imagesuccessfullmodal");
      console.log("hit");
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen">
      <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
        Upload Pictures to Check for Brain Tumor
      </h1>
      <div className="w-1/2 p-6 bg-white border rounded-lg shadow-lg">
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageChange}
          className="block w-full mb-4 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border file:rounded-lg file:border-gray-300 file:text-sm file:bg-gray-50 hover:file:bg-gray-100"
        />
        <div className="grid grid-cols-3 gap-2 ">
          {images.map((image, index) => (
            <div key={index} className="relative h-36 w-36 ">
              <img
                src={image.url}
                alt="preview"
                className="object-cover w-full h-full rounded-md"
              />
              <button
                className="absolute top-0 right-0 p-1 text-xs text-white bg-red-500 rounded-full"
                onClick={() => handleRemoveImage(index)}
              >
                <FaTimes />
              </button>
            </div>
          ))}
        </div>
        {images.length > 0 && (
          <button
            onClick={handleSubmit}
            className="w-full py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Upload Images
          </button>
        )}
      </div>
    </main>
  );
};

UploadImages.propTypes = {
  children: PropTypes.node,
};

export default UploadImages;
