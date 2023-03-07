import { createDomain, createEffect, sample } from "effector";
import { logout, getCurrentUser } from "./api";
import { SessionUser } from "./types";

const domain = createDomain("entities/session");

export const onAppMounted = domain.event();

export const logoutFx = createEffect(logout);
export const getUserFx = createEffect(getCurrentUser);

export const $user = domain.store<SessionUser | null>(null);

$user.on(getUserFx.doneData, (_, data) => data || null);

sample({ clock: onAppMounted, target: getUserFx });
