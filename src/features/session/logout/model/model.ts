import { createDomain, sample } from "effector";
import { logoutFx } from "entities/session";

export const domain = createDomain("features/session/login");

export const onLogoutRequested = domain.event();

sample({ clock: onLogoutRequested, target: logoutFx });
