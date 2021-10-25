/** @format */

import React from 'react';
import Link from 'next/link';

export const Header = () => {
	return (
		<header className="header">
			<nav>
				<Link href="/" passHref>
					<a aria-label="Home page" className="nav-link">
						Ayush Gupta
					</a>
				</Link>
				<div>
					<Link href="/about" passHref>
						<a aria-label="About page " className="nav-link">
							About
						</a>
					</Link>
					<Link href="/work" passHref>
						<a aria-label="Work page" className="nav-link">
							Work
						</a>
					</Link>
				</div>
			</nav>
		</header>
	);
};
