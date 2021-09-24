export const Homepganimation = () => {
	const t1 = gsap.timeline({ delay: 0.2, ease: 'power1.out' });
	t1.from('.header', {
		y: -100,
		duration: 1,
		opacity: 0,
	})
		.from('.social-icons', {
			y: 100,
			duration: 0.8,
			opacity: 0,
		})
		.from('.mainpagetext', {
			y: 100,
			duration: 1,
			ease: 'power1.out',
			opacity: 0,
		});
};

export const Aboutpganimation = () => {
	const t2 = gsap.timeline({ delay: 0.2, ease: 'power1.out' });
	t2.from('.aboutmetext h1', {
		y: 100,
		duration: 0.8,
		opacity: 0,
		autoAlpha: 0,
	}).from('.aboutmetext article', {
		y: 100,
		duration: 0.8,
		opacity: 0,
		stagger: 0.1,
		autoAlpha: 0,
	});
};

export const Workpganimations = () => {
	gsap.registerPlugin(ScrollTrigger);
	const workinfo = () => {
		const workinfo = gsap.utils.toArray('.work-wrapper');
		workinfo.forEach(work => {
			gsap.from(work, {
				autoAlpha: 0,
				scrollTrigger: work,
				ease: 'power1.out',
				delay: 0.2,
				y: 100,
				duration: 0.6,
				opacity: 0,
			});
		});
	};
	const t3 = gsap.timeline({ delay: 0.5, ease: 'power1.out', onComplete: workinfo });
	t3.from('.work-section h1', {
		y: 100,
		duration: 0.8,
		opacity: 0,
		autoAlpha: 0,
	}).from('.work-section article', {
		y: 100,
		duration: 0.8,
		opacity: 0,
		autoAlpha: 0,
	});
};
