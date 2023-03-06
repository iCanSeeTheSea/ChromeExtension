chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;
	if (url.includes('https://www.youtube.com/watch?v=')){
		let videoId = url.slice(32, 43)
		chrome.tabs.update({url: 'https://youtube.com/embed/' + videoId});
	}
});