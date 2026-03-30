const websites = [
    {
        name: "Curriculum Vitae",
        url: "cv-lars-geirnaert.pdf",
        description: "Mijn professionele achtergrond en technische vaardigheden."
    },
    {
        name: "Strava Analyzer",
        url: "https://larsgeirnaert.github.io/strava-analyzer/",
        description: "Interactieve dashboarding voor sport- en prestatieanalyse."
    },
    {
        name: "YouTube Wrapped",
        url: "youtube-wrapped.html",
        description: "Data-verwerking en visualisatie van persoonlijke kijkgeschiedenis."
    },
    {
        name: "Communication Vocab",
        url: "vocab-preview.html",
        description: "Gepersonaliseerde tool voor professionele terminologie."
    },
    {
        name: "Weather Darts",
        url: "https://larsgeirnaert.github.io/weather-darts/",
        description: "Web-app die real-time weerdata combineert met gamification."
    }
];

const container = document.getElementById('links-container');

websites.forEach((site) => {
    const card = document.createElement('a');
    card.href = site.url;
    card.className = 'link-card';
    card.target = '_blank';

    card.innerHTML = `
        <div class="link-title">${site.name}</div>
        <div class="link-desc">${site.description}</div>
    `;

    container.appendChild(card);
});