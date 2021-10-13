import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js" />
					<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/ScrollTrigger.min.js"></script>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
