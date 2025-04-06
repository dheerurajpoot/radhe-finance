import Link from "next/link";
import { Calculator } from "@/components/calculator";
import { Features } from "@/components/features";
import { Testimonials } from "@/components/testimonials";
import { HeroSection } from "@/components/hero-section";
import { WhyChooseUs } from "@/components/why-choose-us";

export default function Home() {
	return (
		<main className='flex-1'>
			<HeroSection />
			<Calculator />
			<Features />
			<WhyChooseUs />
			<Testimonials />
			<section className='w-full py-12 md:py-24 lg:py-32 bg-primary/5'>
				<div className='container mx-auto px-4 md:px-6'>
					<div className='flex flex-col items-center justify-center space-y-4 text-center'>
						<div className='space-y-2'>
							<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
								Ready to Grow Your Business?
							</h2>
							<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
								Apply now for a business loan and get the funds
								you need to take your business to the next
								level.
							</p>
						</div>
						<Link
							href='/apply'
							className='inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'>
							Apply Now
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}
