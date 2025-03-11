chrome.storage.local.get("roastMode", (data) => {
  if (data.roastMode) {
    document.body.innerHTML = document.body.innerHTML.replace(/\bchatgpt\b/gi, "Mooshrom AI");
    document.body.innerHTML = document.body.innerHTML.replace(/\byou\b/gi, "yo crusty self");
    document.body.innerHTML = document.body.innerHTML.replace(/\bgrammar\b/gi, "gramma broke");
  }
});
