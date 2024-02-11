import { Suspense } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ConvexClientProvider } from "@/providers/convex-client-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import { ModalProvider } from "@/providers/modal-provider";
import { Loading } from "@/components/auth/Loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Miro | The Visual Workspace for Innovation",
	description:
		"Miro is a visual workspace for innovation where teams manage projects, design products, and build the future together.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Suspense fallback={<Loading />}>
					<ConvexClientProvider>
						<Toaster />
						<ModalProvider />
						{children}
					</ConvexClientProvider>
				</Suspense>
			</body>
		</html>
	);
}
