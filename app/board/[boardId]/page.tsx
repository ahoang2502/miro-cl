import React from "react";

import { Canvas } from "./_components/Canvas";
import { Room } from "@/components/Room";
import { CanvasLoading } from "./_components/CanvasLoading";

interface BoardIdPageProps {
	params: {
		boardId: string;
	};
}

const BoardIdPage = ({ params }: BoardIdPageProps) => {
	return (
		<Room roomId={params.boardId} fallback={<CanvasLoading />}>
			<Canvas boardId={params.boardId} />
		</Room>
	);
};

export default BoardIdPage;
