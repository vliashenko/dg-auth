import React, { useEffect } from "react";
import Routing from "pages/routes/ui/routes";
import { withProviders } from "./providers";
import { onAppMounted } from "entities/session";
import "./index.css";

const App = () => {
  useEffect(() => {
    onAppMounted();
  }, []);
  return <Routing />;
};

export default withProviders(App);
