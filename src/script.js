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
let rokeyzzz =
  "Меня убил Дантес, я призрак Пушкина, преследую маленьких девочек по Иркутску, чтобы написать поэму о их маленькой жизни.";
let kurtted =
  'Меня бросила девушка со словами "Ты мне больше никто", в ответ я сказал "Маме своей так скажи" и проломил ей череп вертухой дрррррпмбум чикибубуббм...';
let realm =
  "Мастер разоблачений, самый крутой тип на сервере, создатель этого сайта.";

let infoDescription = [
  {
    heading: "Добавление нового бота",
    span: "Теперь в #🤖︱бот-команды можно использовать нашего N7 Бота, который будет вам выдавать монеты, с помощью них вы сможете приобретать различные бонусы, кастомные роли итд, бот будет поддерживаться и обновляться постоянно. ПОДРОБНЕЕ О БОТЕ МОЖНО УЗНАТЬ В #🤖︱бот-команды написав туда .help или 7.help",
  },
  {
    heading: "Изменения в каналах: инфо-роли, правила, новости сервера",
    span: "С помощью нового бота, мы решили сделать некий редизайн данных каналов, тем самым сделав большой акцент на конкретику, простоту и понимание",
  },
  {
    heading: "Сайт N7",
    span: "Хотим вам представить наш сайт по дискорд серверу, перейти по нему можно по этой ссылке - https://akiokane.github.io/n7-site/. Сайт будет постоянно обновляться, в нем вы можете узнать все о новых апдейтах и многое другое!",
  },
  {
    heading: "Новые роли",
    span: "Из новых ролей это: @Developer N7 - разработчики проектов с поддержкой сервера; @Major - топ 3 участника нашего сервера по монетам N7 Бота @N7 Bot#0700. Также подробнее об этих ролях и других можно узнать в #🗂︱инфо-роли",
  },
  {
    heading: "Апдейт сервера бустами",
    span: "Мы решили добавить бусты нашему серверу для того чтобы прокачать визуал, этим самым апгрейд трансляций - 1080p 60fps, внешний вид ролей + эмодзи к ним и многое другое, пользуйтесь!"
  },
  {
    heading: "Обновления по БОТУ N7",
    span: "В чате #◉︱обновления-бота автор @kurtted будет высылать туда сообщение ЕСЛИ будут какое то изменение в боте. Ожидаем от вас обратную связь по обновлению и желание помочь серверу если есть идеи в #💡︱идеи-для-сервера"
  }
];

headLi.forEach((element) => {
  element.addEventListener("click", (event) => {
    if (event.target.id == "home") {
      clear();
      container.style.alignItems = "center";
      main.style.backgroundColor = "#171717";
      main.style.backgroundImage = "none";
      loadHome();
    } else if (event.target.id == "news") {
      clear();
      container.style.alignItems = "center";
      main.style.backgroundImage = 'url("./assets/back2.jpg")';
      loadNews(
        "Обновление сервера 1.7",
        "Крупный апдейт с кучей нововведений",
        infoDescription,
        "Обновление от 01.09.24"
      );
    } else if (event.target.id == "info") {
      clear();
      container.style.alignItems = "baseline";
      main.style.backgroundColor = "#171717";
      main.style.backgroundImage = "none";

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
        "./assets/rokeyzzz.gif",
        content
      );
      loadInfo(
        "kurtted",
        "Developer N7",
        kurtted,
        "./assets/kurtted.gif",
        content
      );
      loadInfo("realm", "Developer N7", realm, "./assets/realm.gif", content);
    }
  });
});
