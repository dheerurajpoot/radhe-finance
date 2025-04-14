"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<div className='container mx-auto px-4 md:px-6 flex h-16 items-center justify-between'>
				<Link href='/' className='flex items-center space-x-2'>
					<span className='text-2xl font-bold text-primary'>
						SMM Garden
					</span>
				</Link>
				<nav className='hidden md:flex gap-6'>
					<Link
						href='/'
						className='text-sm font-medium transition-colors hover:text-primary'>
						Home
					</Link>
					<Link
						href='/about'
						className='text-sm font-medium transition-colors hover:text-primary'>
						About Us
					</Link>
					<Link
						href='/services'
						className='text-sm font-medium transition-colors hover:text-primary'>
						Services
					</Link>
					<Link
						href='/contact'
						className='text-sm font-medium transition-colors hover:text-primary'>
						Contact
					</Link>
				</nav>
				<div className='hidden md:flex'>
					<Link href='/apply'>
						<Button>Apply Now</Button>
					</Link>
				</div>
				<Sheet open={isOpen} onOpenChange={setIsOpen}>
					<SheetTrigger asChild className='md:hidden'>
						<Button variant='outline' size='icon'>
							<Menu className='h-5 w-5' />
							<span className='sr-only'>Toggle menu</span>
						</Button>
					</SheetTrigger>
					<SheetContent side='right'>
						<nav className='flex flex-col px-8 gap-4 mt-8'>
							<Link
								href='/'
								className='text-sm font-medium transition-colors hover:text-primary'
								onClick={() => setIsOpen(false)}>
								Home
							</Link>
							<Link
								href='/about'
								className='text-sm font-medium transition-colors hover:text-primary'
								onClick={() => setIsOpen(false)}>
								About Us
							</Link>
							<Link
								href='/services'
								className='text-sm font-medium transition-colors hover:text-primary'
								onClick={() => setIsOpen(false)}>
								Services
							</Link>
							<Link
								href='/contact'
								className='text-sm font-medium transition-colors hover:text-primary'
								onClick={() => setIsOpen(false)}>
								Contact
							</Link>
							<Link
								href='/apply'
								onClick={() => setIsOpen(false)}>
								<Button className='w-full'>Apply Now</Button>
							</Link>
						</nav>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	);
}
