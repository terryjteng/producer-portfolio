// Career Journey Game Logic with Static Flicker Effect
const careerData = {
  start: {
    text: "Suddenly! You wake up as 21-year-old Terry Teng. You’ve recently transferred from California to Iowa State University. After a year of accounting courses, you realize you didn’t enjoy any of it. What’s your next move?",
    options: [
      { text: "Pivot to a marketing major", next: "marketing-degree" },
      { text: "Stay in accounting", next: "dimensional-exit" },
      { text: "Hitchhike back to California", next: "no-degree-exit" }
    ]
  },
  "marketing-degree": {
    text: "You switch your major to Marketing, graduate from Iowa State University, move back to Silicon Valley, and start working at a digital marketing agency. REALIZATION! Digital marketing agencies are very toxic work environments. Every. Single. One. How do you escape?",
    options: [
      { text: "Apply to Google", next: "google-cx" },
      { text: "Stay in marketing", next: "marketing-loop" }
    ]
  },
  "google-cx": {
    text: "You pivot to being a Project Manager at the Google Customer Experience (CX) Lab. After 3 years of product and market research on some of Google’s largest and newly acquired products, you gain: +100 XP in product and market research. The team has now incubated a brand new tool called Google Local Services. What do you do now?",
    options: [
      { text: "Stay on the CX team", next: "happy-covid-exit" },
      { text: "Help launch Google Local Services", next: "google-gls" },
      { text: "Transition into gaming", next: "gaming-loop" }
    ]
  },
  "google-gls": {
    text: "The Google Local Services team is amazing. You spend the next 2 years building the onboarding team, rolling the product out city by city, developing tagging taxonomies to gather product feedback, and working with the UX research team to address retention issues. One day, while relaxing at home, a voice says: 'I'm bored... let's move to Los Angeles.' Does that sound like the right move?",
    options: [
      { text: "No. I'm happy at Google", next: "happy-covid-exit" },
      { text: "Sure! I actually already got a job at CreatorIQ", next: "CIQ" }
    ]
  },
  "CIQ": {
    text: "Whoa! Are we really doing this? Moving to LA in Feb 2020 to join a startup? Things start off great. You help create team structures from the ground up. BREAKING NEWS: The world goes into lockdown just a month later. CreatorIQ furloughs half the company, and most companies freeze hiring until 2021. Finally, in 2021, remote jobs open up, but COVID has made you reflect on your career. You want something more meaningful. NBC Universal makes you an offer.",
    options: [
      { text: "Accept the role at NBCU", next: "NBCU" },
      { text: "Start your career in gaming", next: "gaming-loop" }
    ]
  },
  "NBCU": {
    text: "This is a whole new experience. You've never worked in entertainment before, and the bureaucratic culture is a shift. While you get along with your team, red flags appear. Major restructuring hits: all VPs are removed, your department is reallocated, and critical knowledge is pulled from your team. Eventually, the department is dissolved and you're laid off. What's your reaction?",
    options: [
      { text: "Follow your dream — go to Riot Games!", next: "riot" },
      { text: "Return to the Bay Area and go back to Google", next: "happy-matrix-exit" }
    ]
  },
  "riot": {
    text: "You’ve made it. You're in gaming at one of the world’s top gaming studios. As a technical producer, you build tools and processes that improve functionality across the company — driving $100M+ in annual revenue. You’re invited to join the Product Solutions team to help optimize the company’s most profitable features. Sadly, you’re a consultant and were not able to stay as long as you'd like, but another studio reaches out: Xsolla.",
    options: [
      { text: "Take the offer from Xsolla", next: "xsolla" },
      { text: "Stay at Riot forever and refuse to leave. Handcuff yourself to a desk until they force you out.", next: "quit-exit" }
    ]
  },
  "xsolla": {
    text: "Head of Production. Say it again. You're managing the entire Backend team, coordinating engineers and devs, owning product roadmaps. This is what you live for. What’s next?",
    options: [
      { text: "An amazing future at another game studio", next: "gaming-end" },
      { text: "Go off the grid and move to Thailand", next: "thailand-exit" }
    ]
  },
  "marketing-loop": {
    text: "Marketing agencies have wrecked your mental health. You slam your head on your desk. The lights start to dim and a loud rining enters your ears. Escape!",
    options: [
      { text: "Apply to Google", next: "google-cx" },
      { text: "Stay in Marketing", next: "marketing-loop" },
      { text: "Quit with no backup plan", next: "quit-exit" }
    ]
  },
  "gaming-loop": {
    text: "You jump 10 years into the future. You’re unprepared and lack the experience to survive in the gaming industry. What now?",
    options: [
      { text: "Build a time machine and go back to Google", next: "google-cx" },
      { text: "Try to cut corners and make it in the industry", next: "gaming-loop" },
      { text: "Give up on everything and try to live on the streets", next: "quit-exit" }
    ]
  },
  "happy-matrix-exit": {
    text: "You return to Google, stay for 20 years, find yourself a wife and kids, become super successful and retire early. Eventually, on your deathbed, your wife, kids, and grandkids surround you to show you all their love and comfort. Suddenly! A white light flashed before your eyes. Is it heaven? Nope. It's you leaving the Matrix and realize your entire life was a simulation.",
    options: [{ text: "Restart Journey", next: "start" }]
  },
  "happy-covid-exit": {
    text: "You return to Google, survive COVID, stay for 20 years, find yourself a wife and kids, become super successful and retire early. Eventually, on your deathbed, your wife, kids, and grandkids surround you to show you all their love and comfort. Suddenly! A white light flashed before your eyes. Is it heaven? Nope. It's you leaving the Matrix and realize your entire life was a simulation.",
    options: [{ text: "Restart Journey", next: "start" }]
  },
  "quit-exit": {
    text: "You quit everything, lose your social circle, and sadly pass away from dysentery. Oregon Trail-style.",
    options: [{ text: "Restart Journey", next: "start" }]
  },
  "dimensional-exit": {
    text: "A multi-dimensional portal appears in front of you and destroys your timeline, devouring everything. There is no escape.",
    options: [{ text: "Restart Journey", next: "start" }]
  },
  "no-degree-exit": {
    text: "You return to California with no degree. Your social circle vanishes, and your life spirals. Game over.",
    options: [{ text: "Restart Journey", next: "start" }]
  },
  "thailand-exit": {
    text: "You move to Thailand, leaving everything behind, and train Muay Thai. You're alone, drifting. If only a gaming company had hired you and changed the world together.",
    options: [{ text: "They should have hired Terry. Try again.", next: "start" }]
  },
  "gaming-end": {
    text: "Congratulations, Terry! You join a new studio and help shape the future of gaming. Your legacy begins.",
    options: [{ text: "Hire Terry by visiting the Contact Page. Or restart the game.", next: "start" }]
  }
};

// DOM elements
const textEl = document.getElementById("career-text");
const optionsEl = document.getElementById("career-options");

// Initialize journey
function startCareerJourney() {
  showNode("start");
}

// Show story node
function showNode(id) {
  const node = careerData[id];

  // Add static flicker for loops
  if (["marketing-loop", "gaming-loop"].includes(id)) {
    triggerStaticFlicker();
  }

  textEl.innerHTML = node.text;
  optionsEl.innerHTML = "";

  node.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerHTML = `<span>${option.text}</span>`;
    btn.onclick = () => showNode(option.next);
    optionsEl.appendChild(btn);
  });
}

// Flicker effect for loop nodes
function triggerStaticFlicker() {
  const overlay = document.getElementById("static-overlay");
  if (!overlay) return;
  overlay.style.animation = "none"; // reset animation
  void overlay.offsetWidth;         // trigger reflow
  overlay.style.animation = "screenFlicker 0.5s ease-out";
}

// Run on page load
document.addEventListener("DOMContentLoaded", () => {
  startCareerJourney();
});
