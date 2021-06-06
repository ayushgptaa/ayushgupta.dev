import { Graineffect } from '../Graineffect/graineffect';
import Head from 'next/head';

const Layout = () => {
	return (
		<>
			<Head>
				<link
					rel="stylesheet"
					href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
					integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
					crossorigin="anonymous"
				/>
			</Head>
			<Graineffect />
		</>
	);
};

export default Layout;
