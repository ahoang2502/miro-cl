import { Loader } from "lucide-react";

import { Info } from "./Info";
import { Participants } from "./Participants";
import { Toolbar } from "./Toolbar";

export const CanvasLoading = () => {
	return (
		<main className="h-full w-full relative bg-neutral-200 touch-none flex items-center justify-center">
			<Loader className="h-7 w-7 text-muted-foreground animate-spin" />

			<Info.Skeleton />
			<Participants.Skeleton />
			<Toolbar.Skeleton />
		</main>
	);
};
