import React from "react";
import { Routing } from "pages/routes";
import { sessionModel } from "entities/session";
import "./index.css";

export const App: React.FC = () => {
  React.useEffect(() => {
    sessionModel.appMounted();
  }, []);
  return <Routing />;
};
