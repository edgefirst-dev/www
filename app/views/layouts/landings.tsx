import { Outlet } from "react-router";
import type { Route } from "./+types/landings";

export default function Component(_: Route.ComponentProps) {
	return <Outlet />;
}
