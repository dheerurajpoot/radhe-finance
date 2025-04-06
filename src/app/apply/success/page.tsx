import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function SuccessPage() {
	return (
		<div className='container mx-auto max-w-4xl py-12'>
			<div className='flex flex-col items-center justify-center space-y-4 text-center'>
				<div className='rounded-full bg-green-100 p-3'>
					<CheckCircle2 className='h-12 w-12 text-primary' />
				</div>
				<div className='space-y-2'>
					<h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
						Application Submitted Successfully!
					</h1>
					<p className='max-w-[700px] text-muted-foreground md:text-xl/relaxed'>
						Thank you for applying for a business loan with Radhe
						Finance. Your application has been received.
					</p>
				</div>

				<div className='mt-8 w-full max-w-md rounded-lg border border-green-100 bg-gradient-to-r from-green-50 to-white p-6 shadow-lg'>
					<h2 className='mb-4 text-xl font-semibold text-primary'>
						What happens next?
					</h2>
					<ol className='space-y-4 text-left'>
						<li className='flex items-start gap-2'>
							<span className='flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground'>
								1
							</span>
							<div>
								<p className='font-medium'>
									Application Review
								</p>
								<p className='text-sm text-muted-foreground'>
									Our team will review your application within
									24 hours.
								</p>
							</div>
						</li>
						<li className='flex items-start gap-2'>
							<span className='flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground'>
								2
							</span>
							<div>
								<p className='font-medium'>
									Document Verification
								</p>
								<p className='text-sm text-muted-foreground'>
									We may contact you for additional documents
									if required.
								</p>
							</div>
						</li>
						<li className='flex items-start gap-2'>
							<span className='flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground'>
								3
							</span>
							<div>
								<p className='font-medium'>Loan Approval</p>
								<p className='text-sm text-muted-foreground'>
									Once approved, you'll receive a loan offer
									with detailed terms.
								</p>
							</div>
						</li>
						<li className='flex items-start gap-2'>
							<span className='flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground'>
								4
							</span>
							<div>
								<p className='font-medium'>Disbursement</p>
								<p className='text-sm text-muted-foreground'>
									After accepting the offer, funds will be
									disbursed to your account.
								</p>
							</div>
						</li>
					</ol>
				</div>

				<div className='mt-8 flex flex-col gap-4 sm:flex-row'>
					<Link href='/'>
						<Button variant='outline' className='border-green-200'>
							Return to Home
						</Button>
					</Link>
					<Link href='/contact'>
						<Button className='group'>
							Contact Support{" "}
							<ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
						</Button>
					</Link>
				</div>

				<div className='mt-8 rounded-lg border border-green-100 bg-green-50 p-4 text-center'>
					<p className='text-sm font-medium'>
						Application Reference ID:
					</p>
					<p className='text-lg font-bold text-primary'>
						{Math.random()
							.toString(36)
							.substring(2, 12)
							.toUpperCase()}
					</p>
					<p className='mt-2 text-xs text-muted-foreground'>
						Please save this ID for future reference
					</p>
				</div>
			</div>
		</div>
	);
}
