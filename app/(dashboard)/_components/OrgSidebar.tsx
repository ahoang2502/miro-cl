"use client";

import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { OrganizationSwitcher, useOrganization } from "@clerk/nextjs";
import { Banknote, LayoutDashboard, Star } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useAction, useQuery } from "convex/react";
import { useState } from "react";
import { toast } from "sonner";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { Badge } from "@/components/ui/badge";

const font = Poppins({
	subsets: ["latin"],
	weight: ["600"],
});

export const OrgSidebar = () => {
	const searchParams = useSearchParams();
	const favorites = searchParams.get("favorites");

	const { organization } = useOrganization();
	const isSubscribed = useQuery(api.subscriptions.getIsSubscribed, {
		orgId: organization?.id,
	});

	const portal = useAction(api.stripe.portal);
	const pay = useAction(api.stripe.pay);

	const [pending, setPending] = useState(false);

	const onClick = async () => {
		if (!organization?.id) return;

		setPending(true);

		try {
			const action = isSubscribed ? portal : pay;

			const redirectUrl = await action({
				orgId: organization.id,
			});

			window.location.href = redirectUrl;
		} catch {
			toast.error("Something went wrong");
		} finally {
			setPending(false);
		}
	};

	return (
		<div className="hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5">
			<Link href="/">
				<div className="flex items-center gap-x-2">
					<Image src="/logo.svg" alt="logo" height={60} width={60} />
					<span className={cn("font-semibold text-2xl", font.className)}>
						Miro
					</span>
				</div>

				{isSubscribed && <Badge variant="secondary">PRO</Badge>}
			</Link>

			<OrganizationSwitcher
				hidePersonal
				appearance={{
					elements: {
						rootBox: {
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							width: "100%",
						},
						organizationSwitcherTrigger: {
							padding: "6px",
							width: "100%",
							borderRadius: "8px",
							border: "1px solid #e5e7eb",
							justifyContent: "space-between",
							backgroundColor: "white",
						},
					},
				}}
			/>

			<div className="space-y-1 w-full ">
				<Button
					asChild
					size="lg"
					className="font-normal justify-start px-2 w-full items-center"
					variant={favorites ? "ghost" : "secondary"}
				>
					<Link href="/">
						<LayoutDashboard className="h-4 w-4 mr-2" /> Team boards
					</Link>
				</Button>

				<Button
					asChild
					size="lg"
					className="font-normal justify-start px-2 w-full items-center"
					variant={favorites ? "secondary" : "ghost"}
				>
					<Link
						href={{
							pathname: "/",
							query: { favorites: true },
						}}
					>
						<Star className="h-4 w-4 mr-2" /> Favorite boards
					</Link>
				</Button>

				<Button
					variant="ghost"
					size="lg"
					className="font-normal justify-start px-2 w-full"
					onClick={onClick}
					disabled={pending}
				>
					<Banknote className="h-4 w-4 mr-2" />
					{isSubscribed ? "Payment Settings" : "Upgrade"}
				</Button>
			</div>
		</div>
	);
};
