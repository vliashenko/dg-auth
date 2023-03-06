import { createDomain, createEffect, sample } from "effector";
import { login, logout, getAuthStatus, getCurrentUser } from "./api";
import { User } from "./types";

const domain = createDomain("entities/session");

export const onLogin = domain.event();
export const onLogout = domain.event();
export const onAppLoaded = domain.event();

export const loginFx = createEffect(login);
export const logoutFx = createEffect(logout);
export const isAuthenticatedFx = createEffect(getAuthStatus);
export const getUserFx = createEffect(getCurrentUser);

sample({ clock: onLogin, target: loginFx });
sample({ clock: onLogout, target: logoutFx });
sample({ clock: onAppLoaded, target: isAuthenticatedFx });
sample({ clock: isAuthenticatedFx.doneData, target: getUserFx });

export const $auth = domain.store<boolean>(false);
export const $user = domain.store<User | null>(null);

$auth.on(isAuthenticatedFx.doneData, (_, isAuth) => isAuth);

$user.on(getUserFx.doneData, (_, data) => data);
