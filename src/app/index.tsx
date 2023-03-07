import React from "react";
import { Routing } from "pages/routes";
import { withProviders } from "./providers";
import { sessionModel } from "entities/session";
import "./index.css";

const App: React.FC = () => {
  React.useEffect(() => {
    sessionModel.appMounted();
  }, []);
  return <Routing />;
};

export default withProviders(App);
