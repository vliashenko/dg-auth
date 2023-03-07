import React from "react";
import { ProfilePage } from "pages/profile-page/ui";
import { Route, Routes, Navigate } from "react-router-dom";
import { paths } from "shared/config/paths";

export const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path={paths.path} key={paths.key} element={<ProfilePage />} />;
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
