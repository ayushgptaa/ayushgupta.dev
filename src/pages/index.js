import Link from 'next/link';

export default function Home() {
	return (
		<>
			<main className="index">
				<section className="mainpagetext">
					<h1>Ayush Gupta</h1>
					<article className="mainpagetextpara">
						<p>
							I'm a self taught web developer specializing in building & occasionally
							designing clean websites.
						</p>
					</article>
					<div className="aboutme">
						<a href="/about" className="about-tag">
							<p> More about me</p>
							<div>
								<span></span>
								<i
									className="fas fa-angle-right arrowbtnlogo "
									id="arrowbtnlogo"></i>
							</div>
						</a>
					</div>
				</section>
			</main>
			<footer className="social-icons">
				<a href="https://www.instagram.com/_ayushguptaa/" target="_blank" rel="noopener">
					<span>Ig</span>
				</a>
				<a href="https://github.com/Ayush6968" target="_blank" rel="noopener">
					<span>Git</span>
				</a>
				<a
					href="https://www.linkedin.com/in/ayush-gupta-54a855139/"
					target="_blank"
					rel="noopener">
					Li
				</a>
				<a href="https://twitter.com/ayuxhg" target="_blank" rel="noopener">
					Tw
				</a>
			</footer>
		</>
	);
}
