chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;
	let videoId = url.slice(-11)
	chrome.tabs.update({url: 'http://youtube.com/embed/' + videoId});
	// use `url` here inside the callback because it's asynchronous!
});