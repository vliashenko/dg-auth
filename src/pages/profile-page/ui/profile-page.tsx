import React from "react";
import { useStore } from "effector-react";

import { sessionModel } from "entities/session";

import { Container, Typography } from "shared/ui";
import { LogoutButton } from "features/session";

export const ProfilePage: React.FC = () => {
  const user = useStore(sessionModel.$user);
  const loading = useStore(sessionModel.getUserFx.pending);

  if (loading) {
    return (
      <Container
        sx={{
          height: "100vh",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          gap: "20px",
        }}
      >
        <Typography variant="h4">Loading...⏳</Typography>
      </Container>
    );
  }

  return (
    <Container
      sx={{
        height: "100vh",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        gap: "20px",
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
