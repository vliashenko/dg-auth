import { createAuth0Client } from "@auth0/auth0-spa-js";
import { auth0Config } from "shared/config";
import { SessionUser } from "./types";

const whenAuth0Client = createAuth0Client(auth0Config);

export const logout: () => Promise<void> = async () => {
  const auth0Client = await whenAuth0Client;

  await auth0Client.logout();
};

export const getCurrentUser: () => Promise<SessionUser> = async () => {
  const auth0Client = await whenAuth0Client;
  const isAuth = await auth0Client.isAuthenticated();

  if (isAuth) {
    return getUser();
  }

  if (isRedirected()) {
    await auth0Client.handleRedirectCallback();
    return getUser();
  }

  await auth0Client.loginWithRedirect();

  throw new Error("Auth error");
};

const getUser = async (): Promise<SessionUser> => {
  const auth0Client = await whenAuth0Client;
  const user = await auth0Client.getUser();

  return {
    nickName: user?.nickname || "",
  };
};

const isRedirected = () => {
  const query = window.location.search;

  return query.includes("code=") && query.includes("state=");
};
