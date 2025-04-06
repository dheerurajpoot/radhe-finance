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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, CreditCard, Lock } from "lucide-react";

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
	const [formData, setFormData] = useState({
		cardNumber: "",
		cardName: "",
		expiryDate: "",
		cvv: "",
	});
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

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Validate form
		if (
			!formData.cardNumber ||
			!formData.cardName ||
			!formData.expiryDate ||
			!formData.cvv
		) {
			// toast({
			//   title: "Error",
			//   description: "Please fill in all required fields",
			//   variant: "destructive",
			// })
			setIsSubmitting(false);
			return;
		}

		// Simulate payment processing
		try {
			// In a real app, you would send the payment data to your payment gateway
			await new Promise((resolve) => setTimeout(resolve, 2000));

			// Clear session storage
			sessionStorage.removeItem("loanApplication");

			// Redirect to success page
			router.push("/apply/success");
		} catch (error) {
			// toast({
			//   title: "Payment Failed",
			//   description: "There was an error processing your payment. Please try again.",
			//   variant: "destructive",
			// })
			console.log(error);
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
									₹199
								</span>
							</div>
							<p className='mt-2 text-xs text-muted-foreground'>
								This is a one-time non-refundable application
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
							Enter your card details to complete the payment.
						</CardDescription>
					</CardHeader>
					<form onSubmit={handleSubmit}>
						<CardContent className='space-y-4 pt-6'>
							<div className='space-y-2'>
								<Label htmlFor='cardNumber'>Card Number</Label>
								<Input
									id='cardNumber'
									name='cardNumber'
									placeholder='1234 5678 9012 3456'
									value={formData.cardNumber}
									onChange={handleChange}
									required
									className='border-green-200 focus-visible:ring-green-500'
								/>
							</div>
							<div className='space-y-2'>
								<Label htmlFor='cardName'>Name on Card</Label>
								<Input
									id='cardName'
									name='cardName'
									placeholder='Enter name on card'
									value={formData.cardName}
									onChange={handleChange}
									required
									className='border-green-200 focus-visible:ring-green-500'
								/>
							</div>
							<div className='grid grid-cols-2 gap-4'>
								<div className='space-y-2'>
									<Label htmlFor='expiryDate'>
										Expiry Date
									</Label>
									<Input
										id='expiryDate'
										name='expiryDate'
										placeholder='MM/YY'
										value={formData.expiryDate}
										onChange={handleChange}
										required
										className='border-green-200 focus-visible:ring-green-500'
									/>
								</div>
								<div className='space-y-2'>
									<Label htmlFor='cvv'>CVV</Label>
									<Input
										id='cvv'
										name='cvv'
										type='password'
										placeholder='123'
										value={formData.cvv}
										onChange={handleChange}
										required
										className='border-green-200 focus-visible:ring-green-500'
									/>
								</div>
							</div>
						</CardContent>
						<CardFooter className='border-t border-green-100 bg-green-50/50 px-6 py-4'>
							<Button
								type='submit'
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
										<Lock className='mr-2 h-4 w-4' /> Pay
										₹199
									</div>
								)}
							</Button>
						</CardFooter>
					</form>
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
