/** @format */

const Sociallinks = [
	{ url: 'https://www.instagram.com/ayushgptaa/', name: 'Ig', label: 'Instagram' },
	{ url: 'https://github.com/ayushgptaa', name: 'Git', label: 'Github' },
	{ url: 'https://www.linkedin.com/in/ayush-gupta-54a855139/', name: 'Li', label: 'Linkedin' },
	{ url: 'https://twitter.com/ayushgptaa', name: 'Tw', label: 'Twitter' },
];
export const Social = () => {
	return (
		<section className="social-icons">
			{Sociallinks.map(({ url, name, label }, index) => (
				<a href={url} target="_blank" rel="noopener" key={index} aria-label={label} role="Social-links">
					{name}
				</a>
			))}
		</section>
	);
};
