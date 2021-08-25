/** @format */
import Image from 'next/image';
import Layout from '../components/Layout';
import { Social } from '../components/Social';
import Link from 'next/link';

export default function Custom404() {
	return (
		<>
			<Layout title="404 - Page not found 😵" />
			<div className="container_404">
				<Image src="/panic-anime.gif" alt="Error - 404" width={400} height={220} objectFit="fill" />
				<h2>Looks like you're lost !</h2>
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
