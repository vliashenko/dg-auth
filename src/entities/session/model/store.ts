import { createDomain, createEffect, sample } from "effector";
import { login, logout, getAuthStatus, getCurrentUser } from "./api";
import { User } from "./types";

const domain = createDomain("entities/session");

export const onLoginRequested = domain.event();
export const onLogoutRequested = domain.event();
export const onAppMounted = domain.event();

export const loginFx = createEffect(login);
export const logoutFx = createEffect(logout);
export const isAuthenticatedFx = createEffect(getAuthStatus);
export const getUserFx = createEffect(getCurrentUser);

export const $auth = domain.store<boolean>(false);
export const $user = domain.store<User | null>(null);

$auth.on(isAuthenticatedFx.doneData, (_, isAuth) => isAuth);
$user.on(getUserFx.doneData, (_, data) => data);

sample({ clock: onLoginRequested, target: loginFx });
sample({ clock: onLogoutRequested, target: logoutFx });
sample({ clock: onAppMounted, target: isAuthenticatedFx });
sample({ clock: isAuthenticatedFx.doneData, target: getUserFx });
