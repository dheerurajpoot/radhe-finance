import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
	return (
		<main className='flex-1'>
			<section className='w-full py-12 md:py-24 lg:py-32 bg-primary/5'>
				<div className='container mx-auto px-4 md:px-6'>
					<div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
						<div className='flex flex-col justify-center space-y-4'>
							<div className='space-y-2'>
								<h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
									About Radhe Finance
								</h1>
								<p className='max-w-[600px] text-muted-foreground md:text-xl'>
									Empowering Indian businesses with the
									financial support they need to grow and
									succeed since 2010.
								</p>
							</div>
						</div>
						<div className='flex items-center justify-center'>
							<Image
								src='/placeholder.svg?height=400&width=600'
								alt='Radhe Finance Office'
								width={600}
								height={400}
								className='aspect-video overflow-hidden rounded-xl object-cover'
							/>
						</div>
					</div>
				</div>
			</section>

			<section className='w-full py-12 md:py-24 lg:py-32'>
				<div className='container mx-auto px-4 md:px-6'>
					<div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12'>
						<div className='flex flex-col justify-center space-y-4'>
							<div className='space-y-2'>
								<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
									Our Mission
								</h2>
								<p className='text-muted-foreground md:text-xl'>
									To provide accessible and affordable
									financial solutions to businesses across
									India, enabling them to achieve their full
									potential.
								</p>
							</div>
							<div className='space-y-2'>
								<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
									Our Vision
								</h2>
								<p className='text-muted-foreground md:text-xl'>
									To become the most trusted financial partner
									for businesses in India, known for our
									customer-centric approach and innovative
									solutions.
								</p>
							</div>
						</div>
						<div className='space-y-4'>
							<div className='grid gap-6'>
								<div className='flex items-start gap-4'>
									<div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary/10'>
										<span className='text-xl font-bold text-primary'>
											1
										</span>
									</div>
									<div className='space-y-1'>
										<h3 className='text-xl font-bold'>
											Customer First
										</h3>
										<p className='text-muted-foreground'>
											We prioritize our customers' needs
											and strive to exceed their
											expectations in every interaction.
										</p>
									</div>
								</div>
								<div className='flex items-start gap-4'>
									<div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary/10'>
										<span className='text-xl font-bold text-primary'>
											2
										</span>
									</div>
									<div className='space-y-1'>
										<h3 className='text-xl font-bold'>
											Integrity
										</h3>
										<p className='text-muted-foreground'>
											We conduct our business with the
											highest ethical standards and
											transparency.
										</p>
									</div>
								</div>
								<div className='flex items-start gap-4'>
									<div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary/10'>
										<span className='text-xl font-bold text-primary'>
											3
										</span>
									</div>
									<div className='space-y-1'>
										<h3 className='text-xl font-bold'>
											Innovation
										</h3>
										<p className='text-muted-foreground'>
											We continuously innovate to provide
											better financial solutions and
											streamlined processes.
										</p>
									</div>
								</div>
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
								Our Team
							</h2>
							<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
								Meet the experienced professionals behind Radhe
								Finance.
							</p>
						</div>
					</div>
					<div className='mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3'>
						<div className='flex flex-col items-center space-y-4'>
							<Image
								src='/placeholder.svg?height=200&width=200'
								alt='Team Member'
								width={200}
								height={200}
								className='rounded-full object-cover'
							/>
							<div className='space-y-2 text-center'>
								<h3 className='text-xl font-bold'>
									Rajesh Sharma
								</h3>
								<p className='text-sm text-muted-foreground'>
									Founder & CEO
								</p>
							</div>
						</div>
						<div className='flex flex-col items-center space-y-4'>
							<Image
								src='/placeholder.svg?height=200&width=200'
								alt='Team Member'
								width={200}
								height={200}
								className='rounded-full object-cover'
							/>
							<div className='space-y-2 text-center'>
								<h3 className='text-xl font-bold'>
									Priya Patel
								</h3>
								<p className='text-sm text-muted-foreground'>
									Chief Financial Officer
								</p>
							</div>
						</div>
						<div className='flex flex-col items-center space-y-4'>
							<Image
								src='/placeholder.svg?height=200&width=200'
								alt='Team Member'
								width={200}
								height={200}
								className='rounded-full object-cover'
							/>
							<div className='space-y-2 text-center'>
								<h3 className='text-xl font-bold'>
									Vikram Singh
								</h3>
								<p className='text-sm text-muted-foreground'>
									Head of Operations
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='w-full py-12 md:py-24 lg:py-32'>
				<div className='container mx-auto px-4 md:px-6'>
					<div className='flex flex-col items-center justify-center space-y-4 text-center'>
						<div className='space-y-2'>
							<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
								Ready to Get Started?
							</h2>
							<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
								Apply for a business loan today and take the
								first step towards growing your business.
							</p>
						</div>
						<div className='flex flex-col gap-2 min-[400px]:flex-row'>
							<Link href='/apply'>
								<Button size='lg'>Apply Now</Button>
							</Link>
							<Link href='/contact'>
								<Button variant='outline' size='lg'>
									Contact Us
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
