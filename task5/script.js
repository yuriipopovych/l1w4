var links, updatestate;

contentEl = document.querySelector('.content');

links = {
	main: 'The <strong>Main</strong> page',
	about: 'The <strong>About</strong> page',
	downloads: 'The <strong>Downloads</strong> page'
}

updatestate = function() {
	var content = links[location.hash.slice(1)];

	contentEl.innerHTML = content || 'Page not found';
}
window.addEventListener('hashchange', updatestate);
window.addEventListener('load', updatestate);