import { createDomain, sample } from "effector";
import { logout, getCurrentUser } from "./api";
import { SessionUser } from "./types";

const domain = createDomain("entities/session");

domain.onCreateStore((store) => {
  store.reset(sessionClosed);
});

export const appMounted = domain.event();
export const sessionClosed = domain.event();

export const logoutFx = domain.effect(logout);
export const getUserFx = domain.effect(getCurrentUser);

export const $user = domain.store<SessionUser | null>(null);

$user.on(getUserFx.doneData, (_, data) => data);

sample({ clock: appMounted, target: getUserFx });
