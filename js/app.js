mui("body").on("tap", "a", function(e) {
	var t = this;
	if (t.href && t.href.indexOf(".html") > 0) {
		var href = t.getAttribute('href');
		mui.openWindow({
			url: href,
			id: href
		})
		mui.preventDefault(e);
	}
});