import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreatePosts from '../pages/createpost/CURD';
import Dashboard from '../pages/dashboard/Dashboard';
import CRUD from '../pages/CRUD_Test/CRUD.jsx';

export default function Routing() {
  return (
    <div>
      <BrowserRouter>
        <div className="main-content">
          <div className="nav">
            {/* Navbar */}
          </div>

          <Routes>
            {/* <Route path='/signup' element={<SignupForm />} />
            <Route path='/login' element={<LoginForm />} /> */}

            {/* Protected Routes */}
            <Route path='/' element={
              // <ProtectedRoute>
                <Dashboard />
              // </ProtectedRoute>
            } />

            <Route path="/createpost" element={
              // <ProtectedRoute>
                <CreatePosts />
              // </ProtectedRoute>
            } />

            <Route path="/showproducts" element={
              <CRUD />
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
