/* ============ FOODLINGO — логика прототипа ============ */

/* Обёртка для эмодзи: оборачивает emoji-символы в <span class="emoji">,
   чтобы они рендерились цветным emoji-шрифтом, а не «пустыми квадратиками» */
function em(text) {
  return String(text).replace(/[\u{1F000}-\u{1FAFF}\u{2190}-\u{21FF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE0F}\u{2049}\u{203C}]+/gu,
    m => '<span class="emoji">' + m + '</span>');
}

/* ---------- ДАННЫЕ: уроки ---------- */
const LESSONS = [
  {
    id: "sugar", emoji: "🥤", name: "Сахар и напитки",
    info: "Многие сладкие напитки содержат много добавленного сахара. Один большой сладкий лимонад может покрыть всю дневную норму сахара за раз. Вода и напитки без добавленного сахара — отличные варианты на каждый день!",
    quiz: [
      { q: "Сколько примерно кубиков сахара может содержаться в бутылке сладкой газировки объёмом 500 мл?",
        a: ["1–2", "5–6", "10–12"], correct: 2,
        ok: "🎉 Правильно! В некоторых напитках такого объёма действительно может быть около 10–12 кубиков сахара. Точное количество зависит от напитка — проверяй этикетку!",
        no: "Почти! В некоторых напитках такого объёма бывает около 10–12 кубиков сахара. Проверяй этикетку — там всё написано." },
      { q: "Что помогает сократить сахар в течение дня?",
        a: ["Заменить часть сладких напитков на воду", "Полностью запретить себе любую еду", "Пропускать приёмы пищи"], correct: 0,
        ok: "Верно! Не запреты, а простая замена — самый устойчивый способ.",
        no: "Жёсткие запреты и пропуск еды обычно работают плохо. Проще заменить часть сладких напитков на воду." },
    ]
  },
  {
    id: "fastfood", emoji: "🍔", name: "Фастфуд осознанно",
    info: "Фастфуд — не враг. Иногда съесть бургер — это нормально! Осознанный выбор: добавить овощи, выбрать воду вместо сладкого напитка, не есть «на автомате». Дело не в запретах, а в понимании, что тебе подходит.",
    quiz: [
      { q: "Как сделать приём фастфуда чуть более сбалансированным?",
        a: ["Добавить овощи/салат и выбрать напиток без сахара", "Никогда больше не есть фастфуд", "Есть только маленькую порцию и голодать потом"], correct: 0,
        ok: "Именно! Маленькие осознанные штрихи лучше строгих запретов.",
        no: "Дело не в полном запрете. Овощи рядом и вода вместо газировки — простой и рабочий шаг." },
      { q: "Что такое «еда на автомате»?",
        a: ["Еда, когда ты скучаешь или смотришь в телефон", "Еда по расписанию", "Еда в ресторане"], correct: 0,
        ok: "Точно! Замечать это — уже половина дела.",
        no: "Это когда едим без внимания: от скуки, за сериалом. Попробуй заметить такие моменты." },
    ]
  },
  {
    id: "plate", emoji: "🥗", name: "Собираем тарелку",
    info: "Правило тарелки: половина — овощи и фрукты, четверть — белки (мясо, рыба, бобовые, яйца), четверть — гарниры (крупы, картофель, паста). Разнообразие важнее идеальных продуктов!",
    quiz: [
      { q: "Сколько места на «здоровой тарелке» занимают овощи и фрукты?",
        a: ["Около четверти", "Около половины", " Совсем немного"], correct: 1,
        ok: "Правильно! Половина тарелки — овощи и фрукты. 🥦🍅",
        no: "Немного неточно: ориентир — половина тарелки овощей и фруктов." },
      { q: "Что относится к белкам?",
        a: ["Конфеты и печенье", "Бобовые, яйца, рыба", "Чай и вода"], correct: 1,
        ok: "Верно! Бобовые — тоже отличный растительный белок.",
        no: "Белки — это мясо, рыба, яйца, творог, бобовые. Конфеты — в основном сахар и жиры." },
    ]
  },
  {
    id: "habits", emoji: "🧠", name: "Голод и привычки",
    info: "Мы едим не только когда голодны — иногда от скуки, стресса или просто по привычке. Попробуй вопрос: «Я бы съел яблоко прямо сейчас?» Если да — это голод. Если нет — скорее всего, эмоция. Это не плохо, просто полезно замечать.",
    quiz: [
      { q: "«Тест с яблоком» помогает понять…",
        a: ["Настоящий ли это голод", "Спелое ли яблоко", "Любишь ли ты фрукты"], correct: 0,
        ok: "Да! Если даже яблоко не лезет — вероятно, это не голод, а эмоция.",
        no: "Этот тест про различение голода и эмоций: если даже яблоко не хочется — скорее всего, ты не голоден." },
      { q: "Что можно сделать, если ешь от скуки?",
        a: ["Ругать себя и ничего не менять", "Найти другое занятие: прогулка, игра, разговор", "Сесть на жёсткую диету"], correct: 1,
        ok: "Отлично! Заменить ритуал другим занятием — рабочая стратегия.",
        no: "Виноватить себя бесполезно. Проще переключиться: прогулка, спорт, звонок другу." },
    ]
  },
  {
    id: "water", emoji: "💧", name: "Вода",
    info: "Вода участвует почти во всём: от концентрации на уроках до настроения. Лёгкая жажда часто маскируется под усталость или голод. Носи бутылку с собой — маленький шаг, большой эффект.",
    quiz: [
      { q: "Что часто маскируется под усталость или лёгкий голод?",
        a: ["Жажда", "Лень", "Погода"], correct: 0,
        ok: "Верно! Стакан воды — первая помощь при «что-то я устал».",
        no: "Обычно это жажда. Попробуй выпить воды и подождать 10 минут." },
      { q: "Лучший способ пить достаточно воды — …",
        a: ["Пить всё залпом вечером", "Носить бутылку с собой и пить понемногу весь день", "Не пить вообще, чтобы не бегать в туалет"], correct: 1,
        ok: "Точно! Регулярность важнее количества за один раз.",
        no: "Регулярные маленькие глотки в течение дня работают лучше всего." },
    ]
  },
  {
    id: "shop", emoji: "🏪", name: "Выбор в магазине",
    info: "Этикетка — твой друг. Смотрите состав, а не красивые надписи «ФИТНЕС» и «БИО» на упаковке. Чем короче список ингредиентов, тем чаще продукт ближе к настоящей еде. Сахар прячется под именами: сироп, глюкоза, мальтодекстрин.",
    quiz: [
      { q: "На что в первую очередь смотреть при выборе продукта?",
        a: ["На яркость упаковки", "На состав и порядок ингредиентов", "На слово «ФИТНЕС» на упаковке"], correct: 1,
        ok: "Правильно! Первые ингредиенты в списке — те, которых больше всего.",
        no: "Маркетинг на упаковке хитёр. Настоящая информация — в составе: что первым указано, того больше." },
      { q: "Что из этого — скрытое название сахара?",
        a: ["Мальтодекстрин", "Клетчатка", "Белок"], correct: 0,
        ok: "Да! Сиропы, глюкоза, мальтодекстрин — всё это формы добавленного сахара.",
        no: "Мальтодекстрин — одна из форм сахара, как и сиропы и глюкоза. Клетчатка и белок — другие вещества." },
    ]
  }
];

const BADGES = [
  { id: "first",   emoji: "🌱", name: "Первый шаг",     cond: s => s.completed.length >= 1 },
  { id: "xp100",   emoji: "⚡", name: "100 XP",         cond: s => s.xp >= 100 },
  { id: "three",   emoji: "🔥", name: "3 урока",        cond: s => s.completed.length >= 3 },
  { id: "perfect", emoji: "💎", name: "Без ошибок",     cond: s => s.perfectOnce },
  { id: "all",     emoji: "👑", name: "Все уроки",      cond: s => s.completed.length >= LESSONS.length },
  { id: "lvl3",    emoji: "🏆", name: "Уровень 3",      cond: s => level(s.xp) >= 3 },
];

const XP_PER_RIGHT = 10;
const XP_PER_LESSON_BONUS = 20;
const XP_PER_LEVEL = 100;

/* ---------- СОСТОЯНИЕ (localStorage) ---------- */
const DEFAULT_STATE = { xp: 0, hearts: 3, streak: 0, lastDay: null, completed: [], badges: [], perfectOnce: false };
let state = load();

function load() {
  try { return Object.assign({}, DEFAULT_STATE, JSON.parse(localStorage.getItem("foodlingo") || "{}")); }
  catch (e) { return { ...DEFAULT_STATE }; }
}
function save() { localStorage.setItem("foodlingo", JSON.stringify(state)); }

function level(xp) { return Math.floor(xp / XP_PER_LEVEL) + 1; }
function updateStreak() {
  const today = new Date().toDateString();
  if (state.lastDay === today) return;
  const yesterday = new Date(Date.now() - 864e5).toDateString();
  state.streak = (state.lastDay === yesterday) ? state.streak + 1 : 1;
  state.lastDay = today;
}

/* ---------- НАВИГАЦИЯ ---------- */
const screens = document.querySelectorAll(".screen");
const navBtns = document.querySelectorAll(".nav-btn");
let currentLesson = null, currentQ = 0, sessionXP = 0, sessionMistakes = 0;

function show(id) {
  screens.forEach(s => s.classList.toggle("active", s.id === "screen-" + id));
  navBtns.forEach(b => b.classList.toggle("active", b.dataset.screen === id));
}
navBtns.forEach(b => b.addEventListener("click", () => {
  const t = b.dataset.screen;
  if (t === "lesson") startLesson(nextLessonIndex());
  else if (t === "quiz") { if (!currentLesson) startLesson(nextLessonIndex()); else show("quiz"); }
  else show(t);
  if (t === "progress") renderProgress();
}));
document.querySelectorAll("[data-back]").forEach(b => b.addEventListener("click", () => { show("home"); renderHome(); }));

/* ---------- ГЛАВНЫЙ ЭКРАН ---------- */
function nextLessonIndex() {
  const i = LESSONS.findIndex(l => !state.completed.includes(l.id));
  return i === -1 ? 0 : i;
}

function renderHome() {
  document.getElementById("home-streak").textContent = state.streak;
  document.getElementById("home-hearts").textContent = state.hearts;
  document.getElementById("home-xp").textContent = state.xp;
  document.getElementById("home-level").textContent = level(state.xp);

  const pct = Math.round(state.completed.length / LESSONS.length * 100);
  document.getElementById("home-progress-fill").style.width = pct + "%";
  document.getElementById("home-progress-percent").textContent = pct + "%";

  const map = document.getElementById("lesson-map");
  map.innerHTML = "";
  LESSONS.forEach((l, i) => {
    const done = state.completed.includes(l.id);
    const unlocked = done || i <= state.completed.length;
    const isCurrent = !done && i === nextLessonIndex();
    const div = document.createElement("div");
    div.className = "map-item" + (unlocked ? "" : " locked");
    div.innerHTML = `
      <div class="map-dot ${done ? "dot-done" : isCurrent ? "dot-current" : "dot-locked"}">
        ${em(done ? "✓" : isCurrent ? l.emoji : "🔒")}
      </div>
      <div><div class="map-name">${i+1}. ${l.name}</div>
      <div class="map-sub">${em(done ? "Пройдено ✅" : isCurrent ? "Доступен сейчас ▶" : "Открой предыдущие уроки")}</div></div>`;
    if (unlocked) div.addEventListener("click", () => startLesson(i));
    map.appendChild(div);
  });

  const allDone = state.completed.length === LESSONS.length;
  document.getElementById("btn-continue").innerHTML = em(allDone ? "ПОВТОРИТЬ ЛЮБОЙ УРОК ♻" : "ПРОДОЛЖИТЬ УРОК ▶");
  document.getElementById("speech").innerHTML = em(allDone
    ? "Вау! Все уроки пройдены! Ты — мастер питания! 👑"
    : ["Нажми «Продолжить» и получи немного XP! ⭐", "Каждый правильный ответ — +10 XP! 🔥", "Я верю в тебя! Давай один урокчик 🐸"][Math.floor(Math.random()*3)]);
}

document.getElementById("btn-continue").addEventListener("click", () => startLesson(nextLessonIndex()));

/* ---------- УРОК ---------- */
function startLesson(index) {
  currentLesson = LESSONS[index];
  currentQ = 0; sessionXP = 0; sessionMistakes = 0;
  document.getElementById("lesson-title").innerHTML = em(currentLesson.emoji + " " + currentLesson.name);
  document.getElementById("lesson-info").innerHTML = em(`<b>${currentLesson.emoji} Запомни:</b><br><br>${currentLesson.info}`);
  show("lesson");
}

document.getElementById("btn-lesson-next").addEventListener("click", () => {
  if (state.hearts <= 0) state.hearts = 3; // новые жизни для нового урока
  renderHearts();
  currentQ = 0;
  renderQuestion();
  show("quiz");
});

/* ---------- ВИКТОРИНА ---------- */
let selectedAnswer = null;

function renderQuestion() {
  const item = currentLesson.quiz[currentQ];
  document.getElementById("quiz-fill").style.width = (currentQ / currentLesson.quiz.length * 100) + "%";
  document.getElementById("quiz-question").textContent = item.q;
  const box = document.getElementById("quiz-answers");
  box.innerHTML = "";
  selectedAnswer = null;
  document.getElementById("btn-check").classList.remove("hidden");
  document.getElementById("btn-check").disabled = true;
  document.getElementById("btn-quiz-next").classList.add("hidden");
  document.getElementById("quiz-feedback").classList.add("hidden");

  item.a.forEach((text, i) => {
    const btn = document.createElement("button");
    btn.className = "answer";
    btn.textContent = text;
    btn.addEventListener("click", () => {
      if (btn.parentElement.querySelector(".correct,.wrong")) return;
      box.querySelectorAll(".answer").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      selectedAnswer = i;
      document.getElementById("btn-check").disabled = false;
    });
    box.appendChild(btn);
  });
  renderHearts();
}

document.getElementById("btn-check").addEventListener("click", () => {
  if (selectedAnswer === null) return;
  const item = currentLesson.quiz[currentQ];
  const buttons = document.querySelectorAll("#quiz-answers .answer");
  const fb = document.getElementById("quiz-feedback");
  const icon = document.getElementById("feedback-icon");
  const txt = document.getElementById("feedback-text");

  buttons[item.correct].classList.add("correct");
  const good = selectedAnswer === item.correct;
  if (good) {
    sessionXP += XP_PER_RIGHT;
    state.xp += XP_PER_RIGHT;
    popXP(XP_PER_RIGHT);
  } else {
    buttons[selectedAnswer].classList.add("wrong");
    sessionMistakes++;
    state.hearts = Math.max(0, state.hearts - 1);
    renderHearts();
  }
  fb.className = "feedback " + (good ? "good" : "bad");
  icon.innerHTML = em(good ? "🎉" : "💡");
  txt.innerHTML = em(good ? item.ok : item.no);
  document.getElementById("btn-check").classList.add("hidden");
  document.getElementById("btn-quiz-next").classList.remove("hidden");
  save();
});

document.getElementById("btn-quiz-next").addEventListener("click", () => {
  if (currentQ + 1 < currentLesson.quiz.length) {
    currentQ++;
    renderQuestion();
  } else {
    finishLesson();
  }
});

function finishLesson() {
  const bonus = XP_PER_LESSON_BONUS;
  state.xp += bonus;
  if (!state.completed.includes(currentLesson.id)) state.completed.push(currentLesson.id);
  if (sessionMistakes === 0) state.perfectOnce = true;
  updateStreak();

  // достижения
  const newBadges = [];
  BADGES.forEach(b => {
    if (!state.badges.includes(b.id) && b.cond(state)) { state.badges.push(b.id); newBadges.push(b); }
  });
  save();

  document.getElementById("award-xp").textContent = sessionXP + bonus;
  document.getElementById("award-streak").textContent = state.streak;
  document.getElementById("award-level").textContent = level(state.xp);
  const badgeBox = document.getElementById("badge-unlocked");
  if (newBadges.length) {
    badgeBox.classList.remove("hidden");
    badgeBox.innerHTML = em("🥇 Новое достижение: " + newBadges.map(b => b.emoji + " «" + b.name + "»").join(", "));
  } else badgeBox.classList.add("hidden");

  show("complete");
}

document.getElementById("btn-finish").addEventListener("click", () => { show("home"); renderHome(); });

/* ---------- ПРОГРЕСС ---------- */
function renderProgress() {
  const lvl = level(state.xp);
  document.getElementById("prog-level").textContent = lvl;
  document.getElementById("prog-level-badge").textContent = lvl;
  document.getElementById("prog-xp").textContent = state.xp;
  document.getElementById("prog-streak").textContent = state.streak;
  document.getElementById("prog-lessons").textContent = state.completed.length + "/" + LESSONS.length;
  document.getElementById("prog-hearts").textContent = state.hearts;

  const inLvl = state.xp % XP_PER_LEVEL;
  document.getElementById("prog-xp-fill").style.width = inLvl + "%";
  document.getElementById("prog-xp-text").textContent = `${inLvl} / ${XP_PER_LEVEL} XP до уровня ${lvl + 1}`;

  const bl = document.getElementById("badges-list");
  bl.innerHTML = "";
  BADGES.forEach(b => {
    const got = state.badges.includes(b.id);
    const d = document.createElement("div");
    d.className = "badge" + (got ? "" : " locked");
    d.innerHTML = em(`${b.emoji}<small>${b.name}</small>`);
    d.title = got ? "Получено!" : "Ещё не получено";
    bl.appendChild(d);
  });

  const tl = document.getElementById("topics-list");
  tl.innerHTML = "";
  LESSONS.forEach(l => {
    const done = state.completed.includes(l.id);
    const d = document.createElement("div");
    d.className = "topic " + (done ? "done" : "todo");
    d.innerHTML = em(`<span>${l.emoji} ${l.name}</span><span>${done ? "изучено" : "—"}</span>`);
    tl.appendChild(d);
  });
}

document.getElementById("btn-reset").addEventListener("click", () => {
  if (confirm("Сбросить весь прогресс?")) {
    state = { ...DEFAULT_STATE, completed: [], badges: [] };
    save(); renderProgress(); renderHome();
  }
});

/* ---------- МЕЛОЧИ ---------- */
function renderHearts() {
  document.getElementById("lesson-hearts").textContent = state.hearts;
  document.getElementById("quiz-hearts").textContent = state.hearts;
}
function popXP(n) {
  const el = document.getElementById("xp-pop");
  el.innerHTML = em("+" + n + " XP ⭐");
  el.classList.remove("hidden");
  el.style.animation = "none"; void el.offsetWidth; // перезапуск анимации
  el.style.animation = "";
  setTimeout(() => el.classList.add("hidden"), 1100);
}

/* ---------- СТАРТ ---------- */
renderHome();
renderHearts();
