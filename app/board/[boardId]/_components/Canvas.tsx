"use client";

import React from "react";

import { Info } from "./Info";
import { Participants } from "./Participants";
import { Toolbar } from "./Toolbar";
import { useSelf } from "@/liveblocks.config";

interface CanvasProps {
	boardId: string;
}

export const Canvas = ({ boardId }: CanvasProps) => {
	const info = useSelf((me) => me.info);

	return (
		<main className="h-full w-full relative bg-neutral-200 touch-none">
			<Info boardId={boardId} />
			<Participants />
			<Toolbar />
		</main>
	);
};
