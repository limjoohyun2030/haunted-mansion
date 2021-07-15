let sec = 15;
let killNum = 0;
let oneMonsterNum = 4;
let totalNum = 0;
let correctTime = 1;
let level = 0;

const backgroundAudio = new Audio("creepy.mp3");

function counter(event, correctTime) {
  setInterval(event, 1000 * correctTime);
}

function resetAll() {
  sec = -1;
  killNum = 0;
  clearInterval(counter);
  button.disabled = false;
  const divs = document.querySelectorAll("div");
  divs.forEach((element) => {
    element.style.transform = "scale(0.01)";
    element.style.transition = "transform 1s ease-in-out";
  });
  backgroundAudio.pause();
}

function timer() {
  const countDown = document.querySelector("#countDown");
  if (sec === 0) {
    countDown.innerHTML = `0sec`;
    alert(`🧛‍♀️Game over🧛‍♂️ \n\ You killed ${killNum} monsters`);
    resetAll();
    oneMonsterNum = 4;
    level = 0;
  } else if (sec > 0) {
    countDown.innerHTML = `${sec}sec`;
    totalNum = oneMonsterNum - 1;
    console.log(
      `sec: ${sec}, onMonsterNum: ${oneMonsterNum}, totalNum: ${totalNum}, killNum: ${killNum}`
    );
    if (killNum === totalNum * 3) {
      alert(`🎉You escape from haunted mansion🎉 \n\ You killed all monsters!`);
      resetAll();
    }
  } else if (sec < 0) {
    clearInterval(counter);
  }
  sec--;
}

function getRandomInRange(from, to, fixed) {
  return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
  // .toFixed() returns string, so ' * 1' is a trick to convert to number
}

function createPumkins() {
  const monster = document.createElement("div");
  monster.innerHTML = "🎃";
  monster.style.cursor = "pointer";
  monster.style.fontSize = "30px";
  monster.style.background = "none";
  monster.style.position = "absolute";
  monster.style.left = getRandomInRange(70, 1250, 100) + "px";
  monster.style.top = getRandomInRange(70, 550, 100) + "px";
  document.body.appendChild(monster);
  monster.addEventListener("click", () => {
    killNum++;
    document.querySelector("#score").innerHTML = `Score: ${killNum}`;
    monster.style.transform = "scale(0.01)";
    monster.style.transition = "transform 1s ease-in-out";
  });
}

function createSkulls() {
  const monster = document.createElement("div");
  monster.innerHTML = "💀";
  monster.style.cursor = "pointer";
  monster.style.fontSize = "30px";
  monster.style.background = "none";
  monster.style.position = "absolute";
  monster.style.left = getRandomInRange(70, 1250, 100) + "px";
  monster.style.top = getRandomInRange(70, 550, 100) + "px";
  document.body.appendChild(monster);
  monster.addEventListener("click", () => {
    killNum++;
    document.querySelector("#score").innerHTML = `Score: ${killNum}`;
    monster.style.transform = "scale(0.01)";
    monster.style.transition = "transform 1s ease-in-out";
  });
}

function createGhosts() {
  const monster = document.createElement("div");
  monster.innerHTML = "👻";
  monster.style.cursor = "pointer";
  monster.style.fontSize = "30px";
  monster.style.background = "none";
  monster.style.position = "absolute";
  monster.style.left = getRandomInRange(70, 1250, 100) + "px";
  monster.style.top = getRandomInRange(70, 550, 100) + "px";
  document.body.appendChild(monster);
  monster.addEventListener("click", () => {
    killNum++;
    document.querySelector("#score").innerHTML = `Score: ${killNum}`;
    monster.style.transform = "scale(0.01)";
    monster.style.transition = "transform 1s ease-in-out";
  });
}

function createAngels() {
  const monster = document.createElement("div");
  monster.innerHTML = "🧚‍♂️";
  monster.style.cursor = "pointer";
  monster.style.fontSize = "30px";
  monster.style.background = "none";
  monster.style.position = "absolute";
  monster.style.left = getRandomInRange(70, 1250, 100) + "px";
  monster.style.top = getRandomInRange(70, 550, 100) + "px";
  document.body.appendChild(monster);
  monster.addEventListener("click", () => {
    alert(`🧛‍♀️Game over🧛‍♂️ You killed 🧚‍♂️ \n\ You killed ${killNum} monsters`);
    resetAll();
    oneMonsterNum = 4;
    level = 0;
  });
}

// class createMonsters {
//   constructor() {
//     const monster = document.createElement("div");
//     monster.innerHTML = "";
//     monster.style.cursor = "pointer";
// monster.style.height = "25px";
// monster.style.width = "25px";
//     monster.style.position = "absolute";
//     monster.style.left = getRandomInRange(0, 1320, 20) + "px";
//     monster.style.top = getRandomInRange(0, 1320, 20) + "px";
//     document.body.appendChild(monster);
//   }
// }

// const createPumkins = new createMonsters("🎃");
// const createSkulls = new createMonsters("💀");
// const createAngels = new createMonsters("🧚‍♂️");
// const createGhosts = new createMonsters("👻");

const button = document.querySelector("#Btn");
button.addEventListener("click", () => {
  backgroundAudio.play();
  sec = 15;
  counter(timer, correctTime);
  for (let i = 0; i < oneMonsterNum; i++) {
    createPumkins();
    createSkulls();
    createGhosts();
    createAngels();
  }
  correctTime *= 10;
  button.disabled = true;
  document.querySelector("#level").innerHTML = `Level: ${level}`;
  level++;
  oneMonsterNum++;
});
