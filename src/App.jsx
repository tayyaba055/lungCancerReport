// src/App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Features from "./pages/Features";
import About from "./pages/About";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import ImageSuccessfullModal from "./components/ImageSuccessfullModal";
import ClientDetailsForm from "./components/ClientDetailsForm";
import FinalReportForm from "./components/BrainTumorReport";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/features" element={<Features />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/services"
              element={
                <ProtectedRoute>
                  <Services />
                </ProtectedRoute>
              }
            />
            <Route
              path="/imagesuccessfullmodal"
              element={
                <ProtectedRoute>
                  <ImageSuccessfullModal />
                </ProtectedRoute>
              }
            />
            <Route
              path="/clientdetailsform"
              element={
                <ProtectedRoute>
                  <ClientDetailsForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/finalreportform"
              element={
                <ProtectedRoute>
                  <FinalReportForm />
                </ProtectedRoute>
              }
            />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
