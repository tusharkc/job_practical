import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Todo,
  UserDetail,
  UserListing,
  UserLogin,
  UserRegistration,
} from "../features";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<UserRegistration />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/user-listing" element={<UserListing />} />
      <Route path="/user/:id/todo" element={<Todo />} />
      <Route path="/user/:id/user-detail" element={<UserDetail />} />
    </Routes>
  );
};

export default AppRoutes;
