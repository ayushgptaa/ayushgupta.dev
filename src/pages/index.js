import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { Social } from '../components/Social';

export default function Home({ data }) {
	const { maintext } = data.result[0];
	return (
		<>
			<Layout
				title="Ayush Gupta - Frontend developer 💅"
				description="Welcome to the portfolio Ayush Gupta, a Frontend developer specializing in building web apps🕸"
			/>
			<main className="home">
				<section className="mainpagetext">
					<article>
						<h1>{maintext}</h1>
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

export async function getStaticProps() {
	const query = encodeURIComponent(`*[_type == "home"] {
	_id,
	maintext,
}`);
	const url = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.apicdn.sanity.io/v1/data/query/production?query=${query}`;
	const res = await fetch(url);
	const data = await res.json();
	if (!data)
		return {
			notFound: true,
		};
	else
		return {
			props: { data },
			revalidate: 3600,
		};
}
