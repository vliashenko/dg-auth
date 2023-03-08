import React from "react";
import { ProfilePage } from "./profile-page";
import { Route, Routes, Navigate } from "react-router-dom";
import { paths } from "shared/config/paths";

export const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path={paths.root} element={<ProfilePage />} />;
      <Route path="*" element={<Navigate to={paths.root} />} />
    </Routes>
  );
};
