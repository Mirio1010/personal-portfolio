export const DATA_URL = "src/data/solar-system.json";
export const STORAGE_KEY = "pocket-planetarium-progress";

export const state = {
  topics: [],
  activeIndex: 0,
  deferredInstallPrompt: null,
  explored: new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")),
  audio: null
};

export function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...state.explored]));
}
