import '../../styles/main.scss';
import { Header } from '../components/Header';
import Script from 'next/script';
import { Homepganimation } from '../animations/animations';
import useLayoutEffect from '../components/use-isomorphic-layout-effect';

function MyApp({ Component, pageProps }) {
	useLayoutEffect(() => {
		document.body.style.minHeight = window.innerHeight + 'px';
		window.addEventListener('resize', () => {
			document.body.style.minHeight = window.innerHeight + 'px';
		});
		Homepganimation();
		return () => {
			window.removeEventListener('resize', () => {
				document.body.style.minHeight = window.innerHeight + 'px';
			});
		};
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
