import { elements } from "./elements.js";
import { state } from "./state.js";

export function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch((error) => console.error("Service worker failed", error));
  }
}

export function wireInstallPrompt() {
  if (!elements.installButton) {
    return;
  }

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    state.deferredInstallPrompt = event;
    elements.installButton.hidden = false;
  });

  elements.installButton.addEventListener("click", async () => {
    if (!state.deferredInstallPrompt) {
      return;
    }
    state.deferredInstallPrompt.prompt();
    await state.deferredInstallPrompt.userChoice;
    state.deferredInstallPrompt = null;
    elements.installButton.hidden = true;
  });
}

export function updateConnectionStatus() {
  if (!elements.connectionStatus) {
    return;
  }
  elements.connectionStatus.textContent = navigator.onLine ? "Online and ready to cache" : "Offline mode active";
}
