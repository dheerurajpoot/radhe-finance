"use client";

import type React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
	return (
		<main className='flex-1'>
			<section className='w-full py-12 md:py-24 lg:py-32 bg-primary/5'>
				<div className='container mx-auto px-4 md:px-6'>
					<div className='flex flex-col items-center justify-center space-y-4 text-center'>
						<div className='space-y-2'>
							<h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
								Contact Us
							</h1>
							<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
								Have questions or need assistance? We&apos;re
								here to help.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className='w-full py-12 md:py-24 lg:py-32'>
				<div className='container mx-auto px-4 md:px-6'>
					<div className='space-y-6'>
						<div>
							<h2 className='text-3xl font-bold tracking-tighter'>
								Get in Touch
							</h2>
							<p className='text-muted-foreground mt-2'>
								Fill out the form and our team will get back to
								you within 24 hours.
							</p>
						</div>
						<div className='space-y-4'>
							<div className='flex items-start gap-4'>
								<Phone className='h-6 w-6 text-primary flex-shrink-0' />
								<div>
									<h3 className='font-bold'>Phone</h3>
									<p className='text-muted-foreground'>
										+91 98765 43210
									</p>
									<p className='text-muted-foreground'>
										Monday to Friday, 9am to 6pm IST
									</p>
								</div>
							</div>

							<div className='flex items-start gap-4'>
								<Mail className='h-6 w-6 text-primary flex-shrink-0' />
								<div>
									<h3 className='font-bold'>Email</h3>
									<p className='text-muted-foreground'>
										info@radhefinance.com
									</p>
									<p className='text-muted-foreground'>
										support@radhefinance.com
									</p>
								</div>
							</div>

							<div className='flex items-start gap-4'>
								<MapPin className='h-6 w-6 text-primary flex-shrink-0' />
								<div>
									<h3 className='font-bold'>
										Office Address
									</h3>
									<p className='text-muted-foreground'>
										123 Finance Street, Mumbai, Maharashtra,
										India - 400001
									</p>
								</div>
							</div>
						</div>

						<div className='rounded-lg border p-4'>
							<h3 className='font-bold mb-2'>Office Hours</h3>
							<div className='grid grid-cols-2 gap-2 text-sm'>
								<div>Monday - Friday</div>
								<div>9:00 AM - 6:00 PM</div>
								<div>Saturday</div>
								<div>10:00 AM - 2:00 PM</div>
								<div>Sunday</div>
								<div>Closed</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='w-full py-12 md:py-24 lg:py-32 bg-muted'>
				<div className='container mx-auto px-4 md:px-6'>
					<div className='flex flex-col items-center justify-center space-y-4 text-center'>
						<div className='space-y-2'>
							<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
								Frequently Asked Questions
							</h2>
							<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
								Find answers to common questions about our
								business loans.
							</p>
						</div>
					</div>
					<div className='mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2'>
						<Card>
							<CardHeader>
								<CardTitle>
									What documents are required for a business
									loan?
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className='text-muted-foreground'>
									Typically, you&apos;ll need to provide
									business registration documents, GST
									returns, bank statements for the last 6
									months, KYC documents of directors/partners,
									and ITR for the last 2 years.
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>
									How long does the loan approval process
									take?
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className='text-muted-foreground'>
									Our loan approval process is quick and
									efficient. Most applications are processed
									within 48 hours, with funds disbursed within
									3-5 business days after approval.
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>
									Is collateral required for all business
									loans?
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className='text-muted-foreground'>
									No, we offer both secured and unsecured
									business loans. Depending on your business
									profile and loan amount, you may qualify for
									an unsecured loan without any collateral.
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>
									What are the interest rates for business
									loans?
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className='text-muted-foreground'>
									Our interest rates start from 12% p.a. and
									vary based on factors such as loan amount,
									tenure, business profile, and credit
									history. Use our loan calculator to get an
									estimate.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>
		</main>
	);
}
