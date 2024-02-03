import React from "react";

import { Skeleton } from "@/components/ui/skeleton";

export const Info = () => {
	return (
		<div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-sm">
			Info
		</div>
	);
};

Info.Skeleton = function InfoSkeleton() {
	return (
		<div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-sm w-[300px]" />
	);
};
