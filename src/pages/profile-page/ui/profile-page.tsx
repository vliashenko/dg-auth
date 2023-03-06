import React from "react";
import { useStore } from "effector-react";

import * as sessionModel from "entities/session";

import { LoginButton } from "features/session/login";
import { LogoutButton } from "features/session/logout";

import { Container, Typography } from "shared/ui";

const ProfilePage = () => {
  const isAuth = useStore(sessionModel.$auth);
  const user = useStore(sessionModel.$user);
  const loading = useStore(sessionModel.isAuthenticatedFx.pending);

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
      {isAuth && user ? (
        <>
          <Typography variant="h4">Hello, {user.nickname}!</Typography>

          <LogoutButton />
        </>
      ) : (
        <>
          <Typography variant="h4">
            Hi! Please Sign Up to continue 👨🏻‍💻
          </Typography>

          <LoginButton />
        </>
      )}
    </Container>
  );
};

export default ProfilePage;
