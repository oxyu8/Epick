document.addEventListener('mouseup', () => {
  const selection = window.getSelection();
  if (selection === undefined || selection === null) {
    return;
  }
  if (selection.toString().length > 0) {
    const selectedText = selection.toString();
    console.log(selectedText);
    chrome.runtime.sendMessage({ selectedText });
  }
});
