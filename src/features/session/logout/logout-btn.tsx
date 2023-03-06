import React from "react";
import { onLogoutRequested } from "entities/session";
import { Button } from "shared/ui";

export const LogoutButton = () => {
  return (
    <Button
      onClick={() => onLogoutRequested()}
      sx={{ fontSize: "18px", px: 4, width: 300 }}
      variant="contained"
    >
      Sign Out
    </Button>
  );
};
