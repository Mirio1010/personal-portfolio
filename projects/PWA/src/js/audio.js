import { state } from "./state.js";

export function speakCurrentTopic() {
  const topic = state.topics[state.activeIndex];
  if (!topic) {
    return;
  }

  if (state.audio) {
    state.audio.pause();
    state.audio = null;
  }
  window.speechSynthesis?.cancel();

  if (topic.audio && topic.audio !== "tts") {
    state.audio = new Audio(topic.audio);
    state.audio.play().catch(() => readWithSpeech(topic));
    return;
  }

  readWithSpeech(topic);
}

function readWithSpeech(topic) {
  if (!("speechSynthesis" in window)) {
    return;
  }
  const utterance = new SpeechSynthesisUtterance(`${topic.title}. ${topic.description}`);
  utterance.rate = 0.92;
  window.speechSynthesis.speak(utterance);
}
