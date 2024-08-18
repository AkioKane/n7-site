const container = document.querySelector("#content");
const headLi = document.querySelectorAll(".head-li");
const gridContainer = document.querySelector(".grid-container")
const linkItem = document.querySelector(".link-item")
const opened = document.querySelector(".opened")
const main = document.querySelector(".main")

function clear() {
  return container.innerHTML = "";
};

function loadHome() {
  const content = document.createElement("div");
  content.classList.add("container");
  container.appendChild(content);

  const h1 = document.createElement("h1");
  h1.innerHTML = "Join to the channel";
  content.appendChild(h1)

  const p = document.createElement("p");
  p.innerHTML = "This is a Russian community of gamers.";
  content.appendChild(p);

  const img = document.createElement("img");
  img.src = './assets/logo.png';
  img.alt = 'logo';
  content.appendChild(img);

  const a = document.createElement("a");
  a.href = "https://discord.gg/j3KxS685wp";
  a.classList.add("discord-button");
  a.target = "_blank";
  a.innerHTML = "Join To";
  content.appendChild(a);
};

function loadShop(name, description, infoDecription, filename) {
  const content = document.createElement("div");
  content.classList.add("grid-container");
  container.appendChild(content);

  const item = document.createElement("div");
  item.classList.add("item");
  item.style.backgroundImage = `url("${filename}")`;
  content.appendChild(item);

  const divText = document.createElement("div");
  divText.classList.add("div-text");
  item.appendChild(divText);

  const infoText = document.createElement("p");
  infoText.innerHTML = infoDecription;
  divText.appendChild(infoText);

  const footer = document.createElement("div");
  footer.classList.add("footer");
  item.appendChild(footer);

  const div = document.createElement("div");
  footer.appendChild(div);

  const h3 = document.createElement("h3");
  h3.innerHTML = name;
  div.appendChild(h3);

  const p = document.createElement("p");
  p.innerHTML = description;
  div.appendChild(p);

  const a = document.createElement("button");
  a.classList.add("link-item")
  footer.appendChild(a);

  const h4 = document.createElement("h4");
  h4.innerHTML = "Читать";
  a.appendChild(h4);

  footer.addEventListener("mouseover", () => {
    a.style.backgroundColor = "#9e0707";
  });
  footer.addEventListener("mouseout", () => {
    a.style.backgroundColor = "#262626";
  });
  a.addEventListener("mousedown", () => {
    if (a.classList.contains("opened")) {
      divText.style.opacity = "0";
      setTimeout(function() {
        divText.style.display = "none";
      }, 300)
      a.classList.remove("opened")
    } else {
      divText.style.display = "block";
      divText.style.opacity = "0.975";
      a.classList.add("opened");
    }
    
  });
};

loadHome();

let illarionz = "Крутой тип с фасика."

headLi.forEach(element => {
  element.addEventListener("click", (event) => {
    if (event.target.id == "home") {
      clear();
      main.style.backgroundImage = 'url("./assets/back.webp")';
      loadHome();
    } else if (event.target.id == "news") {
      clear()
      main.style.backgroundImage = 'url("./assets/back1.jpg")'
      loadShop("Illarionz", "Owner N7", illarionz, "./assets/illarionz.jpg");
    } else if (event.target.id == "info") {
      // function loadInfo
    }
  })
});