/** @format */

import Link from 'next/link';
import Layout from '../components/Layout';
import { Social } from '../components/Social';

export default function Home() {
	return (
		<>
			<Layout title="Ayush Gupta - Frontend developer 💅" />
			<main className="index">
				<section className="mainpagetext">
					<article className="mainpagetextpara">
						<h1>
							Hey!! 👋 I'm Ayush, a self taught web developer who loves building & sometimes designing
							things for web.
						</h1>
					</article>
					<div className="about-link">
						<Link href="/about" passhref className="about-tag">
							<a>
								<h2> More about me</h2>
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
