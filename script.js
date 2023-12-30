const links = [
  {
    img: "linkedin.png",
    text: "Linkedin",
    emoji: "🤖",
    href: "",
  },
  {
    img: "instagram.png",
    text: "Instagram",
    emoji: "😏",
    href: "",
  },
  {
    img: "youtube.png",
    text: "Youtube",
    emoji: "🙂",
    href: "",
  },
];
const init = () => {
    // Get the element itself, not its attribute node
    const linksSection = document.getElementById("links");
  
    links.forEach((link) => {
      let newLinkBox = document.createElement("div");
      newLinkBox.setAttribute("id", "link_box");
  
      let item = `
        <a href="${link.href}" id="link" target="_blank"> <!-- Add target="_blank" -->
          <img src="./assets/${link.img}" alt="${link.text}">
          <h3>${link.text}</h3>
          <p class="icon">${link.emoji}</p>
        </a>
      `;
      
      newLinkBox.innerHTML = item;
      linksSection.appendChild(newLinkBox);
    });
  };
  
  init();
