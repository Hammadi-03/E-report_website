// Project JavaScript entry
// Initializes libraries and contains any site-wide JS
document.addEventListener('DOMContentLoaded', function () {
	// Initialize AOS if available
	if (window.AOS && typeof AOS.init === 'function') {
		AOS.init({ duration: 800, once: true });
	}

	// Add other page-level JS below (example: navbar behavior)
	// Example: close mobile navbar after clicking a link
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
