import { speakCurrentTopic } from "./audio.js";
import { elements } from "./elements.js";
import { markActiveTopicExplored, renderMenu, showTopic } from "./lessons.js";
import { registerServiceWorker, updateConnectionStatus, wireInstallPrompt } from "./pwa.js";
import { DATA_URL, state } from "./state.js";

async function startApp() {
  registerServiceWorker();
  wireInstallPrompt();
  updateConnectionStatus();
  window.addEventListener("online", updateConnectionStatus);
  window.addEventListener("offline", updateConnectionStatus);

  if (!elements.menu) {
    return;
  }

  try {
    const response = await fetch(DATA_URL);
    if (!response.ok) {
      throw new Error(`Could not load ${DATA_URL}`);
    }
    const data = await response.json();
    state.topics = data.topics || [];
    renderMenu();
    showTopic(0);
  } catch (error) {
    elements.lessonTitle.textContent = "Lessons could not be loaded";
    elements.lessonDescription.textContent = "Start a local web server so the JSON file can be fetched by the browser.";
    console.error(error);
  }
}

elements.speakButton?.addEventListener("click", speakCurrentTopic);
elements.markButton?.addEventListener("click", markActiveTopicExplored);

startApp();
