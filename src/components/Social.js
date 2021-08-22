/** @format */

import React from 'react';
``;
const Sociallinks = [
	{ url: 'https://www.instagram.com/_ayushguptaa/', name: 'Ig' },
	{ url: 'https://github.com/ayushgptaa', name: 'Git' },
	{ url: 'https://www.linkedin.com/in/ayush-gupta-54a855139/', name: 'Li' },
	{ url: 'https://twitter.com/ayushgptaa', name: 'Tw' },
];
export const Social = () => {
	return (
		<>
			<section className="social-icons">
				{Sociallinks.map(({ url, name }) => (
					<a href={url} target="_blank" rel="noopener">
						{name}
					</a>
				))}
			</section>
		</>
	);
};
