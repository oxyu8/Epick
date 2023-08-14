import { HTTPClient } from '@src/services/HTTPClient';

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.selectedText) {
    const selectedText = message.selectedText;
    const httpClient = new HTTPClient();
    httpClient.get(selectedText);
  }
});
