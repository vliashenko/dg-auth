import { attach, createDomain, sample } from "effector";
import { sessionModel } from "entities/session";

export const domain = createDomain("features/session/login");

export const logoutRequested = domain.event();

const onSignOutFx = attach({ effect: sessionModel.logoutFx });

sample({ clock: logoutRequested, target: onSignOutFx });
