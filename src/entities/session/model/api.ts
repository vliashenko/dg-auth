import { createAuth0Client } from "@auth0/auth0-spa-js";
import { auth } from "shared/config";
import { User } from "./types";

const auth0 = await createAuth0Client(auth);

export const login: () => Promise<void> = async () => {
  try {
    await auth0.loginWithRedirect();
  } catch (err) {
    return Promise.reject(new Error("Authentication failed"));
  }
};

export const logout: () => Promise<void> = async () => {
  try {
    await auth0.logout();
  } catch (err) {
    return Promise.reject(new Error("Sign out failed"));
  }
};

export const getAuthStatus: () => Promise<boolean> = async () => {
  try {
    const isAuth = await auth0.isAuthenticated();

    if (!isAuth) {
      await auth0.handleRedirectCallback();
      return true;
    } else {
      return isAuth;
    }
  } catch (err) {
    return false;
  }
};

export const getCurrentUser: () => Promise<User | undefined> = async () => {
  try {
    return await auth0.getUser();
  } catch (err) {
    return Promise.reject(new Error("User was not found or bad response"));
  }
};
