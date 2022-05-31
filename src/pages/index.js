import { lazy } from "react";

const PlayPage = lazy(() => import("./Play"));
const WelcomePage = lazy(() => import("./Welcome"));

export { WelcomePage as Welcome };
export { PlayPage as Play };
