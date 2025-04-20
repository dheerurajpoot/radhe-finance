"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { CheckCircle2, CreditCard, Lock } from "lucide-react";
import toast from "react-hot-toast";
import axios from "axios";

// Define interface for application data
interface ApplicationData {
	name: string;
	email: string;
	phone: string;
	loanAmount: number;
	address: string;
}

export default function PaymentPage() {
	const router = useRouter();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [applicationData, setApplicationData] =
		useState<ApplicationData | null>(null);

	useEffect(() => {
		// Get application data from session storage
		const storedData = sessionStorage.getItem("loanApplication");
		if (!storedData) {
			router.push("/apply");
			return;
		}
		setApplicationData(JSON.parse(storedData));
	}, [router]);

	console.log(applicationData);
	const formId = "46122254";
	const apiKey = "3cbe67dd-e8da-4371-8f30-473527d33f0d";

	const handlePayment = async () => {
		if (!applicationData) return;

		setIsSubmitting(true);
		const { name, email, phone, loanAmount, address } = applicationData;
		const data = {
			fields: [
				{ name: "full_name", value: name },
				{ name: "email", value: email },
				{ name: "phone", value: phone },
				{ name: "loan_amount", value: loanAmount },
				{ name: "city", value: address },
			],
		};

		try {
			const response = await axios.post(
				`https://api.hsforms.com/submissions/v3/integration/submit/${formId}/${apiKey}`,
				data,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			if (response.status === 200) {
				window.location.href = "https://rzp.io/rzp/GKzEReG";
				setTimeout(() => {
					router.push("/apply/success");
					// toast.success("Payment successful!");
				}, 2000);
			} else {
				toast.error("Failed to process payment. Please try again.");
				setIsSubmitting(false);
			}
		} catch (error) {
			console.error("Payment error:", error);
			toast.error("Failed to process payment. Please try again.");
			setIsSubmitting(false);
		}
	};

	if (!applicationData) {
		return <div className='container py-12 text-center'>Loading...</div>;
	}

	return (
		<div className='container mx-auto max-w-4xl py-12'>
			<div className='flex flex-col items-center justify-center space-y-4 text-center mb-8'>
				<div className='space-y-2'>
					<h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
						Application Fee Payment
					</h1>
					<p className='max-w-[700px] text-muted-foreground md:text-xl/relaxed'>
						Please pay the application processing fee to complete
						your loan application.
					</p>
				</div>
			</div>

			{/* Step Indicator */}
			<div className='flex justify-center mb-8'>
				<div className='flex flex-wrap justify-center'>
					<div className='step-item complete'>
						<div className='step complete'>
							<span className='step-icon'>
								<CheckCircle2 className='h-5 w-5' />
							</span>
						</div>
						<p className='text-xs mt-2'>Personal Details</p>
					</div>
					<div className='step-item complete'>
						<div className='step complete'>
							<span className='step-icon'>
								<CheckCircle2 className='h-5 w-5' />
							</span>
						</div>
						<p className='text-xs mt-2'>Loan Details</p>
					</div>
					<div className='step-item active'>
						<div className='step active'>3</div>
						<p className='text-xs mt-2'>Payment</p>
					</div>
				</div>
			</div>

			<div className='grid gap-6 md:grid-cols-2'>
				<Card className='border-green-100 shadow-lg'>
					<CardHeader className='bg-gradient-to-r from-green-50 to-white border-b border-green-100'>
						<CardTitle className='text-primary'>
							Application Summary
						</CardTitle>
						<CardDescription>
							Review your application details before payment.
						</CardDescription>
					</CardHeader>
					<CardContent className='space-y-4 pt-6'>
						<div className='space-y-2'>
							<div className='flex justify-between'>
								<span className='text-sm font-medium'>
									Name:
								</span>
								<span className='text-sm'>
									{applicationData.name}
								</span>
							</div>
							<div className='flex justify-between'>
								<span className='text-sm font-medium'>
									Email:
								</span>
								<span className='text-sm'>
									{applicationData.email}
								</span>
							</div>
							<div className='flex justify-between'>
								<span className='text-sm font-medium'>
									Phone:
								</span>
								<span className='text-sm'>
									{applicationData.phone}
								</span>
							</div>
							<div className='flex justify-between'>
								<span className='text-sm font-medium'>
									Loan Amount:
								</span>
								<span className='text-sm'>
									₹{applicationData.loanAmount}
								</span>
							</div>
							<div className='flex justify-between'>
								<span className='text-sm font-medium'>
									Address:
								</span>
								<span className='text-sm'>
									{applicationData.address}
								</span>
							</div>
						</div>
						<div className='border-t pt-4'>
							<div className='flex justify-between font-medium'>
								<span>Application Fee:</span>
								<span className='text-primary font-bold'>
									₹99
								</span>
							</div>
							<p className='mt-2 text-xs text-muted-foreground'>
								This is a one-time refundable application
								processing fee.
							</p>
						</div>
					</CardContent>
				</Card>

				<Card className='border-green-100 shadow-lg'>
					<CardHeader className='bg-gradient-to-r from-green-50 to-white border-b border-green-100'>
						<CardTitle className='text-primary flex items-center'>
							<CreditCard className='mr-2 h-5 w-5' /> Payment
							Details
						</CardTitle>
						<CardDescription>
							Click the button below to proceed with payment.
						</CardDescription>
					</CardHeader>
					<CardContent className='space-y-4 pt-6'>
						<div className='space-y-2'>
							<p className='text-sm text-muted-foreground'>
								You will be redirected to a secure payment page
								to complete your payment.
							</p>
						</div>
					</CardContent>
					<CardFooter className='border-t border-green-100 bg-green-50/50 px-6 py-4'>
						<Button
							onClick={handlePayment}
							className='w-full'
							disabled={isSubmitting}>
							{isSubmitting ? (
								<div className='flex items-center'>
									<span className='mr-2'>
										Processing Payment...
									</span>
									<div className='h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent'></div>
								</div>
							) : (
								<div className='flex items-center justify-center'>
									<Lock className='mr-2 h-4 w-4' /> Pay ₹99
								</div>
							)}
						</Button>
					</CardFooter>
				</Card>
			</div>

			<div className='mt-8 text-center text-sm text-muted-foreground'>
				<div className='flex items-center justify-center mb-2'>
					<Lock className='h-4 w-4 mr-1' />
					<p>Your payment information is secure and encrypted.</p>
				</div>
				<p>We do not store your card details.</p>
			</div>
		</div>
	);
}
