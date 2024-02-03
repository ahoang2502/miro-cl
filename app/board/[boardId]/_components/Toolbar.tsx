import React from "react";

import { Skeleton } from "@/components/ui/skeleton";

export const Toolbar = () => {
	return (
		<div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4">
			<div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-sm">
				<div className="">pencil</div>

				<div className="">square</div>

				<div className="">cirlce</div>
			</div>

			<div className="bg-white rounded-md p-1.5 flex flex-col items-center shadow-sm">
				<div className="">Undo</div>

				<div className="">Redo</div>
			</div>
		</div>
	);
};

Toolbar.Skeleton = function ToolbarSkeleton() {
	return (
		<div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4 bg-white h-[360px] w-[52px] shadow-sm rounded-md" />
	);
};
