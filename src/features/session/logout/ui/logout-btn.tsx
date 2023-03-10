import React from "react";
import { logoutModel } from "../model";
import { Button } from "shared/ui";

export const LogoutButton: React.FC = () => {
  return (
    <Button
      onClick={() => logoutModel.logoutRequested()}
      sx={{ fontSize: 18, px: 4, width: 300 }}
      variant="contained"
    >
      Sign Out
    </Button>
  );
};
