"use client";

import React from "react";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { useProModal } from "@/store/use-pro-modal";

interface NewBoardButtonProps {
	orgId: string;
	disabled?: boolean;
}

export const NewBoardButton = ({ orgId, disabled }: NewBoardButtonProps) => {
	const router = useRouter();
	const { onOpen } = useProModal();

	const { mutate, pending } = useApiMutation(api.board.create);

	const onClick = () => {
		mutate({
			orgId,
			title: "Untitled",
		})
			.then((id) => {
				toast.success("New board created!");

				router.push(`/board/${id}`);
			})
			.catch(() => {
				toast.error("Failed to create board. Please try again.");
				onOpen();
			});
	};

	return (
		<button
			disabled={pending || disabled}
			onClick={onClick}
			className={cn(
				"col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6",
				disabled && "opacity-75 hover:bg-blue-600 cursor-not-allowed"
			)}
		>
			<div className="" />
			<Plus className="h-12 w-12 text-white stroke-1" />

			<p className="text-sm text-white font-light">New board</p>
		</button>
	);
};
