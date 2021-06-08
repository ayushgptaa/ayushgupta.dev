import Link from 'next/link';
import { Social } from '../components/Social';

export default function Home() {
	return (
		<>
			<main className="index">
				<section className="mainpagetext">
					<h1>Ayush Gupta</h1>
					<article className="mainpagetextpara">
						<p>
							I'm a self taught web developer who loves building & occasionally
							designing exceptional clean websites.
						</p>
					</article>
					<div className="aboutme">
						<Link href="/about" passhref className="about-tag">
							<a>
								<p> More about me</p>
								<div>
									<span></span>
									<i
										className="fas fa-angle-right arrowbtnlogo "
										id="arrowbtnlogo"></i>
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
