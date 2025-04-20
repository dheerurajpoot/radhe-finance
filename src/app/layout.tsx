import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Mudra Loan- Apply Online for Business Loan",
	description:
		"Get quick and hassle-free business loans upto 50 Lakhs. We offer competitive rates, flexible terms, and personalized financial solutions to help your business grow.",
	keywords:
		"business loans, mudra loan, financial services, SME loans, business financing, quick loans, working capital",
	authors: [{ name: "SMM Garden" }],
	metadataBase: new URL("https://www.smmgarden.com"),
	openGraph: {
		title: "Mudra Loan- Apply Online for Business Loan",
		description:
			"Get quick and hassle-free business loans upto 50 Lakhs. Competitive rates and flexible terms.",
		url: "https://www.smmgarden.com",
		siteName: "SMM Garden",
		images: [
			{
				url: "/loan.png",
				width: 1200,
				height: 630,
				alt: "SMM Garden - Business Loans",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Mudra Loan- Apply Online for Business Loan",
		description:
			"Get quick and hassle-free business loans upto 50 Lakhs. Competitive rates and flexible terms.",
		images: ["/loan.png"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	alternates: {
		canonical: "https://www.smmgarden.com",
	},
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
