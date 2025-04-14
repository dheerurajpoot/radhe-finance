import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
	return (
		<footer className='w-full border-t bg-gradient-to-b from-white to-green-50'>
			<div className='container mx-auto px-4 md:px-6 py-12'>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
					<div className='space-y-4'>
						<Link href='/' className='flex items-center space-x-2'>
							<span className='text-2xl font-bold text-primary'>
								SMM Garden
							</span>
						</Link>
						<p className='text-sm text-muted-foreground'>
							Providing business loans to help your business grow
							since 2010.
						</p>
						<div className='flex space-x-4'>
							<Link
								href='#'
								className='text-muted-foreground hover:text-primary'>
								<Facebook className='h-5 w-5' />
								<span className='sr-only'>Facebook</span>
							</Link>
							<Link
								href='#'
								className='text-muted-foreground hover:text-primary'>
								<Twitter className='h-5 w-5' />
								<span className='sr-only'>Twitter</span>
							</Link>
							<Link
								href='#'
								className='text-muted-foreground hover:text-primary'>
								<Instagram className='h-5 w-5' />
								<span className='sr-only'>Instagram</span>
							</Link>
							<Link
								href='#'
								className='text-muted-foreground hover:text-primary'>
								<Linkedin className='h-5 w-5' />
								<span className='sr-only'>LinkedIn</span>
							</Link>
						</div>
					</div>
					<div className='space-y-4'>
						<h3 className='text-sm font-medium text-primary'>
							Company
						</h3>
						<ul className='space-y-2'>
							<li>
								<Link
									href='/about'
									className='text-sm text-muted-foreground hover:text-primary'>
									About Us
								</Link>
							</li>
							<li>
								<Link
									href='/services'
									className='text-sm text-muted-foreground hover:text-primary'>
									Services
								</Link>
							</li>
							<li>
								<Link
									href='/contact'
									className='text-sm text-muted-foreground hover:text-primary'>
									Contact Us
								</Link>
							</li>
						</ul>
					</div>
					<div className='space-y-4'>
						<h3 className='text-sm font-medium text-primary'>
							Resources
						</h3>
						<ul className='space-y-2'>
							<li>
								<Link
									href='/refund'
									className='text-sm text-muted-foreground hover:text-primary'>
									Refund
								</Link>
							</li>
							<li>
								<Link
									href='/terms'
									className='text-sm text-muted-foreground hover:text-primary'>
									Terms & Conditions
								</Link>
							</li>
							<li>
								<Link
									href='/privacy'
									className='text-sm text-muted-foreground hover:text-primary'>
									Privacy Policy
								</Link>
							</li>
						</ul>
					</div>
					<div className='space-y-4'>
						<h3 className='text-sm font-medium text-primary'>
							Contact
						</h3>
						<ul className='space-y-2'>
							<li className='text-sm text-muted-foreground'>
								123 Finance Street, Mumbai, India
							</li>
							<li className='text-sm text-muted-foreground'>
								info@radhefinance.com
							</li>
							<li className='text-sm text-muted-foreground'>
								+91 98765 43210
							</li>
						</ul>
					</div>
				</div>
				<div className='mt-12 border-t border-green-100 pt-8 text-center text-sm text-muted-foreground'>
					© {new Date().getFullYear()} SMM Garden. All rights
					reserved.
				</div>
			</div>
		</footer>
	);
}
