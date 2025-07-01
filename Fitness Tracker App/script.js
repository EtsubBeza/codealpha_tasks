const form = document.getElementById("fitness-form");
const stepsBar = document.getElementById("steps-bar");
const caloriesBar = document.getElementById("calories-bar");
const durationBar = document.getElementById("duration-bar");
const stepsCount = document.getElementById("steps-count");
const caloriesCount = document.getElementById("calories-count");
const durationCount = document.getElementById("duration-count");
const logList = document.getElementById("log-list");

let fitnessData = JSON.parse(localStorage.getItem("fitnessData")) || [];

function updateDashboard() {
  const today = new Date().toISOString().split("T")[0];

  const todayData = fitnessData.filter(entry => entry.date === today);
  let totalSteps = 0, totalCalories = 0, totalDuration = 0;

  todayData.forEach(entry => {
    totalSteps += parseInt(entry.steps);
    totalCalories += parseInt(entry.calories);
    totalDuration += parseInt(entry.duration);
  });

  stepsBar.value = totalSteps;
  stepsCount.textContent = totalSteps;

  caloriesBar.value = totalCalories;
  caloriesCount.textContent = totalCalories;

  durationBar.value = totalDuration;
  durationCount.textContent = totalDuration;

  renderLog();
}

function renderLog() {
  logList.innerHTML = "";
  fitnessData.slice(-7).reverse().forEach(entry => {
    const li = document.createElement("li");
    li.textContent = `${entry.date}: ${entry.workout} for ${entry.duration} mins, ${entry.calories} cal, ${entry.steps} steps`;
    logList.appendChild(li);
  });
}

form.addEventListener("submit", e => {
  e.preventDefault();

  const date = document.getElementById("date").value;
  const steps = document.getElementById("steps").value;
  const workout = document.getElementById("workout").value;
  const duration = document.getElementById("duration").value;
  const calories = document.getElementById("calories").value;

  fitnessData.push({ steps, workout, duration, calories, date });
  localStorage.setItem("fitnessData", JSON.stringify(fitnessData));

  form.reset();
  updateDashboard();
});

// Set default date to today
document.getElementById("date").value = new Date().toISOString().split("T")[0];

updateDashboard();
