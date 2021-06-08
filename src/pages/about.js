import React from 'react';
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
						<p>I love to keep things simple and minimal</p>
					</article>
					<article>
						<p>
							I strive to design interfaces and experiences that people can enjoy on
							all digital mediums.
						</p>
					</article>
					<article>
						<p>
							Some of the technologies I use are React, Nextjs, HTML5, CSS3, Sass,
							Javascript, figma for Front-end and Node.js, expressjs, firbase for
							back-end.
						</p>
					</article>
					<article>
						<p>
							Other than creating websites, i love to draw 🎨 watching anime 📺
							photography 📷 travelling 🗼 food 🍕 and learning Japanese 🎌.
						</p>
					</article>
				</section>
				<section className="contact">
					<marquee direction="left">
						<h3>Enough talk about me Let's talk about you ❤ </h3>
					</marquee>
					<h4>You can reach me here 📧📞</h4>
					<h4>
						<a href="mailto:ayush.gupta.jk@gmail.com">Email</a>
					</h4>
				</section>
			</main>
		</>
	);
}
