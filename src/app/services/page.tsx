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
import { CheckCircle } from "lucide-react";

export default function ServicesPage() {
	return (
		<main className='flex-1'>
			<section className='w-full py-12 md:py-24 lg:py-32 bg-primary/5'>
				<div className='container mx-auto px-4 md:px-6'>
					<div className='flex flex-col items-center justify-center space-y-4 text-center'>
						<div className='space-y-2'>
							<h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
								Our Business Loan Services
							</h1>
							<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
								Tailored financial solutions to meet the unique
								needs of your business.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className='w-full py-12 md:py-24 lg:py-32'>
				<div className='container mx-auto px-4 md:px-6'>
					<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
						<Card className='flex flex-col'>
							<CardHeader>
								<CardTitle>Business Expansion Loan</CardTitle>
								<CardDescription>
									For established businesses looking to grow
								</CardDescription>
							</CardHeader>
							<CardContent className='flex-1'>
								<ul className='space-y-2'>
									<li className='flex items-start gap-2'>
										<CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
										<span>Loan amount up to ₹1 Crore</span>
									</li>
									<li className='flex items-start gap-2'>
										<CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
										<span>
											Interest rates starting at 12% p.a.
										</span>
									</li>
									<li className='flex items-start gap-2'>
										<CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
										<span>Tenure up to 5 years</span>
									</li>
									<li className='flex items-start gap-2'>
										<CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
										<span>Minimal documentation</span>
									</li>
									<li className='flex items-start gap-2'>
										<CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
										<span>
											Quick approval within 48 hours
										</span>
									</li>
								</ul>
							</CardContent>
							<CardFooter>
								<Link href='/apply' className='w-full'>
									<Button className='w-full'>
										Apply Now
									</Button>
								</Link>
							</CardFooter>
						</Card>

						<Card className='flex flex-col'>
							<CardHeader>
								<CardTitle>Working Capital Loan</CardTitle>
								<CardDescription>
									For day-to-day operational expenses
								</CardDescription>
							</CardHeader>
							<CardContent className='flex-1'>
								<ul className='space-y-2'>
									<li className='flex items-start gap-2'>
										<CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
										<span>Loan amount up to ₹50 Lakhs</span>
									</li>
									<li className='flex items-start gap-2'>
										<CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
										<span>
											Interest rates starting at 14% p.a.
										</span>
									</li>
									<li className='flex items-start gap-2'>
										<CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
										<span>Flexible repayment options</span>
									</li>
									<li className='flex items-start gap-2'>
										<CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
										<span>No collateral required</span>
									</li>
									<li className='flex items-start gap-2'>
										<CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
										<span>Approval within 24 hours</span>
									</li>
								</ul>
							</CardContent>
							<CardFooter>
								<Link href='/apply' className='w-full'>
									<Button className='w-full'>
										Apply Now
									</Button>
								</Link>
							</CardFooter>
						</Card>

						<Card className='flex flex-col'>
							<CardHeader>
								<CardTitle>Equipment Financing</CardTitle>
								<CardDescription>
									For purchasing business equipment
								</CardDescription>
							</CardHeader>
							<CardContent className='flex-1'>
								<ul className='space-y-2'>
									<li className='flex items-start gap-2'>
										<CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
										<span>Loan amount up to ₹75 Lakhs</span>
									</li>
									<li className='flex items-start gap-2'>
										<CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
										<span>
											Interest rates starting at 13% p.a.
										</span>
									</li>
									<li className='flex items-start gap-2'>
										<CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
										<span>Tenure up to 7 years</span>
									</li>
									<li className='flex items-start gap-2'>
										<CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
										<span>Equipment as collateral</span>
									</li>
									<li className='flex items-start gap-2'>
										<CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
										<span>Quick processing time</span>
									</li>
								</ul>
							</CardContent>
							<CardFooter>
								<Link href='/apply' className='w-full'>
									<Button className='w-full'>
										Apply Now
									</Button>
								</Link>
							</CardFooter>
						</Card>
					</div>
				</div>
			</section>

			<section className='w-full py-12 md:py-24 lg:py-32 bg-muted'>
				<div className='container mx-auto px-4 md:px-6'>
					<div className='flex flex-col items-center justify-center space-y-4 text-center'>
						<div className='space-y-2'>
							<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
								Our Loan Process
							</h2>
							<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
								A simple and transparent process to get your
								business the funding it needs.
							</p>
						</div>
					</div>
					<div className='mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4'>
						<div className='flex flex-col items-center space-y-4 text-center'>
							<div className='flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground'>
								1
							</div>
							<h3 className='text-xl font-bold'>Apply Online</h3>
							<p className='text-muted-foreground'>
								Fill out our simple online application form with
								your business details.
							</p>
						</div>
						<div className='flex flex-col items-center space-y-4 text-center'>
							<div className='flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground'>
								2
							</div>
							<h3 className='text-xl font-bold'>
								Document Submission
							</h3>
							<p className='text-muted-foreground'>
								Submit the required documents for verification
								and assessment.
							</p>
						</div>
						<div className='flex flex-col items-center space-y-4 text-center'>
							<div className='flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground'>
								3
							</div>
							<h3 className='text-xl font-bold'>Loan Approval</h3>
							<p className='text-muted-foreground'>
								Our team reviews your application and approves
								your loan.
							</p>
						</div>
						<div className='flex flex-col items-center space-y-4 text-center'>
							<div className='flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground'>
								4
							</div>
							<h3 className='text-xl font-bold'>Disbursement</h3>
							<p className='text-muted-foreground'>
								Receive the funds directly in your business bank
								account.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className='w-full py-12 md:py-24 lg:py-32'>
				<div className='container mx-auto px-4 md:px-6'>
					<div className='flex flex-col items-center justify-center space-y-4 text-center'>
						<div className='space-y-2'>
							<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
								Ready to Grow Your Business?
							</h2>
							<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
								Apply for a business loan today and take the
								first step towards achieving your business
								goals.
							</p>
						</div>
						<Link href='/apply'>
							<Button size='lg'>Apply Now</Button>
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}
