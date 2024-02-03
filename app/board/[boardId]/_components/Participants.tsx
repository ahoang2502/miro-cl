import React from "react";

import { Skeleton } from "@/components/ui/skeleton";

export const Participants = () => {
	return (
		<div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-sm">
			List of users
		</div>
	);
};

Participants.Skeleton = function PaticipantsSkeleton() {
	return (
		<div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-sm w-[100px]" />
	);
};
