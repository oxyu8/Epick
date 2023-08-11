console.log('background');
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.selectedText) {
    console.log(message.selectedText);
  }
});
