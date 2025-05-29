import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

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
			<head />
			{/* Google Tag Manager */}
			<Script id="gtm" strategy="afterInteractive">
				{`
				(function(w,d,s,l,i){
					w[l]=w[l]||[];
					w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
					var f=d.getElementsByTagName(s)[0],
					j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
					j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
					f.parentNode.insertBefore(j,f);
				})(window,document,'script','dataLayer','GTM-M9QCDSB4');
				`}
			</Script>
			<body className={inter.className}>
			<noscript>
				<iframe
					src="https://www.googletagmanager.com/ns.html?id=GTM-M9QCDSB4"
					height="0"
					width="0"
					style={{ display: 'none', visibility: 'hidden' }}
				/>
			</noscript>
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
