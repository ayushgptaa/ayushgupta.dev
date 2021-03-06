import { useEffect } from 'react';
import '../../styles/main.scss';
import { Header } from '../components/Header';
import Script from 'next/script';
import { setheight } from '../helpers/setheight';
import { Graineffect } from '../helpers/graineffect';

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		setheight();
	}, []);
	return (
		<>
			{/* Global Site Tag (gtag.js) - Google Analytics */}
			<Script
				strategy="lazyOnload"
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
			/>
			<Script strategy="lazyOnload">
				{`
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
					page_path: window.location.pathname,
				});
				`}
			</Script>
			<Graineffect />
			<Header />
			<Component {...pageProps}></Component>
		</>
	);
}

export default MyApp;
