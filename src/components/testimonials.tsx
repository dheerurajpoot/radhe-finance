import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function Testimonials() {
	return (
		<section className='w-full py-12 md:py-24 lg:py-32 bg-primary/5'>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='flex flex-col items-center justify-center space-y-4 text-center'>
					<div className='space-y-2'>
						<div className='inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground'>
							Testimonials
						</div>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
							What Our Clients Say
						</h2>
						<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
							Don&apos;t just take our word for it. Here&apos;s
							what businesses like yours have to say about Radhe
							Finance.
						</p>
					</div>
				</div>
				<div className='mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3'>
					<Card>
						<CardHeader className='pb-2'>
							<div className='flex items-center gap-4'>
								<Avatar>
									<AvatarImage
										src='/placeholder.svg?height=40&width=40'
										alt='Avatar'
									/>
									<AvatarFallback>RK</AvatarFallback>
								</Avatar>
								<div>
									<h3 className='text-lg font-bold'>
										Rajesh Kumar
									</h3>
									<p className='text-sm text-muted-foreground'>
										Textile Manufacturing, Mumbai
									</p>
								</div>
							</div>
						</CardHeader>
						<CardContent>
							<p className='text-muted-foreground'>
								&quot;SMM Garden helped me expand my textile
								business with a quick and hassle-free loan.
								Their team was supportive throughout the
								process, and I received the funds within 3
								days.&quot;
							</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader className='pb-2'>
							<div className='flex items-center gap-4'>
								<Avatar>
									<AvatarImage
										src='/placeholder.svg?height=40&width=40'
										alt='Avatar'
									/>
									<AvatarFallback>SP</AvatarFallback>
								</Avatar>
								<div>
									<h3 className='text-lg font-bold'>
										Sunita Patel
									</h3>
									<p className='text-sm text-muted-foreground'>
										Restaurant Chain, Delhi
									</p>
								</div>
							</div>
						</CardHeader>
						<CardContent>
							<p className='text-muted-foreground'>
								&quot;When I needed capital to open my third
								restaurant location, SMM Garden offered me the
								best terms with minimal documentation. Their
								customer service is exceptional!&quot;
							</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader className='pb-2'>
							<div className='flex items-center gap-4'>
								<Avatar>
									<AvatarImage
										src='/placeholder.svg?height=40&width=40'
										alt='Avatar'
									/>
									<AvatarFallback>AK</AvatarFallback>
								</Avatar>
								<div>
									<h3 className='text-lg font-bold'>
										Amit Khanna
									</h3>
									<p className='text-sm text-muted-foreground'>
										Tech Startup, Bangalore
									</p>
								</div>
							</div>
						</CardHeader>
						<CardContent>
							<p className='text-muted-foreground'>
								&quot;As a growing tech startup, we needed funds
								quickly to seize a market opportunity. Radhe
								Finance understood our urgency and provided the
								loan in record time.&quot;
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
