import '../../styles/main.scss';
import { Header } from '../components/Header';
import Script from 'next/script';
import { Homepganimation } from '../helpers/animations';
import useLayoutEffect from '../helpers/use-isomorphic-layout-effect';
import { setheight } from '../helpers/setheight';

function MyApp({ Component, pageProps }) {
	useLayoutEffect(() => {
		setheight();
		Homepganimation();
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
			<Header />
			<Component {...pageProps}></Component>
		</>
	);
}

export default MyApp;
