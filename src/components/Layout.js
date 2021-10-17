/** @format */

import { Graineffect } from '../helpers/graineffect';
import Head from 'next/head';

const Layout = ({ title, description }) => {
	return (
		<>
			<Head>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				/****** Favicons ******/
				<link rel="icon" href="favicon/favicon.ico" />
				<link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
				/****** Primary Meta Tags ******/
				<title>{title}</title>
				<meta name="title" content="Ayush Gupta- Web developer" />
				<meta name="description" content={description} />
				<meta
					name="keywords"
					content="Ayush Gupta, ayush gupta, ayushgptaa, gupta, Portfolio, web developer, web dev, Html, Css, Javascript, Reactjs, Frontend, developer, Freelancing "
				/>
				/****** Open Graph / Facebook ******/
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://ayushguptaa.com" />
				<meta property="og:title" content="Ayush Gupta- Web developer " />
				<meta property="og:description" content={description} />
				<meta property="og:image" content="https://ayushguptaa.com/Ogimage.png" />
				/****** Twitter ******/
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://ayushguptaa.com" />
				<meta property="twitter:title" content="Ayush Gupta- Web developer " />
				<meta property="twitter:description" content={description} />
				<meta property="twitter:image" content="https://ayushguptaa.com/Ogimage.png" />
				<meta name="twitter:image:alt" content="Ayush Gupta- Web developer" />
				<meta name="twitter:creator" content="@ayushgptaa" />
				/****** Chrome, Firefox OS and Opera ******/
				<meta name="theme-color" content="#1c1c1c" />
				/******Windows Phone ******/
				<meta name="msapplication-navbutton-color" content="#1c1c1c" />
				/****** iOS Safari ******/
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
			</Head>
		</>
	);
};

export default Layout;
