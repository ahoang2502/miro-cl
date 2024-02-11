import React from "react";
import getStroke from "perfect-freehand";

import { getSvgPathFromStroke } from "@/lib/utils";

interface PathProps {
	x: number;
	y: number;
	points: number[][];
	onPointerDown?: (e: React.PointerEvent) => void;
	fill: string;
	stroke?: string;
}

export const Path = ({
	points,
	onPointerDown,
	x,
	y,
	fill,
	stroke,
}: PathProps) => {
	return (
		<path
			className="drop-shadow-sm "
			onPointerDown={onPointerDown}
			d={getSvgPathFromStroke(
				getStroke(points, {
					size: 8,
					thinning: 0.5,
					smoothing: 0.3,
					streamline: 0.5,
				})
			)}
			style={{ transform: `translate(${x}px, ${y}px)` }}
			x={0}
			y={0}
			fill={fill}
			stroke={stroke}
			strokeWidth={1}
		/>
	);
};
