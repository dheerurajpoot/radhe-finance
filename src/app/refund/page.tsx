import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function RefundPage() {
	return (
		<div className='container mx-auto max-w-4xl py-12'>
			<Card className='border-green-100 shadow-lg'>
				<CardHeader className='bg-gradient-to-r from-green-50 to-white border-b border-green-100'>
					<CardTitle className='text-primary'>
						Refund Policy
					</CardTitle>
				</CardHeader>
				<CardContent className='space-y-6 pt-6'>
					<div className='space-y-4'>
						<h2 className='text-xl font-semibold'>
							1. Application Fee
						</h2>
						<p className='text-muted-foreground'>
							The application fee of ₹199 is a non-refundable
							processing fee that covers administrative costs
							associated with reviewing and processing your loan
							application.
						</p>
					</div>

					<div className='space-y-4'>
						<h2 className='text-xl font-semibold'>
							2. Non-Refundable Nature
						</h2>
						<p className='text-muted-foreground'>
							The application fee is non-refundable under any
							circumstances, including but not limited to:
						</p>
						<ul className='list-disc pl-6 text-muted-foreground'>
							<li>Loan application rejection</li>
							<li>Withdrawal of application</li>
							<li>Change of mind</li>
							<li>Technical issues during payment</li>
						</ul>
					</div>

					<div className='space-y-4'>
						<h2 className='text-xl font-semibold'>
							3. Payment Processing
						</h2>
						<p className='text-muted-foreground'>
							All payments are processed through secure payment
							gateways. Once the payment is processed, it cannot
							be reversed or refunded.
						</p>
					</div>

					<div className='space-y-4'>
						<h2 className='text-xl font-semibold'>
							4. Technical Issues
						</h2>
						<p className='text-muted-foreground'>
							In case of any technical issues during the payment
							process, please contact our support team
							immediately. We will investigate the issue and
							provide assistance, but the application fee remains
							non-refundable.
						</p>
					</div>

					<div className='space-y-4'>
						<h2 className='text-xl font-semibold'>
							5. Contact Information
						</h2>
						<p className='text-muted-foreground'>
							For any questions or concerns regarding payments or
							refunds, please contact our support team at:
						</p>
						<ul className='list-disc pl-6 text-muted-foreground'>
							<li>Email: support@radhefinance.com</li>
							<li>Phone: +91-XXXXXXXXXX</li>
							<li>
								Business Hours: Monday to Friday, 9 AM to 6 PM
							</li>
						</ul>
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
