mui("body").on("tap", "a", function(e) {
	var t = this;
	if (t.href && t.href.indexOf(".html") > 0) {
		var href = t.getAttribute('href');
		mui.openWindow({
			url: href,
			id: href,
			waiting:{
				title:'努力加载中...'
			}
		})
		mui.preventDefault(e);
	}
});
