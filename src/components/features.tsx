import {
	Building,
	Clock,
	CreditCard,
	FileText,
	Landmark,
	ShieldCheck,
} from "lucide-react";

export function Features() {
	return (
		<section className='w-full py-12 md:py-24 lg:py-32 bg-muted'>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='flex flex-col items-center justify-center space-y-4 text-center'>
					<div className='space-y-2'>
						<div className='inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground'>
							Features
						</div>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
							Why Choose SMM Garden?
						</h2>
						<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
							We offer a range of business loan solutions tailored
							to your specific needs.
						</p>
					</div>
				</div>
				<div className='mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3'>
					<div className='flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm'>
						<div className='rounded-full bg-primary/10 p-3'>
							<Clock className='h-6 w-6 text-primary' />
						</div>
						<h3 className='text-xl font-bold'>Quick Approval</h3>
						<p className='text-center text-muted-foreground'>
							Get your loan approved within 48 hours with our
							streamlined application process.
						</p>
					</div>
					<div className='flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm'>
						<div className='rounded-full bg-primary/10 p-3'>
							<FileText className='h-6 w-6 text-primary' />
						</div>
						<h3 className='text-xl font-bold'>
							Minimal Documentation
						</h3>
						<p className='text-center text-muted-foreground'>
							We require minimal paperwork, making the loan
							application process hassle-free.
						</p>
					</div>
					<div className='flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm'>
						<div className='rounded-full bg-primary/10 p-3'>
							<CreditCard className='h-6 w-6 text-primary' />
						</div>
						<h3 className='text-xl font-bold'>
							Flexible Repayment
						</h3>
						<p className='text-center text-muted-foreground'>
							Choose from a variety of repayment options that suit
							your business cash flow.
						</p>
					</div>
					<div className='flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm'>
						<div className='rounded-full bg-primary/10 p-3'>
							<Building className='h-6 w-6 text-primary' />
						</div>
						<h3 className='text-xl font-bold'>No Collateral</h3>
						<p className='text-center text-muted-foreground'>
							Unsecured business loans available with no
							collateral required for eligible businesses.
						</p>
					</div>
					<div className='flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm'>
						<div className='rounded-full bg-primary/10 p-3'>
							<Landmark className='h-6 w-6 text-primary' />
						</div>
						<h3 className='text-xl font-bold'>Competitive Rates</h3>
						<p className='text-center text-muted-foreground'>
							We offer some of the most competitive interest rates
							in the market for business loans.
						</p>
					</div>
					<div className='flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm'>
						<div className='rounded-full bg-primary/10 p-3'>
							<ShieldCheck className='h-6 w-6 text-primary' />
						</div>
						<h3 className='text-xl font-bold'>Dedicated Support</h3>
						<p className='text-center text-muted-foreground'>
							Our team of financial experts is always available to
							assist you throughout the loan process.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
