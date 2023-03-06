import React from "react";
import { onLogin } from "entities/session";
import { Button } from "shared/ui";

const LoginButton = () => {
  return (
    <Button
      onClick={() => onLogin()}
      sx={{ fontSize: "18px", px: 4, width: "300px" }}
      variant="contained"
    >
      Sign In
    </Button>
  );
};

export default LoginButton;
