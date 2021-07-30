/** @format */

import Work from '../components/workdetails';

export default function work() {
	return (
		<>
			<main className="work">
				<section className="work-section">
					<h2> Works 🔨</h2>
					<article>
						<p>
							A collection of my designs and front-end Projects. These are a mix of freelance, practice
							and personal projects.
						</p>
					</article>
				</section>

				<Work />
			</main>
		</>
	);
}
