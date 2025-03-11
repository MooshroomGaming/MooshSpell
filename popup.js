document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('enable-roast').onclick = () => {
    chrome.runtime.sendMessage({ action: "enableRoast" });
    alert("🔥 Roast Mode Enabled!");
  };

  document.getElementById('disable-roast').onclick = () => {
    chrome.runtime.sendMessage({ action: "disableRoast" });
    alert("Roast Mode Disabled.");
  };

  document.getElementById('accept-btn').onclick = function () {
    chrome.runtime.sendMessage({ action: "acceptPrivacy" }, (response) => {
      if (response.success) {
        alert("Privacy Policy Accepted!");
      }
    });
  };
});
