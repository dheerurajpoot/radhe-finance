import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function HeroSection() {
	return (
		<section className='w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-green-50'>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-12 xl:grid-cols-[1fr_1fr]'>
					<div className='flex flex-col justify-center space-y-4'>
						<div className='inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 w-fit'>
							#1 Business Loan Provider in India
						</div>
						<div className='space-y-2'>
							<h1 className='text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
								Grow Your Business <br />
								<span className='text-primary'>
									With SMM Garden
								</span>
							</h1>
							<p className='max-w-[600px] text-muted-foreground md:text-xl'>
								Quick approvals, minimal documentation, and
								competitive rates to fuel your business growth.
							</p>
						</div>
						<div className='flex flex-col gap-2 min-[400px]:flex-row'>
							<Link
								href='#calculator'
								className='inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'>
								Calculate Your Loan
							</Link>
							<Link
								href='/apply'
								className='inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'>
								Apply Now{" "}
								<ArrowRight className='ml-2 h-4 w-4' />
							</Link>
						</div>
						<div className='grid grid-cols-1 gap-2 sm:grid-cols-2 mt-6'>
							<div className='flex items-center space-x-2'>
								<CheckCircle2 className='h-5 w-5 text-primary' />
								<span className='text-sm font-medium'>
									Quick Approval in 48 Hours
								</span>
							</div>
							<div className='flex items-center space-x-2'>
								<CheckCircle2 className='h-5 w-5 text-primary' />
								<span className='text-sm font-medium'>
									Minimal Documentation
								</span>
							</div>
							<div className='flex items-center space-x-2'>
								<CheckCircle2 className='h-5 w-5 text-primary' />
								<span className='text-sm font-medium'>
									Competitive Interest Rates
								</span>
							</div>
							<div className='flex items-center space-x-2'>
								<CheckCircle2 className='h-5 w-5 text-primary' />
								<span className='text-sm font-medium'>
									Flexible Repayment Options
								</span>
							</div>
						</div>
					</div>
					<div className='flex items-center justify-center lg:justify-end'>
						<div className='relative'>
							<div className='absolute -top-4 -left-4 h-72 w-72 rounded-full bg-green-100 blur-3xl opacity-70'></div>
							<div className='relative z-10 overflow-hidden rounded-2xl shadow-2xl'>
								<Image
									src='/loan.jpg?height=600&width=600'
									alt='Business Growth'
									width={600}
									height={600}
									className='object-cover w-full h-full'
								/>
								<div className='absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent mix-blend-overlay'></div>
								<div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white'>
									<div className='space-y-2'>
										<h3 className='text-xl font-bold'>
											Business Growth Loan
										</h3>
										<p className='text-sm opacity-90'>
											Loans up to ₹1 Crore with interest
											rates starting at 12%
										</p>
										<Link href='/apply'>
											<Button
												variant='outline'
												className='bg-white text-primary hover:bg-white/90'>
												Apply Now
											</Button>
										</Link>
									</div>
								</div>
							</div>
							<div className='absolute -bottom-6 -right-6 h-48 w-48 rounded-full bg-green-200 blur-2xl opacity-70'></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
