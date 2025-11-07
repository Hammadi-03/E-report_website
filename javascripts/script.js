document.addEventListener('DOMContentLoaded', function () {
	// Initialize AOS 
	if (window.AOS && typeof AOS.init === 'function') {
		AOS.init({ duration: 800, once: true });
	}

	var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
	var bsCollapse = document.querySelector('.navbar-collapse');
	if (navLinks.length && bsCollapse) {
		navLinks.forEach(function (link) {
			link.addEventListener('click', function () {
				var bs = bootstrap.Collapse.getInstance(bsCollapse) || new bootstrap.Collapse(bsCollapse);
				bs.hide();
			});
		});
	}
});

