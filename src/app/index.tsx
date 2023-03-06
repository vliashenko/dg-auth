import React, { useEffect } from "react";
import Routing from "pages/routes/ui/routes";
import { withProviders } from "./providers";
import { onAppLoaded } from "entities/session";
import "./index.css";

const App = () => {
  useEffect(() => {
    onAppLoaded();
  }, []);
  return <Routing />;
};

export default withProviders(App);
