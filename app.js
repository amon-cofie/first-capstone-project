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
    speakerImage: "./images/Featured-speakers/1.jpg",
    speakerName: "Margaret Moreno",
    speakerProfession:
      "Berkman Professor of Entrepreneurial Legal Studies at Havard Law School",
    speakerDetails:
      "Moreno studies commons-based peer production and published her seminal book: The Wealth of Networks in 2006.",
  },
  {
    speakerImage: "./images/Featured-speakers/2.jpg",
    speakerName: "Tobias Block",
    speakerProfession:
      "Director of the BMEN Center and a board member of BMEN Global",
    speakerDetails:
      "As the main venue for new BMEN exhibition center in Korea, Block promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.",
  },
  {
    speakerImage: "./images/Featured-speakers/3.jpg",
    speakerName: "Dillon Sturgill",
    speakerProfession: "Executive Director for Wikimedia foundation",
    speakerDetails:
      "Dillon Sturgill is the Executive Director of the Wikimedia foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a billion people around the world every month.",
  },
  {
    speakerImage: "./images/Featured-speakers/4.jpg",
    speakerName: "Damien Mcneil",
    speakerProfession:
      "Professor in Biomedical Engineering, Cambridge University.",
    speakerDetails:
      "Damien Mcneil helped bring the internet to Asia and is an outspoken advocate for the open web and digital commons, In 2012, he was inducted into the inaugural class of the internet society's (ISOC) Internet Hall of Fame.",
  },
  {
    speakerImage: "./images/Featured-speakers/5.jpg",
    speakerName: "Lucio Ridenour",
    speakerProfession: "CEO of BMEN Global, ex CPP of the Mozilla Foundation.",
    speakerDetails:
      "Lucio had been leading open-source projects at the Mozilla Foundation such as the open source movement.",
  },
  {
    speakerImage: "./images/Featured-speakers/6.jpg",
    speakerName: "Deborah Barnes",
    speakerProfession: "President of Young Pirates Europe",
    speakerDetails:
      "With European integration, political democracy and participation of youth through online as her major concern, her report outlining potential changes to EU copyright law was approved by te Parliament in July.",
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
