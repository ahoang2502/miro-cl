"use client";

import { UserButton } from "@clerk/nextjs";

export const Navbar = () => {
	return (
		<div className="flex items-center gap-x-4 p-5 bg-pink-500">
			<div className="hidden lg:flex-1 lg:flex">{/* TODO Search */}</div>

			<UserButton />
		</div>
	);
};
