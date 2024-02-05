import { Loader } from "lucide-react";

import { InfoSkeleton } from "./Info";
import { ParticipantsSkeleton } from "./Participants";
import { ToolbarSkeleton } from "./Toolbar";

export const CanvasLoading = () => {
	return (
		<main className="h-full w-full relative bg-neutral-200 touch-none flex items-center justify-center">
			<Loader className="h-7 w-7 text-muted-foreground animate-spin" />

			<InfoSkeleton />
			<ParticipantsSkeleton />
			<ToolbarSkeleton />
		</main>
	);
};
