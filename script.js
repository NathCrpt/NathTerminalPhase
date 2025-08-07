function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
}

// Appliquer le thème enregistré au chargement
(function () {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
})();

let currentLang = "fr";

function toggleLang() {
  const btn = document.querySelector('.lang-toggle img.lang-icon');
  if (btn.getAttribute("src").includes("borney.com")) {
    btn.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/2560px-Flag_of_the_United_Kingdom_%283-5%29.svg.png");
    btn.setAttribute("alt", "English");
    currentLang = "en";
  } else {
    btn.setAttribute("src", "https://borney.com/2396-large_default/drapeau-france.jpg");
    btn.setAttribute("alt", "Français");
    currentLang = "fr";
  }
  applyTranslations();
}

const translations = {
  fr: {
    nav: {
      about: "À propos",
      projects: "Projets",
      contact: "Contact"
    },
    card: {
      title: "NATH",
      desc: "Nysux Player | Murphy's law victim",
      team: "NYSUX",
      country: "FRANCE"
    },
    sections: {
      aboutTitle: "À propos de moi",
      aboutText1: "Passionné par l'informatique depuis plusieurs années, j’ai développé un intérêt profond pour les jeux vidéo, le hardware, le code, les réseaux et la cybersécurité. Cette passion est née pendant le confinement, période durant laquelle j’ai commencé à m’interroger sur le fonctionnement des systèmes informatiques qui m'entouraient, en particulier ceux liés au gaming.",
      aboutText2: "Guidé par des sources comme DiscoverID ou FnK Hardware, j’ai appris à décrypter l’architecture des composants, à comparer les performances des CPU/GPU, et à monter moi-même des configurations optimisées. Cette curiosité technique m’a naturellement conduit à explorer le fonctionnement des logiciels et à écrire mes premières lignes de code. Rapidement, j’ai élargi mes centres d’intérêt aux réseaux et à la cybersécurité.",
      aboutText3: "J’ai pu concrétiser cette approche à travers plusieurs stages, notamment chez Orange Innovation, où j’ai été confronté à des problématiques réelles en cybersécurité, en réseau et en cryptographie. Ces expériences ont renforcé ma volonté d’approfondir mes connaissances et de les appliquer à des projets concrets. Aujourd’hui, je cherche à poursuivre dans cette voie, en m’impliquant dans des environnements exigeants mêlant rigueur technique, esprit d’analyse et innovation. L’informatique est pour moi bien plus qu’un domaine d’étude : c’est un terrain d’expérimentation, d’apprentissage continu et de créativité.",
      projectsTitle: "Mes projets",
      project1Title: "Projet 1",
      project1Desc: "Site vitrine pour une entreprise locale.",
      project2Title: "Projet 2",
      project2Desc: "Application météo en JavaScript avec API OpenWeather.",
      project3Title: "Projet 3",
      project3Desc: "Portfolio personnel en React.",
      contactTitle: "Contact",
      contactText: "Tu peux me contacter à l’adresse suivante :",
      contactMail: "nathanaelglessmer@proton.me"
    },
    footer: "&copy; 2025 Nathanaêl Glessmer - Tous droits réservés"
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      contact: "Contact"
    },
    card: {
      title: "NATH",
      desc: "Nysux Player | Murphy's law victim",
      team: "NYSUX",
      country: "FRANCE"
    },
    sections: {
      aboutTitle: "About me",
      aboutText1: "Passionate about IT for several years, I have developed a deep interest in video games, hardware, coding, networks and cybersecurity. This passion was born during the lockdown, a period when I began to wonder about how the computer systems around me worked, especially those related to gaming.",
      aboutText2: "Guided by sources like DiscoverID or FnK Hardware, I learned to decipher component architecture, compare CPU/GPU performance, and build my own optimized setups. This technical curiosity naturally led me to explore how software works and to write my first lines of code. I quickly broadened my interests to networks and cybersecurity.",
      aboutText3: "I was able to put this approach into practice through several internships, notably at Orange Innovation, where I faced real issues in cybersecurity, networking, and cryptography. These experiences strengthened my desire to deepen my knowledge and apply it to concrete projects. Today, I am looking to continue in this direction, getting involved in demanding environments combining technical rigor, analytical skills and innovation. For me, IT is much more than a field of study: it is a playground for experimentation, continuous learning and creativity.",
      projectsTitle: "My projects",
      project1Title: "Project 1",
      project1Desc: "Showcase website for a local business.",
      project2Title: "Project 2",
      project2Desc: "Weather app in JavaScript with OpenWeather API.",
      project3Title: "Project 3",
      project3Desc: "Personal portfolio in React.",
      contactTitle: "Contact",
      contactText: "You can contact me at the following address:",
      contactMail: "nathanaelglessmer@proton.me"
    },
    footer: "&copy; 2025 Nathanaêl Glessmer - All rights reserved"
  }
};

function applyTranslations() {
  // Nav
  document.querySelector('nav a[href="#about"]').textContent = translations[currentLang].nav.about;
  document.querySelector('nav a[href="#projects"]').textContent = translations[currentLang].nav.projects;
  document.querySelector('nav a[href="#contact"]').textContent = translations[currentLang].nav.contact;
  // Carte
  document.querySelector('.id-content h2').textContent = translations[currentLang].card.title;
  document.querySelector('.id-desc').textContent = translations[currentLang].card.desc;
  document.querySelector('.id-team').childNodes[1].textContent = " " + translations[currentLang].card.team;
  document.querySelector('.id-country').innerHTML =
    (currentLang === "fr"
      ? '<img src="https://flagcdn.com/fr.svg" alt="France" style="width:18px;vertical-align:middle;"> FRANCE'
      : '<img src="https://flagcdn.com/fr.svg" alt="France" style="width:18px;vertical-align:middle"> FRANCE');
  // À propos
  document.querySelector('#about h2').textContent = translations[currentLang].sections.aboutTitle;
  const aboutParas = document.querySelectorAll('#about .alinea');
  aboutParas[0].textContent = translations[currentLang].sections.aboutText1;
  aboutParas[1].textContent = translations[currentLang].sections.aboutText2;
  aboutParas[2].textContent = translations[currentLang].sections.aboutText3;
  // Projets
  document.querySelector('#projects h2').textContent = translations[currentLang].sections.projectsTitle;
  const projectTitles = document.querySelectorAll('.project h3');
  const projectDescs = document.querySelectorAll('.project p');
  projectTitles[0].textContent = translations[currentLang].sections.project1Title;
  projectDescs[0].textContent = translations[currentLang].sections.project1Desc;
  projectTitles[1].textContent = translations[currentLang].sections.project2Title;
  projectDescs[1].textContent = translations[currentLang].sections.project2Desc;
  projectTitles[2].textContent = translations[currentLang].sections.project3Title;
  projectDescs[2].textContent = translations[currentLang].sections.project3Desc;
  // Contact
  document.querySelector('#contact h2').textContent = translations[currentLang].sections.contactTitle;
  document.querySelector('#contact p').textContent = translations[currentLang].sections.contactText;
  document.querySelector('#contact strong').textContent = translations[currentLang].sections.contactMail;
  // Footer
  document.querySelector('footer').innerHTML = translations[currentLang].footer;
}