import { Footer } from '../components/Footer';
import Layout from '../components/Layout';

export default function About({ data }) {
	// useEffect(() => {
	// 	Aboutpganimation();
	// }, []);

	const aboutme = data.result.map(({ _id, para }) => {
		return (
			<article key={_id}>
				<p>{para}</p>
			</article>
		);
	});

	return (
		<>
			<Layout
				title="Ayush Gupta - About me 💡"
				description="A little bit info about me - some of the technologies I use or work with and what I love to do other than creating websites ⚡"
			/>
			<main className="About">
				<section className="aboutmetext">
					<h1>About Me 🙋</h1>
					{aboutme}
				</section>
				<section className="contact">
					<h3>Enough about me </h3>
					<h3>Let's talk about you </h3>
					<h4>You can reach me here 📮 </h4>
					<h5>
						<a href="mailto:ayush.gupta.jk@gmail.com">ayush.gupta.jk@gmail.com</a>
					</h5>
				</section>
				<Footer />
			</main>
		</>
	);
}

export async function getStaticProps() {
	const query = encodeURIComponent(`*[_type == "about"] | order(order asc) {
  		_id,
 	para,
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
