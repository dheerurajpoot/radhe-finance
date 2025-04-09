import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function TermsPage() {
	return (
		<div className='container mx-auto max-w-4xl py-12'>
			<Card className='border-green-100 shadow-lg'>
				<CardHeader className='bg-gradient-to-r from-green-50 to-white border-b border-green-100'>
					<CardTitle className='text-primary'>
						Terms and Conditions
					</CardTitle>
				</CardHeader>
				<CardContent className='space-y-6 pt-6'>
					<div className='space-y-4'>
						<h2 className='text-xl font-semibold'>
							1. Introduction
						</h2>
						<p className='text-muted-foreground'>
							Welcome to Radhe Finance. By accessing our website
							and using our services, you agree to be bound by
							these Terms and Conditions.
						</p>
					</div>

					<div className='space-y-4'>
						<h2 className='text-xl font-semibold'>
							2. Loan Application
						</h2>
						<p className='text-muted-foreground'>
							By submitting a loan application, you confirm that
							all information provided is accurate and complete.
							We reserve the right to verify any information
							provided and to reject any application at our
							discretion.
						</p>
					</div>

					<div className='space-y-4'>
						<h2 className='text-xl font-semibold'>
							3. Application Fee
						</h2>
						<p className='text-muted-foreground'>
							A non-refundable application fee of ₹199 is required
							to process your loan application. This fee covers
							administrative costs and does not guarantee loan
							approval.
						</p>
					</div>

					<div className='space-y-4'>
						<h2 className='text-xl font-semibold'>4. Privacy</h2>
						<p className='text-muted-foreground'>
							We are committed to protecting your privacy. Please
							review our{" "}
							<Link
								href='/privacy'
								className='text-primary hover:underline'>
								Privacy Policy
							</Link>{" "}
							for details on how we handle your personal
							information.
						</p>
					</div>

					<div className='space-y-4'>
						<h2 className='text-xl font-semibold'>
							5. Refund Policy
						</h2>
						<p className='text-muted-foreground'>
							The application fee is non-refundable. For more
							details, please review our{" "}
							<Link
								href='/refund'
								className='text-primary hover:underline'>
								Refund Policy
							</Link>
							.
						</p>
					</div>

					<div className='space-y-4'>
						<h2 className='text-xl font-semibold'>
							6. Changes to Terms
						</h2>
						<p className='text-muted-foreground'>
							We reserve the right to modify these terms at any
							time. Changes will be effective immediately upon
							posting to our website.
						</p>
					</div>

					<div className='flex justify-center pt-4'>
						<Button asChild>
							<Link href='/apply'>Back to Application</Link>
						</Button>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
