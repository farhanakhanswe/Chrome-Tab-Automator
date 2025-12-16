const bulkUrls = [
    "https://www.google.com",
    "https://www.youtube.com/"
]

bulkUrls.forEach(url => {
    chrome.tabs.create({
        url: url
    });
});
