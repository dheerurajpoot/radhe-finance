import Image from "next/image";

export function WhyChooseUs() {
	return (
		<section className='w-full py-12 md:py-24 lg:py-32'>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-12'>
					<div className='flex flex-col justify-center space-y-4'>
						<div className='space-y-2'>
							<div className='inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground'>
								Our Approach
							</div>
							<h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
								We understand the unique needs of Indian
								businesses
							</h2>
							<p className='max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
								At SMM Garden, we&apos;ve been supporting Indian
								businesses for over a decade. Our deep
								understanding of the local market allows us to
								offer tailored financial solutions.
							</p>
						</div>
						<ul className='grid gap-6'>
							<li>
								<div className='grid gap-1'>
									<h3 className='text-xl font-bold'>
										Industry Expertise
									</h3>
									<p className='text-muted-foreground'>
										We specialize in providing loans to
										businesses across various sectors
										including manufacturing, retail,
										services, and more.
									</p>
								</div>
							</li>
							<li>
								<div className='grid gap-1'>
									<h3 className='text-xl font-bold'>
										Transparent Process
									</h3>
									<p className='text-muted-foreground'>
										No hidden fees or charges. We believe in
										complete transparency throughout the
										loan process.
									</p>
								</div>
							</li>
							<li>
								<div className='grid gap-1'>
									<h3 className='text-xl font-bold'>
										Customer-Centric Approach
									</h3>
									<p className='text-muted-foreground'>
										Our customer satisfaction rate of 98%
										speaks to our commitment to providing
										exceptional service.
									</p>
								</div>
							</li>
						</ul>
					</div>
					<div className='flex items-center justify-center'>
						<div className='relative h-[450px] w-full overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 shadow-lg'>
							<Image
								src='/loan.jpg?height=450&width=600'
								alt='Business growth'
								width={600}
								height={450}
								className='object-cover w-full h-full'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
