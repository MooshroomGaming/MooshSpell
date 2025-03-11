document.addEventListener('DOMContentLoaded', function () {
  const acceptBtn = document.getElementById('accept-btn');
  const roastBtn = document.getElementById('enable-roast');
  const disableRoastBtn = document.getElementById('disable-roast');

  if (acceptBtn) {
    acceptBtn.onclick = () => {
      chrome.runtime.sendMessage({ action: "acceptPrivacy" }, (response) => {
        if (response.success) {
          alert("Privacy Policy Accepted!");
        }
      });
    };
  }

  if (roastBtn) {
    roastBtn.onclick = () => {
      chrome.runtime.sendMessage({ action: "enableRoast" });
      alert("🔥 Roast Mode Enabled!");
    };
  }

  if (disableRoastBtn) {
    disableRoastBtn.onclick = () => {
      chrome.runtime.sendMessage({ action: "disableRoast" });
      alert("Roast Mode Disabled.");
    };
  }
});
