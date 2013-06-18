chrome.browserAction.onClicked.addListener(function(tab) {
  var tabUrl = tab.url;
  if (tabUrl.indexOf('http://') == 0) {
    tabUrl = 'https://' + tabUrl.substr(7);
  } else if (tabUrl.indexOf('https://') == 0) {
    tabUrl = 'http://' + tabUrl.substr(8);
  } else {
    return;
  }
  chrome.tabs.executeScript({
    code: 'window.location.href="' + tabUrl + '"'
  });
});