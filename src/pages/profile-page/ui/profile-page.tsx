import React from "react";
import { useStore } from "effector-react";

import { sessionModel } from "entities/session";

import { Container, Typography } from "shared/ui";
import { LogoutButton } from "features/session";

export const ProfilePage: React.FC = () => {
  const user = useStore(sessionModel.$user);

  return (
    <Container
      sx={{
        height: "100vh",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        gap: 20,
      }}
    >
      {user ? (
        <>
          <Typography variant="h4">Hello, {user.nickName}!</Typography>

          <LogoutButton />
        </>
      ) : (
        <>
          <Typography variant="h4">
            Hi! Please wait a second for authorization 👨🏻‍💻
          </Typography>
        </>
      )}
    </Container>
  );
};
