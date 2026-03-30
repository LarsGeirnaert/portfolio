// Jouw persoonlijke projectenlijst
const websites = [
    {
        name: "Mijn CV (Lars Geirnaert)",
        url: "cv-lars-geirnaert.pdf",
        description: "Mijn curriculum vitae als student AI & Data Engineer aan de HoGent."
    },
    {
        name: "Strava Analyzer",
        url: "https://larsgeirnaert.github.io/strava-analyzer/",
        description: "Een webapplicatie voor het registreren, visualiseren en analyseren van sportprestaties."
    },
    {
        name: "YouTube Wrapped",
        url: "https://github.com/LarsGeirnaert/youtube-wrapped",
        description: "Een tool die persoonlijke kijkgeschiedenis analyseert en visueel presenteert (Source Code)."
    },
    {
        name: "Professional Communication Vocab",
        url: "https://larsgeirnaert.github.io/Voc-Proffesional-Communication/",
        description: "Een handige, interactieve website om efficiënt vocabulaire te leren en oefenen."
    },
    {
        name: "Weather Darts",
        url: "https://larsgeirnaert.github.io/weather-darts/",
        description: "Een creatief en leuk web-based spel waarbij je temperaturen moet raden."
    }
];

// De code die de knoppen op het scherm zet
const container = document.getElementById('links-container');

websites.forEach(site => {
    const card = document.createElement('a');
    card.href = site.url;
    card.className = 'link-card';
    card.target = '_blank'; // Zorgt dat de link in een nieuw tabblad opent

    const title = document.createElement('div');
    title.className = 'link-title';
    title.textContent = site.name;

    const desc = document.createElement('div');
    desc.className = 'link-desc';
    desc.textContent = site.description;

    card.appendChild(title);
    card.appendChild(desc);
    container.appendChild(card);
});