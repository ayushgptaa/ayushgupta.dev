import { useEffect } from 'react';
import '../../styles/main.scss';
import { Header } from '../components/Header';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		document.body.style.minHeight = window.innerHeight + 'px';
		window.addEventListener('resize', () => {
			document.body.style.minHeight = window.innerHeight + 'px';
			console.log(window.innerHeight);
		});
		// return () => {
		// 	window.removeEventListener('resize');
		// };
	}, []);
	return (
		<>
			<Layout></Layout>
			<Header />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
