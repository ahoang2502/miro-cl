"use client";

import { useOrganization } from "@clerk/nextjs";

import { EmptyOrg } from "./_components/EmptyOrg";
import { BoardList } from "./_components/BoardList";

interface DashboardPageProps {
	searchParams: {
		search?: string;
		favorites?: string;
	};
}

const DashboardPage = ({ searchParams }: DashboardPageProps) => {
	const { organization } = useOrganization();

	return (
		<div className=" flex-1 h-[calc(100%-80px)] p-6">
			
			{!organization ? (
				<EmptyOrg />
			) : (
				<BoardList orgId={organization.id} query={searchParams} />
			)}
		</div>
	);
};

export default DashboardPage;
