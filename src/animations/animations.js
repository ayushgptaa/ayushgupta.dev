export const Homepganimation = () => {
	const t1 = gsap.timeline({ ease: 'power4.out' });
	t1.from('.header', {
		y: -100,
		duration: 0.8,
		opacity: 0,
	})
		.from('.social-icons', {
			y: 10,
			duration: 0.8,
			opacity: 0,
			autoAlpha: 0,
		})
		.from('.mainpagetext', {
			y: 10,
			duration: 0.8,
			ease: 'power4.out',
			opacity: 0,
			autoAlpha: 0,
		});
};

export const Aboutpganimation = () => {
	const t2 = gsap.timeline({ ease: 'power4.out', opacity: 0, duration: 0.8 });
	t2.from('.aboutmetext h1', {
		y: 10,
		autoAlpha: 0,
	})
		.from('.aboutmetext article', {
			y: 10,
			stagger: 0.1,
			autoAlpha: 0,
		})
		.from('.contact', {
			y: 50,
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
				delay: 0.1,
				y: 50,
				duration: 0.6,
				opacity: 0,
			});
		});
	};
	const t3 = gsap.timeline({ ease: 'power4.out', onComplete: workinfo, opacity: 0, duration: 0.8 });
	t3.from('.work-section h1', {
		y: 10,
		autoAlpha: 0,
	}).from('.work-section article', {
		y: 10,
		autoAlpha: 0,
	});
};
