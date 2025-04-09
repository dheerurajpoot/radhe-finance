import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function PrivacyPage() {
	return (
		<div className='container mx-auto max-w-4xl py-12'>
			<Card className='border-green-100 shadow-lg'>
				<CardHeader className='bg-gradient-to-r from-green-50 to-white border-b border-green-100'>
					<CardTitle className='text-primary'>
						Privacy Policy
					</CardTitle>
				</CardHeader>
				<CardContent className='space-y-6 pt-6'>
					<div className='space-y-4'>
						<h2 className='text-xl font-semibold'>
							1. Information We Collect
						</h2>
						<p className='text-muted-foreground'>
							We collect personal information that you provide
							when applying for a loan, including:
						</p>
						<ul className='list-disc pl-6 text-muted-foreground'>
							<li>Full name</li>
							<li>Email address</li>
							<li>Phone number</li>
							<li>Address</li>
							<li>Loan amount requested</li>
						</ul>
					</div>

					<div className='space-y-4'>
						<h2 className='text-xl font-semibold'>
							2. How We Use Your Information
						</h2>
						<p className='text-muted-foreground'>
							We use your personal information to:
						</p>
						<ul className='list-disc pl-6 text-muted-foreground'>
							<li>Process your loan application</li>
							<li>Communicate with you about your application</li>
							<li>Verify your identity and information</li>
							<li>Improve our services</li>
						</ul>
					</div>

					<div className='space-y-4'>
						<h2 className='text-xl font-semibold'>
							3. Information Security
						</h2>
						<p className='text-muted-foreground'>
							We implement appropriate security measures to
							protect your personal information from unauthorized
							access, alteration, or disclosure.
						</p>
					</div>

					<div className='space-y-4'>
						<h2 className='text-xl font-semibold'>
							4. Third-Party Services
						</h2>
						<p className='text-muted-foreground'>
							We may share your information with third-party
							service providers who assist us in processing your
							application, such as payment processors and
							verification services.
						</p>
					</div>

					<div className='space-y-4'>
						<h2 className='text-xl font-semibold'>
							5. Cookies and Tracking
						</h2>
						<p className='text-muted-foreground'>
							We use cookies and similar tracking technologies to
							improve your experience on our website and to
							analyze website traffic.
						</p>
					</div>

					<div className='space-y-4'>
						<h2 className='text-xl font-semibold'>
							6. Your Rights
						</h2>
						<p className='text-muted-foreground'>
							You have the right to:
						</p>
						<ul className='list-disc pl-6 text-muted-foreground'>
							<li>Access your personal information</li>
							<li>Correct inaccurate information</li>
							<li>Request deletion of your information</li>
							<li>Opt-out of marketing communications</li>
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
