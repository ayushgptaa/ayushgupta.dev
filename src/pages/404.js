/** @format */
import Image from 'next/image';
import Layout from '../components/Layout';
import { Social } from '../components/Social';
import Link from 'next/link';

export default function Custom404() {
	return (
		<>
			<Layout
				title="404 - Page not found 😵"
				description={'404- The page you are trying to find has been removed or does not exist'}
			/>
			<div className="container_404">
				<Image src="/404.gif" alt="Error - 404" width={350} height={190} objectFit="fill" />
				<h2>404 - Page Not Found</h2>
				<Link href="/" passHref>
					<button className="Homebtn" role="button" aria-label="Home button">
						Let's take you back to home :)
					</button>
				</Link>
			</div>
			<Social />
		</>
	);
}
