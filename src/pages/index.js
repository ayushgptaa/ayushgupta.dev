/** @format */
import Link from 'next/link';
import Layout from '../components/Layout';
import { Social } from '../components/Social';

export default function Home() {
	return (
		<>
			<Layout
				title="Ayush Gupta - Frontend developer 💅"
				description="Welcome to the portfolio Ayush Gupta, a creative web designer specializing in building things for web 🕸"
			/>
			<main className="home">
				<section className="mainpagetext">
					<article>
						<h1>Hey! I'm Ayush, a self-taught web developer who loves making stuff for the for the web.</h1>
					</article>
					<div className="about-link">
						<Link href="/about" passhref>
							<a>
								<h2> More about me</h2>
								<div className="arrowbtn-container">
									<div className="line"></div>
									<div className="arrowbtn"></div>
								</div>
							</a>
						</Link>
					</div>
				</section>
			</main>
			<Social />
		</>
	);
}
