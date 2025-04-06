"use client";

import type React from "react";

import { useState } from "react";
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
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2 } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

export default function ApplyPage() {
	const router = useRouter();
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		loanAmount: "",
		address: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const validateStep1 = () => {
		if (!formData.name.trim()) {
			toast.error("Please enter your full name");
			return false;
		}
		if (!formData.email.trim()) {
			toast.error("Please enter your email address");
			return false;
		}
		if (!formData.phone.trim()) {
			toast.error("Please enter your phone number");
			return false;
		}

		// Basic email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(formData.email)) {
			toast.error("Please enter a valid email address");
			return false;
		}

		// Basic phone validation (10 digits)
		const phoneRegex = /^\d{10}$/;
		if (!phoneRegex.test(formData.phone)) {
			toast.error("Please enter a valid 10-digit phone number");
			return false;
		}

		return true;
	};

	const validateStep2 = () => {
		if (!formData.loanAmount.trim()) {
			toast.error("Please enter the loan amount");
			return false;
		}
		if (!formData.address.trim()) {
			toast.error("Please enter your business address");
			return false;
		}

		// Validate loan amount is a positive number
		const amount = parseFloat(formData.loanAmount);
		if (isNaN(amount) || amount <= 0) {
			toast.error("Please enter a valid loan amount");
			return false;
		}

		return true;
	};

	const handleNextStep = () => {
		if (step === 1 && validateStep1()) {
			setStep(2);
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!validateStep2()) {
			return;
		}

		setIsSubmitting(true);
		const loadingToast = toast.loading("Processing your application...");

		try {
			// Simulate API call
			await new Promise((resolve) => setTimeout(resolve, 1500));

			// Store form data in session storage for the payment page
			sessionStorage.setItem("loanApplication", JSON.stringify(formData));

			// Log the form data
			console.log("Form submitted:", formData);

			toast.success("Application submitted successfully!", {
				id: loadingToast,
			});

			// Redirect to payment page
			router.push("/apply/payment");
		} catch (error) {
			toast.error("Something went wrong. Please try again.", {
				id: loadingToast,
			});
			console.log(error);
			setIsSubmitting(false);
		}
	};

	return (
		<div className='container mx-auto max-w-3xl py-12'>
			<Toaster position='top-center' />
			<div className='flex flex-col items-center justify-center space-y-4 text-center mb-8'>
				<div className='space-y-2 px-4'>
					<h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
						Apply for a Business Loan
					</h1>
					<p className='max-w-[700px] text-muted-foreground md:text-xl/relaxed'>
						Fill out the form below to apply for a business loan.
						Our team will review your application and get back to
						you within 48 hours.
					</p>
				</div>
			</div>

			{/* Step Indicator */}
			<div className='flex justify-center mb-8'>
				<div className='flex flex-wrap justify-center'>
					<div
						className={`step-item ${step >= 1 ? "active" : ""} ${
							step > 1 ? "complete" : ""
						}`}>
						<div
							className={`step ${step >= 1 ? "active" : ""} ${
								step > 1 ? "complete" : ""
							}`}>
							{step > 1 ? (
								<span className='step-icon'>
									<CheckCircle2 className='h-5 w-5' />
								</span>
							) : (
								"1"
							)}
						</div>
						<p className='text-xs mt-2'>Personal Details</p>
					</div>
					<div
						className={`step-item ${step >= 2 ? "active" : ""} ${
							step > 2 ? "complete" : ""
						}`}>
						<div
							className={`step ${step >= 2 ? "active" : ""} ${
								step > 2 ? "complete" : ""
							}`}>
							{step > 2 ? (
								<span className='step-icon'>
									<CheckCircle2 className='h-5 w-5' />
								</span>
							) : (
								"2"
							)}
						</div>
						<p className='text-xs mt-2'>Loan Details</p>
					</div>
					<div
						className={`step-item ${step >= 3 ? "active" : ""} ${
							step > 3 ? "complete" : ""
						}`}>
						<div
							className={`step ${step >= 3 ? "active" : ""} ${
								step > 3 ? "complete" : ""
							}`}>
							{step > 3 ? (
								<span className='step-icon'>
									<CheckCircle2 className='h-5 w-5' />
								</span>
							) : (
								"3"
							)}
						</div>
						<p className='text-xs mt-2'>Payment</p>
					</div>
				</div>
			</div>

			<Card className='border-green-100 shadow-lg'>
				<CardHeader className='bg-gradient-to-r from-green-50 to-white border-b border-green-100'>
					<CardTitle className='text-primary'>
						{step === 1 ? "Personal Details" : "Loan Details"}
					</CardTitle>
					<CardDescription>
						{step === 1
							? "Please provide your contact information"
							: "Please provide details about the loan you're applying for"}
					</CardDescription>
				</CardHeader>
				<form onSubmit={step === 1 ? handleNextStep : handleSubmit}>
					<CardContent className='space-y-4 pt-6'>
						{step === 1 ? (
							<>
								<div className='space-y-2'>
									<Label htmlFor='name'>Full Name</Label>
									<Input
										id='name'
										name='name'
										placeholder='Enter your full name'
										value={formData.name}
										onChange={handleChange}
										required
										className='border-green-200 focus-visible:ring-green-500'
									/>
								</div>
								<div className='space-y-2'>
									<Label htmlFor='email'>Email Address</Label>
									<Input
										id='email'
										name='email'
										type='email'
										placeholder='Enter your email'
										value={formData.email}
										onChange={handleChange}
										required
										className='border-green-200 focus-visible:ring-green-500'
									/>
								</div>
								<div className='space-y-2'>
									<Label htmlFor='phone'>Phone Number</Label>
									<Input
										id='phone'
										name='phone'
										type='tel'
										placeholder='Enter your phone number'
										value={formData.phone}
										onChange={handleChange}
										required
										className='border-green-200 focus-visible:ring-green-500'
									/>
								</div>
							</>
						) : (
							<>
								<div className='space-y-2'>
									<Label htmlFor='loanAmount'>
										Loan Amount (₹)
									</Label>
									<Input
										id='loanAmount'
										name='loanAmount'
										type='number'
										placeholder='Enter the loan amount'
										value={formData.loanAmount}
										onChange={handleChange}
										required
										className='border-green-200 focus-visible:ring-green-500'
									/>
								</div>
								<div className='space-y-2'>
									<Label htmlFor='address'>
										Business Address
									</Label>
									<Textarea
										id='address'
										name='address'
										placeholder='Enter your business address'
										value={formData.address}
										onChange={handleChange}
										required
										className='min-h-[100px] border-green-200 focus-visible:ring-green-500'
									/>
								</div>
							</>
						)}
					</CardContent>
					<CardFooter className='flex justify-between border-t border-green-100 bg-green-50/50 px-6 py-4'>
						{step === 2 && (
							<Button
								type='button'
								variant='outline'
								onClick={() => setStep(1)}
								className='border-green-200'>
								Back
							</Button>
						)}
						<div className={step === 1 ? "w-full" : ""}>
							<Button
								type={step === 1 ? "button" : "submit"}
								className='w-full'
								onClick={
									step === 1 ? handleNextStep : undefined
								}
								disabled={isSubmitting}>
								{step === 1
									? "Continue"
									: isSubmitting
									? "Processing..."
									: "Continue to Payment"}
							</Button>
						</div>
					</CardFooter>
				</form>
			</Card>

			<div className='mt-8 text-center text-sm text-muted-foreground'>
				<p>
					By submitting this application, you agree to our{" "}
					<a
						href='/terms'
						className='underline underline-offset-4 hover:text-primary'>
						Terms and Conditions
					</a>{" "}
					and{" "}
					<a
						href='/privacy'
						className='underline underline-offset-4 hover:text-primary'>
						Privacy Policy
					</a>
					.
				</p>
			</div>
		</div>
	);
}
