const container = document.querySelector("#content");
const headLi = document.querySelectorAll(".head-li");
const gridContainer = document.querySelector(".grid-container");
const linkItem = document.querySelector(".link-item");
const opened = document.querySelector(".opened");
const main = document.querySelector(".main");

function clear() {
  return (container.innerHTML = "");
}

function loadHome() {
  const content = document.createElement("div");
  content.classList.add("container");
  container.appendChild(content);

  const h1 = document.createElement("h1");
  h1.innerHTML = "Join to the channel";
  content.appendChild(h1);

  const p = document.createElement("p");
  p.innerHTML = "This is a Russian community of gamers.";
  content.appendChild(p);

  const img = document.createElement("img");
  img.src = "./assets/logo.png";
  img.alt = "logo";
  content.appendChild(img);

  const a = document.createElement("a");
  a.href = "https://discord.gg/j3KxS685wp";
  a.classList.add("discord-button");
  a.target = "_blank";
  a.innerHTML = "Join To";
  content.appendChild(a);
}

function loadInfo(name, role, decription, filename, content) {
  const item = document.createElement("div");
  item.classList.add("item");
  item.style.backgroundImage = `url("${filename}")`;
  content.appendChild(item);

  const divText = document.createElement("div");
  divText.classList.add("div-text");
  item.appendChild(divText);

  const infoText = document.createElement("p");
  infoText.innerHTML = decription;
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
  p.innerHTML = role;
  div.appendChild(p);

  const a = document.createElement("button");
  a.classList.add("link-item");
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
      setTimeout(function () {
        divText.style.display = "none";
      }, 300);
      a.classList.remove("opened");
    } else {
      divText.style.display = "block";
      divText.style.opacity = "0.975";
      a.classList.add("opened");
    }
  });
}

function loadNews(name, nameDescription, description, date) {
  const content = document.createElement("div");
  content.classList.add("container-info");
  container.appendChild(content);

  const head = document.createElement("div");
  head.classList.add("head");
  content.appendChild(head);

  const descriptionContainer = document.createElement("div");
  descriptionContainer.classList.add("description");
  content.appendChild(descriptionContainer);

  const footer = document.createElement("div");
  footer.classList.add("footer-date");
  content.appendChild(footer);

  const h1 = document.createElement("h1");
  h1.innerHTML = name;
  head.appendChild(h1);

  const nameDesc = document.createElement("span");
  nameDesc.innerHTML = nameDescription;
  head.appendChild(nameDesc);

  description.forEach(({ heading, span }) => {
    const h2 = document.createElement("h2");
    h2.innerHTML = heading;
    descriptionContainer.appendChild(h2);

    const info = document.createElement("span");
    info.innerHTML = span;
    descriptionContainer.appendChild(info);
  });

  const h4 = document.createElement("h4");
  h4.innerHTML = date;
  footer.appendChild(h4);
}

loadHome();

document.body.classList.add("load-scroll");
setTimeout(function () {
  document.body.classList.remove("load-scroll");
}, 1000);

let illarionz = "Крутой тип с фасика.";
let rokeyzzz = "Меня убил Дантес, я призрак Пушкина, преследую маленьких девочек по Иркутску, чтобы написать поэму о их маленькой жизни.";
let kurtted = 'Меня бросила девушка со словами "Ты мне больше никто", в ответ я сказал "Маме своей так скажи" и проломил ей череп вертухой дрррррпмбум чикибубуббм...';
let realm = "Мастер разоблачений, самый крутой тип на сервере, создатель этого сайта."

let infoDescription = [
  {
    heading: "Добавление нового бота",
    span: "Теперь в ⁠🤖︱бот-команды можно вводить функции @GAME-INFO  который будет оповещать вас о различных раздачах игр и многое другое. Подробнее можно узнать выполнив команду !help выбрав данного бота как условие запроса. ",
  },
  {
    heading: "Добавление нового бота",
    span: "В предыдущем обновлении 1.5 мы добавляли «КЛАНЫ» спустя время они стали не актуальны, хоть задумка была интересная и даже очень залипательная, но всему приходит конец, поэтому мы ее удалили полностью. ",
  },
  {
    heading: "Добавление нового бота",
    span: "Решили заменить символ на более иной, прошлый надоел.",
  },
];

headLi.forEach((element) => {
  element.addEventListener("click", (event) => {
    if (event.target.id == "home") {
      clear();
      container.style.alignItems = "center";
      main.style.backgroundImage = 'url("./assets/back.webp")';
      loadHome();
    } else if (event.target.id == "news") {
      clear();
      container.style.alignItems = "center";
      main.style.backgroundImage = 'url("./assets/back2.jpg")';
      loadNews(
        "Обновление сервера 1.6",
        "Обновление с некоторыми исправлениями",
        infoDescription,
        "Обновление от 12.08.24"
      );
    } else if (event.target.id == "info") {
      clear();
      container.style.alignItems = "baseline";
      main.style.backgroundImage = 'url("./assets/back1.webp")';

      const content = document.createElement("div");
      content.classList.add("grid-container");
      container.appendChild(content);

      document.body.classList.add("load-scroll");
      setTimeout(function () {
        document.body.classList.remove("load-scroll");
      }, 1000);

      loadInfo(
        "Illarionz",
        "Owner N7",
        illarionz,
        "./assets/illarionz.jpg",
        content
      );
      loadInfo(
        "rokeyzzz",
        "Owner N7",
        rokeyzzz,
        "./assets/rokeyzzz.png",
        content
      );
      loadInfo(
        "kurtted",
        "Developer N7",
        kurtted,
        "./assets/kurtted.gif",
        content
      );
      loadInfo(
        "realm",
        "Developer N7",
        realm,
        "./assets/realm.gif",
        content
      )
    }
  });
});
