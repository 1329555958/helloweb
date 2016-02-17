//监听标签页
mui(".mui-bar").on('tap', '.mui-tab-item', function() {
	var href = this.getAttribute('href');
	mui.openWindow({
		url: href,
		id: href
	})
});