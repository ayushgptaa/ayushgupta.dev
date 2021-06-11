import { useEffect } from 'react';
import '../../styles/main.scss';
import { Header } from '../components/Header';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		document.body.style.minHeight = window.innerHeight + 'px';
		window.addEventListener('resize', () => {
			document.body.style.minHeight = window.innerHeight + 'px';
		});
		return () => {
			window.removeEventListener('resize', () => {
				document.body.style.minHeight = window.innerHeight + 'px';
			});
		};
	}, []);
	return (
		<>
			<Layout></Layout>
			<Header />
			<Component {...pageProps}></Component>
		</>
	);
}

export default MyApp;
