/** @format */

import { Footer } from '../components/Footer';
import Work from '../components/workdetails';

export default function work({ data }) {
	return (
		<>
			<main className="work">
				<section className="work-section">
					<h2> WHAT HAVE I DONE 🔨</h2>
					<article>
						<p>
							A collection of my designs and front-end Projects. These are a mix of freelance, practice
							and personal projects.
						</p>
					</article>
				</section>
				<Work result={data.result} />
				<Footer />
			</main>
		</>
	);
}

export async function getStaticProps() {
	const query = encodeURIComponent(`*[_type == "work"] | order(_createdAt asc){
	_id,
	projecttype,
	title,
	image{asset},
	description,
	technology,
	workurl,
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
			revalidate: 10, // In seconds
		};
}
