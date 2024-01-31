"use client";

import { EmptyBoards } from "./EmptyBoards";
import { EmptyFavorites } from "./EmptyFavorites";
import { EmptySearch } from "./EmptySearch";

interface BoardListProps {
	orgId: string;
	query: {
		search?: string;
		favorites?: string;
	};
}

export const BoardList = ({ orgId, query }: BoardListProps) => {
	const data = []; //TODO Change to API call

	if (!data?.length && query.search) return <EmptySearch />;

	if (!data?.length && query.favorites) return <EmptyFavorites />;

	if (!data?.length) return <EmptyBoards />;

	return <div className=""></div>;
};
