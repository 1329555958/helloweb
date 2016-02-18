//监听标签页
mui(".mui-bar").on('tap', '.mui-tab-item', function() {
	var href = this.getAttribute('href');
	mui.openWindow({
		url: href,
		id: href
	})
});
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