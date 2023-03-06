import React from "react";
import { onLogout } from "entities/session";
import { Button } from "shared/ui";

const LogoutButton = () => {
  return (
    <Button
      onClick={() => onLogout()}
      sx={{ fontSize: "18px", px: 4, width: "300px" }}
      variant="contained"
    >
      Sign Out
    </Button>
  );
};

export default LogoutButton;
