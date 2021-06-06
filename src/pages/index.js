import Head from 'next/head';

export default function Home() {
	return (
		<>
			<main className="homepage">
				<div className="contentforhome">
					<div className="content">
						<div className="mainpagetext fade-in-bottom-text">
							<div className="mainpage-heading">
								<h3> web developer & designer</h3>
								<h1>Ayush Gupta</h1>
							</div>
							<div className="mainpagetextpara">
								<p>
									I'm a self taught web developer specializing in building &
									occasionally designing exceptional websites, applications, and
									everything in between.
								</p>
							</div>
							<div className="aboutme-homepage">
								<a href="/about" className="about-tag">
									<p> MORE ABOUT ME</p>
									<div className="hovereffect">
										<div className="right-arrow-btn "></div>
										<i
											className="fas fa-angle-right arrowbtnlogo "
											id="arrowbtnlogo"></i>
									</div>
								</a>
							</div>
							<div className="email-button-container">
								<a
									id="email-button"
									href="mailto:ayush.gupta.jk@gmail.com"
									target="_blank">
									Contact me
								</a>
							</div>
						</div>
						<div className="main-image fade-in-top">
							<div className="filter"></div>
							<div className="shape"></div>
						</div>
					</div>
				</div>
				<div className="social-icons">
					<a
						href="https://www.instagram.com/_ayushguptaa/"
						target="_blank"
						rel="noopener">
						<span>Ig</span>
					</a>
					<a href="https://github.com/Ayush6968" target="_blank" rel="noopener">
						<span>Git</span>
					</a>
					<a
						href="https://www.linkedin.com/in/ayush-gupta-54a855139/"
						target="_blank"
						rel="noopener"></a>
				</div>
			</main>
		</>
	);
}
