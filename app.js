const menuBtn = document.querySelector(".mobile-menu-btn");
const mobileMenu = document.querySelector(".menu-list-items");
const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");

function openMobileMenu() {
  mobileMenu.classList.toggle("toggle-mobile-menu");
  openBtn.classList.toggle("make-disappear");
  closeBtn.classList.toggle("make-appear");
}

menuBtn.addEventListener("click", () => {
  openMobileMenu();
});

const mainProgram = document.querySelector(".main-program");
const moreBtn = document.createElement("div");
const moreLink = document.createElement("a");

moreLink.href = "#";
moreLink.innerText = "SEE THE WHOLE PROGRAM";

moreBtn.appendChild(moreLink);
mainProgram.appendChild(moreBtn);

moreLink.classList.add("main-program-see-more-link");
moreBtn.classList.add("main-program-see-more-btn");
moreBtn.classList.add("new-main-program-btn-container");

const speakerArray = [
  {
    speakerImage: "https://picsum.photos/200",
    speakerName: "Yochai Benkler",
    speakerProfession:
      "Berkman Professor of Entrepreneurial Legal Studies at Havard Law School",
    speakerDetails:
      "Benkler studies commons-based peer production and published his seminal book: The Wealth of Networks in 2006.",
  },
  {
    speakerImage: "https://picsum.photos/200",
    speakerName: "SohYeong Noh",
    speakerProfession:
      "Director of Art Center Nabi and a board member of CC Korea",
    speakerDetails:
      "As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.",
  },
];

function newSpeaker(item) {
  const newSpeakerList = document.createElement("li");
  const emptyString = `<div class="speaker-image-container">
    <img src=${item.speakerImage} alt=${item.speakerName} />
    </div>
    <div class="speaker-details-container">
      <h3 class="speaker-name">${item.speakerName}</h3>
      <p class="speaker-profession">
        ${item.speakerProfession}
      </p>
      <hr />
      <p class="speaker-details">
        ${item.speakerDetails}
      </p>
    </div>`;

  newSpeakerList.innerHTML = emptyString;

  return newSpeakerList;
}

speakerArray.forEach((e) => {
  document.querySelector(".speakers-list").appendChild(newSpeaker(e));
});
