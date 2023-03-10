import React from "react";
import { Routing } from "pages/routing";
import { sessionModel } from "entities/session";

export const App: React.FC = () => {
  React.useEffect(() => {
    sessionModel.appMounted();
  }, []);
  return <Routing />;
};
