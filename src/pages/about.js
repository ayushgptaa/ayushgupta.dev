/** @format */

import React from 'react';
import { Footer } from '../components/Footer';
import Layout from '../components/Layout';
import { Social } from '../components/Social';

export default function About() {
	return (
		<>
			<Layout title="Ayush Gupta - About" />
			<main className="about">
				<section className="aboutme">
					<h2>About me 👦</h2>
					<article>
						<p>I am Ayush Gupta a web developer who loves to create unique things for the web </p>
					</article>

					<article>
						<p>
							I love to keep things simple and minimal but at the same time I pay a lot of attention in
							details.
						</p>
					</article>
					<article>
						<p>
							Some of technologies I usually used are React.js, NextJS, HTML5, CSS3, Sass, JavaScript and
							Node.js and I design with Figma.
						</p>
					</article>
					<article>
						<p>
							With strong basics of front-end and UI/UX design and presently I am fixated on imporving
							back-end skills.
						</p>
					</article>

					<article>
						<p>
							Other than creating websites, I love to sketch 🎨 anime 📺 photography 📷 traveling 🗼 food
							🍕 and music 🎶.
						</p>
					</article>
				</section>
				<section className="contact">
					<h3>Enough about me </h3>
					<h3>Let's talk about you 🌹 </h3>

					<h4>You can reach me here </h4>
					<h5>
						<a href="mailto:ayush.gupta.jk@gmail.com">ayush.gupta.jk@gmail.com</a>
					</h5>
				</section>
				<Footer />
			</main>
		</>
	);
}
