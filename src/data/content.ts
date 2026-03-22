export interface ContentItem {
  id: string;
  title: string;
  image: string;
  category: string;
  type: "manga" | "film";
  episodes?: string;
  year?: string;
  description: string;
  videoUrl?: string;
  downloadUrl?: string;
}

export const mangas: ContentItem[] = [
  {
    id: "solo-leveling",
    title: "Solo Leveling",
    image: "https://cdn.myanimelist.net/images/anime/1001/138810l.jpg",
    category: "Action",
    type: "manga",
    episodes: "12 épisodes",
    year: "2024",
    description: "Sung Jin-Woo, le plus faible des chasseurs de rang E, obtient un pouvoir mystérieux qui lui permet de monter en niveau sans limite. Regardez son ascension vers le sommet.",
    videoUrl: "https://www.youtube.com/embed/Jit4ifsSTsE",
  },
  {
    id: "jujutsu-kaisen",
    title: "Jujutsu Kaisen",
    image: "https://cdn.myanimelist.net/images/anime/1171/109222l.jpg",
    category: "Shōnen",
    type: "manga",
    episodes: "47 épisodes",
    year: "2023",
    description: "Yuji Itadori rejoint une organisation secrète de sorciers pour tuer un démon puissant dont il est devenu l'hôte. Combats intenses et scénario captivant.",
    videoUrl: "https://www.youtube.com/embed/4A_X-Dvl0ws",
  },
  {
    id: "chainsaw-man",
    title: "Chainsaw Man",
    image: "https://cdn.myanimelist.net/images/anime/1806/126216l.jpg",
    category: "Action",
    type: "manga",
    episodes: "12 épisodes",
    year: "2022",
    description: "Denji, un jeune homme désespéré, fusionne avec un démon tronçonneuse et devient un chasseur de démons redoutable. Un anime brutal et unique.",
    videoUrl: "https://www.youtube.com/embed/q15CRdE5Bv0",
  },
  {
    id: "demon-slayer",
    title: "Demon Slayer",
    image: "https://cdn.myanimelist.net/images/anime/1286/99889l.jpg",
    category: "Shōnen",
    type: "manga",
    episodes: "44 épisodes",
    year: "2023",
    description: "Tanjiro Kamado part en quête pour venger sa famille et sauver sa sœur transformée en démon. Animation à couper le souffle.",
    videoUrl: "https://www.youtube.com/embed/VQGCKyvzIM4",
  },
  {
    id: "attack-on-titan",
    title: "Attack on Titan",
    image: "https://cdn.myanimelist.net/images/anime/10/47347l.jpg",
    category: "Dark Fantasy",
    type: "manga",
    episodes: "87 épisodes",
    year: "2023",
    description: "L'humanité vit retranchée derrière d'immenses murs pour se protéger des Titans. Eren Yeager jure de tous les exterminer.",
    videoUrl: "https://www.youtube.com/embed/MGRm4IzK1SQ",
  },
  {
    id: "one-piece",
    title: "One Piece",
    image: "https://cdn.myanimelist.net/images/anime/6/73245l.jpg",
    category: "Aventure",
    type: "manga",
    episodes: "1100+ épisodes",
    year: "1999",
    description: "Monkey D. Luffy et son équipage parcourent les mers à la recherche du trésor ultime, le One Piece, pour devenir le Roi des Pirates.",
    videoUrl: "https://www.youtube.com/embed/MCb13lbVGE0",
  },
  {
    id: "bleach-tybw",
    title: "Bleach: TYBW",
    image: "https://cdn.myanimelist.net/images/anime/1908/135431l.jpg",
    category: "Shōnen",
    type: "manga",
    episodes: "26 épisodes",
    year: "2024",
    description: "La guerre millénaire sanglante éclate. Ichigo et les Shinigami affrontent les Quincy dans un combat pour la survie de Soul Society.",
    videoUrl: "https://www.youtube.com/embed/e8YBesS5sVg",
  },
  {
    id: "naruto-shippuden",
    title: "Naruto Shippuden",
    image: "https://cdn.myanimelist.net/images/anime/1565/111305l.jpg",
    category: "Shōnen",
    type: "manga",
    episodes: "500 épisodes",
    year: "2017",
    description: "Naruto Uzumaki revient plus fort que jamais pour sauver son ami Sasuke et protéger le village de Konoha contre de puissantes menaces.",
    videoUrl: "https://www.youtube.com/embed/1dy2zPPrKs0",
  },
];

export const films: ContentItem[] = [
  {
    id: "oppenheimer",
    title: "Oppenheimer",
    image: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    category: "Drame",
    type: "film",
    year: "2023",
    description: "L'histoire du physicien J. Robert Oppenheimer et son rôle dans le développement de la bombe atomique. Un chef-d'œuvre de Christopher Nolan.",
    videoUrl: "https://www.youtube.com/embed/uYPbbksJxIg",
  },
  {
    id: "dune-part-two",
    title: "Dune: Part Two",
    image: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    category: "Sci-Fi",
    type: "film",
    year: "2024",
    description: "Paul Atreides s'unit aux Fremen pour mener une guerre de vengeance contre ceux qui ont détruit sa famille, tout en tentant d'empêcher un terrible avenir.",
    videoUrl: "https://www.youtube.com/embed/Way9Dexny3w",
  },
  {
    id: "the-batman",
    title: "The Batman",
    image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    category: "Action",
    type: "film",
    year: "2022",
    description: "Batman enquête sur un tueur en série qui cible l'élite de Gotham avec des énigmes sadiques. Un thriller noir et intense.",
    videoUrl: "https://www.youtube.com/embed/mqqft2x_Aa4",
  },
  {
    id: "squid-game",
    title: "Squid Game",
    image: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
    category: "Série",
    type: "film",
    episodes: "Saison 1-2",
    year: "2024",
    description: "Des centaines de joueurs fauchés acceptent de participer à des jeux d'enfants mortels pour une chance de gagner une fortune colossale.",
    videoUrl: "https://www.youtube.com/embed/oqxAJKy0ii4",
  },
  {
    id: "breaking-bad",
    title: "Breaking Bad",
    image: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    category: "Série",
    type: "film",
    episodes: "5 saisons",
    year: "2013",
    description: "Un professeur de chimie atteint d'un cancer se lance dans la fabrication de méthamphétamine pour assurer l'avenir financier de sa famille.",
    videoUrl: "https://www.youtube.com/embed/HhesaQXLuRY",
  },
  {
    id: "john-wick-4",
    title: "John Wick 4",
    image: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    category: "Action",
    type: "film",
    year: "2023",
    description: "John Wick affronte la Grande Table dans un combat mondial épique. Des scènes d'action parmi les meilleures jamais filmées.",
    videoUrl: "https://www.youtube.com/embed/qEVUtrk8_B4",
  },
  {
    id: "stranger-things",
    title: "Stranger Things",
    image: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    category: "Série",
    type: "film",
    episodes: "4 saisons",
    year: "2022",
    description: "Dans la petite ville de Hawkins, un groupe d'enfants découvre des forces surnaturelles et des expériences gouvernementales secrètes.",
    videoUrl: "https://www.youtube.com/embed/b9EkMc79ZSU",
  },
  {
    id: "spider-man-atsv",
    title: "Spider-Man: ATSV",
    image: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    category: "Animation",
    type: "film",
    year: "2023",
    description: "Miles Morales traverse le multivers et rencontre une équipe de Spider-People chargés de protéger la réalité elle-même.",
    videoUrl: "https://www.youtube.com/embed/cqGjhVJWtEg",
  },
];

export const allContent = [...mangas, ...films];

export function getContentById(id: string): ContentItem | undefined {
  return allContent.find((c) => c.id === id);
}
