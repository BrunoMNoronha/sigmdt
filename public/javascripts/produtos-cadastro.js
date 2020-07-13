window.onload = function () {
	var url = document.location.toString();
	console.log(url)
	if (url.match('#')) {
		$('.nav-tabs a[href="#' + url.split('#')[1] + '"]').tab('show');
	}
	
	$('.nav-tabs a[href="#' + url.split('#')[1] + '"]').on('shown', function (e) {
		window.location.hash = e.target.hash;
	});
} 