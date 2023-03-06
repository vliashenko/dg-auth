import React, { FC } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { paths } from "shared/config/paths";

const Routing: FC = () => {
  return (
    <Routes>
      {paths.map(({ component: Comp, key, path }) => {
        return <Route path={path} key={key} element={<Comp />} />;
      })}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Routing;
