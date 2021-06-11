import React from 'react';
import { Footer } from '../components/Footer';
import { Social } from '../components/Social';

export default function About() {
	return (
		<>
			<main className="about">
				<section className="aboutme">
					<h2>About me 👦</h2>
					<article>
						<p> I am a web developer based in India who loves making things for web.</p>
					</article>
					<article>
						<p>
							I love to keep things simple and minimal but at the same time i pay a
							lot of attention in details.
						</p>
					</article>
					<article>
						<p>
							I strive to design interfaces and experiences that people can enjoy on
							all digital mediums. I have a strong basics of front-end and ui/ux
							design and presently i am fixate towards imporving and learning back-end
							skills.
						</p>
					</article>
					<article>
						<p>
							Some of the technologies I use are <span>Reactjs,</span>{' '}
							<span>Nextjs, </span> <span>HTML5,</span> <span>CSS3,</span>{' '}
							<span>Sass,</span> <span>Javascript,</span> <span>figma</span> for
							Front-end and <span>Node.js,</span> <span>Express.js,</span>{' '}
							<span>firebase</span> for back-end.
						</p>
					</article>
					<article>
						<p>
							Other than creating websites, i love to sketching 🎨 anime 😻
							photography 📷 travelling 🗼 food 🍕 and music 🎶.
						</p>
					</article>
				</section>
				<section className="contact">
					{/* <marquee direction="left"> */}
					<h3>Enough about me </h3>
					<h3>Let's talk about you 🌹 </h3>

					<h4>You can reach me here ✉</h4>
					<h5>
						<a href="mailto:ayush.gupta.jk@gmail.com">ayush.gupta.jk@gmail.com</a>
					</h5>
				</section>
				<Footer />
			</main>
		</>
	);
}
