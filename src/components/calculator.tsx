"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
import { Slider } from "@/components/ui/slider";

export function Calculator() {
	const [loanAmount, setLoanAmount] = useState(500000);
	const [loanTerm, setLoanTerm] = useState(24);
	const [interestRate, setInterestRate] = useState(12);
	const [monthlyPayment, setMonthlyPayment] = useState(0);
	const [totalPayment, setTotalPayment] = useState(0);
	const [totalInterest, setTotalInterest] = useState(0);

	useEffect(() => {
		// Calculate monthly payment
		const monthlyInterestRate = interestRate / 100 / 12;
		const numberOfPayments = loanTerm;

		const monthlyPayment =
			(loanAmount *
				(monthlyInterestRate *
					Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
			(Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

		const totalPayment = monthlyPayment * numberOfPayments;
		const totalInterest = totalPayment - loanAmount;

		setMonthlyPayment(isNaN(monthlyPayment) ? 0 : monthlyPayment);
		setTotalPayment(isNaN(totalPayment) ? 0 : totalPayment);
		setTotalInterest(isNaN(totalInterest) ? 0 : totalInterest);
	}, [loanAmount, loanTerm, interestRate]);

	const handleLoanAmountChange = (value: number[]) => {
		setLoanAmount(value[0]);
	};

	const handleLoanTermChange = (value: number[]) => {
		setLoanTerm(value[0]);
	};

	const formatCurrency = (value: number) => {
		return new Intl.NumberFormat("en-IN", {
			style: "currency",
			currency: "INR",
			maximumFractionDigits: 0,
		}).format(value);
	};

	return (
		<section className='w-full py-12 md:py-24 lg:py-32' id='calculator'>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='flex flex-col items-center justify-center space-y-4 text-center'>
					<div className='space-y-2'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
							Business Loan Calculator
						</h2>
						<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
							Calculate your monthly payments and see how much you
							can borrow.
						</p>
					</div>
				</div>
				<div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2'>
					<Card>
						<CardHeader>
							<CardTitle>Loan Details</CardTitle>
							<CardDescription>
								Adjust the sliders to calculate your loan.
							</CardDescription>
						</CardHeader>
						<CardContent className='space-y-6'>
							<div className='space-y-2'>
								<div className='flex justify-between'>
									<Label htmlFor='loan-amount'>
										Loan Amount
									</Label>
									<span className='text-sm font-medium'>
										{formatCurrency(loanAmount)}
									</span>
								</div>
								<Slider
									id='loan-amount'
									min={100000}
									max={10000000}
									step={100000}
									value={[loanAmount]}
									onValueChange={handleLoanAmountChange}
								/>
								<div className='flex justify-between text-xs text-muted-foreground'>
									<span>₹1L</span>
									<span>₹1Cr</span>
								</div>
							</div>
							<div className='space-y-2'>
								<div className='flex justify-between'>
									<Label htmlFor='loan-term'>
										Loan Term (months)
									</Label>
									<span className='text-sm font-medium'>
										{loanTerm} months
									</span>
								</div>
								<Slider
									id='loan-term'
									min={3}
									max={60}
									step={1}
									value={[loanTerm]}
									onValueChange={handleLoanTermChange}
								/>
								<div className='flex justify-between text-xs text-muted-foreground'>
									<span>3 months</span>
									<span>60 months</span>
								</div>
							</div>
							<div className='space-y-2'>
								<div className='flex justify-between'>
									<Label htmlFor='interest-rate'>
										Interest Rate
									</Label>
									<span className='text-sm font-medium'>
										{interestRate}%
									</span>
								</div>
								<div className='flex items-center space-x-2'>
									<Input
										id='interest-rate'
										type='number'
										min={1}
										max={36}
										value={interestRate}
										onChange={(e) =>
											setInterestRate(
												Number(e.target.value)
											)
										}
										className='w-full'
									/>
									<span className='text-sm'>%</span>
								</div>
							</div>
						</CardContent>
						<CardFooter>
							<Link href='/apply' className='w-full'>
								<Button className='w-full'>Apply Now</Button>
							</Link>
						</CardFooter>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>Loan Summary</CardTitle>
							<CardDescription>
								Your estimated loan payments.
							</CardDescription>
						</CardHeader>
						<CardContent className='space-y-8'>
							<div className='space-y-4'>
								<div className='flex justify-between'>
									<span className='text-sm font-medium'>
										Loan Amount:
									</span>
									<span className='text-sm'>
										{formatCurrency(loanAmount)}
									</span>
								</div>
								<div className='flex justify-between'>
									<span className='text-sm font-medium'>
										Loan Term:
									</span>
									<span className='text-sm'>
										{loanTerm} months
									</span>
								</div>
								<div className='flex justify-between'>
									<span className='text-sm font-medium'>
										Interest Rate:
									</span>
									<span className='text-sm'>
										{interestRate}%
									</span>
								</div>
							</div>
							<div className='space-y-4'>
								<div className='flex justify-between border-t pt-4'>
									<span className='text-base font-medium'>
										Monthly Payment:
									</span>
									<span className='text-base font-bold text-primary'>
										{formatCurrency(monthlyPayment)}
									</span>
								</div>
								<div className='flex justify-between'>
									<span className='text-sm font-medium'>
										Total Payment:
									</span>
									<span className='text-sm'>
										{formatCurrency(totalPayment)}
									</span>
								</div>
								<div className='flex justify-between'>
									<span className='text-sm font-medium'>
										Total Interest:
									</span>
									<span className='text-sm'>
										{formatCurrency(totalInterest)}
									</span>
								</div>
							</div>
						</CardContent>
						<CardFooter className='flex justify-center'>
							<p className='text-xs text-muted-foreground text-center'>
								This is an estimate. Actual terms may vary based
								on your business profile and credit assessment.
							</p>
						</CardFooter>
					</Card>
				</div>
			</div>
		</section>
	);
}
