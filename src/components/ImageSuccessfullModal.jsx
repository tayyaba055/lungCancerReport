import { Link } from "react-router-dom";

const ImageSuccessfullModal = () => {
  return (
    <div className="relative flex items-center justify-center min-h-[80vh] bg-blue-100">
      <div className="p-6 text-center bg-white rounded-lg shadow-lg w-96">
        <h2 className="mb-2 text-2xl font-semibold text-gray-800">
          Thank You for Uploading!
        </h2>
        <p className="mb-4 text-gray-600">
          Your picture has been uploaded successfully.
        </p>
        <Link
          to="/clientdetailsform"
          className="px-4 py-2 text-lg text-white transition bg-red-500 rounded-md hover:bg-red-600"
        >
          Get Your Result
        </Link>
      </div>
    </div>
  );
};

export default ImageSuccessfullModal;
