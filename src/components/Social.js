import { useEffect, useRef } from 'react';

const Sociallinks = [
	{ url: 'https://www.instagram.com/ayushgptaa/', name: 'Ig', label: 'Instagram' },
	{ url: 'https://github.com/ayushgptaa', name: 'Git', label: 'Github' },
	{ url: 'https://www.linkedin.com/in/ayush-gupta-54a855139/', name: 'Li', label: 'Linkedin' },
	{ url: 'https://twitter.com/ayushgptaa', name: 'Tw', label: 'Twitter' },
];
export const Social = () => {
	const socialicons = useRef();
	useEffect(() => {
		socialicons.current.style.visibility = 'visible';
	}, []);
	return (
		<section className="social-icons" ref={socialicons}>
			{Sociallinks.map(({ url, name, label }, index) => (
				<a href={url} target="_blank" rel="noopener" key={index} aria-label={label}>
					{name}
				</a>
			))}
		</section>
	);
};
