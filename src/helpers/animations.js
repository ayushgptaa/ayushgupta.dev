export const Homepganimation = () => {
	const t1 = gsap.timeline({ ease: 'power4.out', delay: 0.2 });
	t1.from('.header', {
		autoAlpha: 0,
		y: -100,
		duration: 0.8,
		opacity: 0,
	})
		.from('.social-icons', {
			y: 100,
			duration: 0.8,
			opacity: 0,
			autoAlpha: 0,
			delay: '-0.5',
		})
		.from('.mainpagetext, .container_404', {
			y: 100,
			duration: 1,
			ease: 'power4.out',
			opacity: 0,
			autoAlpha: 0,
		});
};

export const Aboutpganimation = () => {
	const t2 = gsap.timeline({ ease: 'power4.out', opacity: 0, duration: 0.8 });
	t2.from('.aboutmetext h1', {
		y: 50,
		autoAlpha: 0,
	})
		.from('.aboutmetext article', {
			y: 50,
			stagger: 0.2,
			autoAlpha: 0,
		})
		.from('.contact', {
			y: 50,
			autoAlpha: 0,
		});
};

export const Workpganimations = () => {
	gsap.registerPlugin(ScrollTrigger);
	const workinfo = gsap.utils.toArray('.work-wrapper');
	workinfo.forEach(work => {
		gsap.from(work, {
			scrollTrigger: {
				trigger: work,
			},
			ease: 'power1.out',
			delay: 0.2,
			duration: 0.8,
			y: 50,
			opacity: 0,
		});
	});
};
