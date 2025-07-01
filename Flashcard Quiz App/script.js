let flashcards = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "2 + 2?", answer: "4" },
  { question: "HTML stands for?", answer: "HyperText Markup Language" }
];

let currentIndex = 0;
let isEditing = false;

// Elements
const cardQuestion = document.getElementById("card-question");
const cardAnswer = document.getElementById("card-answer");
const flashcard = document.getElementById("flashcard");
const toggleBtn = document.getElementById("toggle-answer");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const addBtn = document.getElementById("add-btn");
const editBtn = document.getElementById("edit-btn");
const deleteBtn = document.getElementById("delete-btn");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalQuestion = document.getElementById("modal-question");
const modalAnswer = document.getElementById("modal-answer");
const saveBtn = document.getElementById("save-btn");
const cancelBtn = document.getElementById("cancel-btn");
const darkModeBtn = document.getElementById("dark-mode-toggle");

function showFlashcard(index) {
  const card = flashcards[index];
  cardQuestion.textContent = card.question;
  cardAnswer.textContent = card.answer;
  flashcard.classList.remove("flipped"); // Reset flip
}

// Flip card on button click
toggleBtn.addEventListener("click", () => {
  flashcard.classList.toggle("flipped");
});

// Navigation
prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    showFlashcard(currentIndex);
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < flashcards.length - 1) {
    currentIndex++;
    showFlashcard(currentIndex);
  }
});

// Add Flashcard
addBtn.addEventListener("click", () => {
  isEditing = false;
  modalTitle.textContent = "Add Flashcard";
  modalQuestion.value = "";
  modalAnswer.value = "";
  modal.classList.remove("hidden");
});

// Edit Flashcard
editBtn.addEventListener("click", () => {
  isEditing = true;
  modalTitle.textContent = "Edit Flashcard";
  modalQuestion.value = flashcards[currentIndex].question;
  modalAnswer.value = flashcards[currentIndex].answer;
  modal.classList.remove("hidden");
});

// Delete Flashcard
deleteBtn.addEventListener("click", () => {
  flashcards.splice(currentIndex, 1);
  if (currentIndex >= flashcards.length) currentIndex = flashcards.length - 1;
  if (flashcards.length > 0) {
    showFlashcard(currentIndex);
  } else {
    cardQuestion.textContent = "No flashcards available.";
    cardAnswer.textContent = "";
  }
});

// Save flashcard from modal
saveBtn.addEventListener("click", () => {
  const q = modalQuestion.value.trim();
  const a = modalAnswer.value.trim();
  if (q && a) {
    if (isEditing) {
      flashcards[currentIndex] = { question: q, answer: a };
    } else {
      flashcards.push({ question: q, answer: a });
      currentIndex = flashcards.length - 1;
    }
    modal.classList.add("hidden");
    showFlashcard(currentIndex);
  }
});

// Cancel modal
cancelBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Dark mode toggle
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  darkModeBtn.textContent = document.body.classList.contains("dark")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});

// Init
showFlashcard(currentIndex);
