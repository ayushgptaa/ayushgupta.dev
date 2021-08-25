/** @format */

import Link from 'next/link';
import Layout from '../components/Layout';
import { Social } from '../components/Social';

export default function Home() {
	return (
		<>
			<Layout title="Ayush Gupta - Home 🏠" />
			<main className="index">
				<section className="mainpagetext">
					<article className="mainpagetextpara">
						<p>
							Hey!! I'm Ayush, a self taught web developer who loves building & sometimes designing things
							for web👋
						</p>
					</article>
					<div className="about-link">
						<Link href="/about" passhref className="about-tag">
							<a>
								<p> More about me</p>
								<div className="arrowbtn-container">
									<div className="line"></div>
									<div className="right-arrowbtn"></div>
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
