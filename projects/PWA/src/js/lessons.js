import { elements } from "./elements.js";
import { saveProgress, state } from "./state.js";

export function renderMenu() {
  elements.menu.innerHTML = "";
  state.topics.forEach((topic, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "topic-button";
    button.setAttribute("role", "listitem");
    button.innerHTML = `<span>${topic.title}</span><small>${topic.type}</small>`;
    button.addEventListener("click", () => showTopic(index));
    elements.menu.append(button);
  });
}

export function showTopic(index) {
  const topic = state.topics[index];
  if (!topic) {
    return;
  }
  state.activeIndex = index;

  elements.lessonKicker.textContent = `Stop ${index + 1} of ${state.topics.length}`;
  elements.lessonTitle.textContent = topic.title;
  elements.lessonDescription.textContent = topic.description;
  elements.lessonDistance.textContent = topic.distance;
  elements.lessonOrbit.textContent = topic.orbit;
  elements.lessonType.textContent = topic.type;
  elements.lessonImage.src = topic.image;
  elements.lessonImage.alt = topic.imageAlt;
  elements.lessonCaption.textContent = topic.caption;
  elements.markButton.setAttribute("aria-pressed", String(state.explored.has(topic.id)));
  elements.markButton.textContent = state.explored.has(topic.id) ? "Explored" : "Mark explored";

  [...elements.menu.children].forEach((button, buttonIndex) => {
    button.setAttribute("aria-current", String(buttonIndex === index));
  });

  renderQuiz(topic);
  updateProgress();
}

export function markActiveTopicExplored() {
  const topic = state.topics[state.activeIndex];
  if (!topic) {
    return;
  }
  state.explored.add(topic.id);
  saveProgress();
  showTopic(state.activeIndex);
}

function renderQuiz(topic) {
  elements.quizQuestion.textContent = topic.quiz.question;
  elements.quizResult.textContent = "";
  elements.quizAnswers.innerHTML = "";

  topic.quiz.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = answer;
    button.addEventListener("click", () => {
      const correct = answer === topic.quiz.correctAnswer;
      elements.quizResult.textContent = correct ? "Correct. Keep orbiting." : `Not quite. Try ${topic.quiz.correctAnswer}.`;
    });
    elements.quizAnswers.append(button);
  });
}

function updateProgress() {
  const total = state.topics.length;
  elements.progressStatus.textContent = `${state.explored.size} of ${total} explored`;
}
