chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "enableRoast") {
    chrome.storage.local.set({ roastMode: true });
  }
  if (message.action === "disableRoast") {
    chrome.storage.local.set({ roastMode: false });
  }
});
