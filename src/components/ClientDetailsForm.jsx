import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ClientDetailsForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    fatherName: "",
    cnic: "",
    gender: "",
  });

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false); // State for loading

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const authToken = localStorage.getItem("authToken");

    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BASEURL}/users/update-user-details`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      toast.success(response.data.message || "Details updated successfully!");
      navigate("/finalreportform");
      setFormData({
        firstName: "",
        lastName: "",
        fatherName: "",
        cnic: "",
        gender: "",
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update details");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <div className="p-6 bg-white rounded-lg shadow-lg w-96">
        <h1 className="mb-4 text-xl font-semibold text-center text-gray-700">
          Patient Details
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-semibold">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-semibold">
              Father&apos;s Name
            </label>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-semibold">CNIC</label>
            <input
              type="text"
              name="cnic"
              value={formData.cnic}
              onChange={handleChange}
              pattern="\d{5}-\d{7}-\d{1}"
              placeholder="12345-1234567-1"
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-semibold">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2 text-white transition bg-red-500 rounded-md hover:bg-red-600 disabled:bg-gray-400"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ClientDetailsForm;
