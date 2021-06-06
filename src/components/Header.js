import React from 'react';
import Link from 'next/link';

export const Header = () => {
	return (
		<header className="header">
			<nav>
				<Link href="/" passHref>
					<a>
						<h3>Ayush Gupta 👨‍💻</h3>
					</a>
				</Link>
				<div className="nav-links">
					<Link href="/about" passHref>
						<a>About</a>
					</Link>
					<Link href="/work" passHref>
						<a>Work</a>
					</Link>
					<Link href="/contact" passHref>
						<a>Contact</a>
					</Link>
				</div>
			</nav>
		</header>
	);
};
