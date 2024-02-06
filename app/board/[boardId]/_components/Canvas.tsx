"use client";

import React, { useState } from "react";

import { Info } from "./Info";
import { Participants } from "./Participants";
import { Toolbar } from "./Toolbar";
import {
	useHistory,
	useSelf,
	useCanRedo,
	useCanUndo,
} from "@/liveblocks.config";
import { CanvasMode, CanvasState } from "@/types/canvas";

interface CanvasProps {
	boardId: string;
}

export const Canvas = ({ boardId }: CanvasProps) => {
	const [canvasState, setCanvasState] = useState<CanvasState>({
		mode: CanvasMode.None,
	});

	const history = useHistory();
	const canUndo = useCanUndo();
	const canRedo = useCanRedo();

	return (
		<main className="h-full w-full relative bg-neutral-200 touch-none">
			<Info boardId={boardId} />
			<Participants />
			<Toolbar
				canvasState={canvasState}
				setCanvasState={setCanvasState}
				canRedo={canRedo}
				canUndo={canUndo}
				undo={history.undo}
				redo={history.redo}
			/>
		</main>
	);
};
