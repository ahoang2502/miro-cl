"use client";

import { Poppins } from "next/font/google";
import Image from "next/image";

import { useProModal } from "@/store/use-pro-modal";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "../ui/dialog";
import { Button } from "../ui/button";

const font = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

export const ProModal = () => {
	const { isOpen, onClose } = useProModal();

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="max-w[340px] p-0 overflow-hidden">
				<div className="aspect-video relative flex items-center justify-center">
					<Image src="/pro.svg" alt="pro" className="object-fit " fill />
				</div>

				<div
					className={cn(
						"text-neutral-700 mx-auto space-y-6 p-6",
						font.className
					)}
				>
					<h2 className="font-medium text-lg">🚀 Upgrade to Pro today!</h2>

					<div className="pl-3">
						<ul className="text-[11px] space-y-1 list-disc">
							<li className="">Unlimited boards</li>
							<li className="">Unlimited tools</li>
							<li className="">Unlimited organizations</li>
							<li className="">Unlimited members</li>
						</ul>
					</div>

					<Button size="sm" className="w-full">
						Upgrade
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
};
