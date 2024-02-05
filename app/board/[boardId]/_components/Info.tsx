"use client";

import { useQuery } from "convex/react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { Menu } from "lucide-react";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Hint } from "@/components/Hint";
import { useRenameModal } from "@/store/use-rename-modal";
import { Actions } from "@/components/Actions";

interface InfoProps {
	boardId: string;
}

const font = Poppins({
	subsets: ["latin"],
	weight: ["600"],
});

const TabSeparator = () => {
	return <div className="text-neutral-300 px-1.5">|</div>;
};

export const Info = ({ boardId }: InfoProps) => {
	const { onOpen } = useRenameModal();

	const data = useQuery(api.board.get, { id: boardId as Id<"boards"> });

	if (!data) return <InfoSkeleton />;

	return (
		<div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-sm">
			<Hint label="Go to boards" side="bottom" sideOffset={10}>
				<Button className="px-2 " variant="board" asChild>
					<Link href="/">
						<Image src="/logo.svg" alt="board-logo" height={40} width={40} />
						<span
							className={cn(
								"font-semibold text-xl ml-2 text-black",
								font.className
							)}
						>
							Miro
						</span>
					</Link>
				</Button>
			</Hint>

			<TabSeparator />
			<Hint label="Edit title" side="bottom" sideOffset={10}>
				<Button
					variant="board"
					className="text-base font-normal px-2"
					onClick={() => onOpen(data._id, data.title)}
				>
					{data.title}
				</Button>
			</Hint>

			<TabSeparator />
			<Actions id={data._id} title={data.title} side="bottom" sideOffset={10}>
				<div className="">
					<Hint label="Main menu" side="bottom" sideOffset={10}>
						<Button size="icon" variant="board">
							<Menu className="" />
						</Button>
					</Hint>
				</div>
			</Actions>
		</div>
	);
};

export const InfoSkeleton = () => {
	return (
		<div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-sm w-[300px]" />
	);
};
