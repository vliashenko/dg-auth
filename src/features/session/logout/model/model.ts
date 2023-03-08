import { attach, createDomain, sample } from "effector";
import { sessionModel } from "entities/session";

export const domain = createDomain("features/session/login");

export const logoutRequested = domain.event();

const logoutRequestedFx = attach({ effect: sessionModel.logoutFx });

sample({ clock: logoutRequested, target: logoutRequestedFx });
sample({ clock: logoutRequestedFx.done, target: sessionModel.sessionClosed });
