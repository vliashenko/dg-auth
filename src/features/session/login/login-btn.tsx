import React from "react";
import { onLoginRequested } from "entities/session";
import { Button } from "shared/ui";

export const LoginButton = () => {
  return (
    <Button
      onClick={() => onLoginRequested()}
      sx={{ fontSize: "18px", px: 4, width: 300 }}
      variant="contained"
    >
      Sign In
    </Button>
  );
};
