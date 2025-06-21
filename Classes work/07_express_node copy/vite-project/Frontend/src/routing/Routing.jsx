import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreatePosts from '../pages/createpost/CURD'; 
import Dashboard from '../pages/dashboard/Dashboard';
import SignupForm from "../pages/signup/SignupForm.jsx";
import LoginForm from "../pages/login/LoginForm.jsx";
import ProtectedRoute from "../components/ProtectedRoutes/Protectedroutes.jsx"; // Ensure correct import

export default function Routing() {
  return (
    <div>
      <BrowserRouter>
        <div className="main-content">
          <div className="nav">
            {/* Navbar */}
          </div>

          <Routes>
            <Route path='/signup' element={<SignupForm />} />
            <Route path='/login' element={<LoginForm />} />

            {/* Protected Routes */}
            <Route path='/' element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />

            <Route path="/createpost" element={
              <ProtectedRoute>
                <CreatePosts />
              </ProtectedRoute>
            } />
          </Routes>

          <div className="footer">
            {/* Footer */}
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
