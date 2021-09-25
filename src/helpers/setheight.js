export const setheight = () => {
	document.body.style.minHeight = window.innerHeight + 'px';
	window.addEventListener('resize', () => {
		document.body.style.minHeight = window.innerHeight + 'px';
	});
};
