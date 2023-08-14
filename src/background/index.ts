import { OxfordAPI } from '@src/services/oxfordAPI';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.selectedText) {
    const selectedText = message.selectedText;
    const oxfordAPI = new OxfordAPI();
    const lexicalEntry = await oxfordAPI.getLexicalEntry(selectedText);
    console.log(lexicalEntry);
  }
});
