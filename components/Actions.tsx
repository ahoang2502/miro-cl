"use client";

import React from "react";
import { Link2, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";

import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";

import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { ConfirmModal } from "./ConfirmModal";
import { Button } from "./ui/button";
import { useRenameModal } from "@/store/use-rename-modal";

interface ActionsProps {
	children: React.ReactNode;
	side?: DropdownMenuContentProps["side"];
	sideOffset?: DropdownMenuContentProps["sideOffset"];
	id: string;
	title: string;
}

export const Actions = ({
	children,
	side,
	sideOffset,
	id,
	title,
}: ActionsProps) => {
	const { mutate, pending } = useApiMutation(api.board.remove);
	const { onOpen } = useRenameModal();

	const onCopyLink = () => {
		navigator.clipboard
			.writeText(`${window.location.origin}/board/${id}`)
			.then(() => toast.success("Link copied"))
			.catch(() => toast.error("Failed to copy link."));
	};

	const onDelete = () => {
		mutate({ id })
			.then(() => {
				toast.success("Board deleted");
			})
			.catch(() => toast.error("Failed to delete board. Please try again!"));
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>

			<DropdownMenuContent
				side={side}
				sideOffset={sideOffset}
				className="w-60"
				onClick={(e) => e.stopPropagation()}
			>
				<DropdownMenuItem className="p-3 cursor-pointer" onClick={onCopyLink}>
					<Link2 className="h-4 w-4 mr-2 " />
					Copy board link
				</DropdownMenuItem>

				<DropdownMenuItem
					className="p-3 cursor-pointer"
					onClick={() => onOpen(id, title)}
				>
					<Pencil className="h-4 w-4 mr-2 " />
					Rename
				</DropdownMenuItem>

				<ConfirmModal
					header="Delete board?"
					description="This will delete the board and all of its contents."
					disabled={pending}
					onConfirm={onDelete}
				>
					<Button
						className="p-3 cursor-pointer text-sm w-full justify-start font-normal"
						variant="ghost"
					>
						<Trash2 className="h-4 w-4 mr-2 " />
						Delete
					</Button>
				</ConfirmModal>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
