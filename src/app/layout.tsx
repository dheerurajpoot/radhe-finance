import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Radhe Finance - Business Loans Made Easy",
	description:
		"Get the business loan you need to grow your business with Radhe Finance.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<div className='relative flex min-h-screen flex-col'>
					<Header />
					{children}
					<Footer />
					<Toaster />
				</div>
			</body>
		</html>
	);
}
