function speak(textToSay) {
  const message = new SpeechSynthesisUtterance(textToSay);
  message.pitch = 1.2;
  message.rate = 1.0;
  window.speechSynthesis.speak(message);
}

function syncSentence() {
  const menu = document.getElementById("wordSelect");
  const display = document.getElementById("sentenceDisplay");

  if (menu.selectedIndex > 0) {
    const selectedOption = menu.options[menu.selectedIndex];
    display.value = selectedOption.dataset.sentence;
  } else {
    display.value = "";
  }
}

function speakWord() {
  const menu = document.getElementById("wordSelect");

  if (menu.selectedIndex > 0) {
    speak(menu.value);
  } else {
    alert("Please select a word first.");
  }
}

function speakSentence() {
  const display = document.getElementById("sentenceDisplay");

  if (display.value.trim() !== "") {
    speak(display.value);
  } else {
    alert("Please select a word first so the sentence appears.");
  }
}
