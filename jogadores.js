const dadosLigas = {
  // 1. LIGA PORTUGAL (Portugal)
  liga_portugal: {
    nome: "Liga Portugal Betclic",
    pais: "🇵🇹 Portugal",
    jogadores: [
      { nome: "Luis Suárez", clube: "Sporting CP", golos: 28, assistencias: 5, total_ga: 33 },
      { nome: "Vangelis Pavlidis", clube: "Benfica", golos: 18, assistencias: 4, total_ga: 22 },
      { nome: "João Carvalho", clube: "Estoril Praia", golos: 6, assistencias: 12, total_ga: 18 }
    ]
  },
  // 2. PREMIER LEAGUE (Inglaterra)
  premier_league: {
    nome: "Premier League",
    pais: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra",
    jogadores: [
      { nome: "Erling Haaland", clube: "Manchester City", golos: 27, assistencias: 8, total_ga: 35 },
      { nome: "Bruno Fernandes", clube: "Manchester United", golos: 9, assistencias: 21, total_ga: 30 },
      { nome: "Igor Thiago", clube: "Brentford", golos: 22, assistencias: 1, total_ga: 23 }
    ]
  },
  // 3. LA LIGA (Espanha)
  la_liga: {
    nome: "La Liga",
    pais: "🇪🇸 Espanha",
    jogadores: [
      { nome: "Lamine Yamal", clube: "FC Barcelona", golos: 16, assistencias: 11, total_ga: 27 },
      { nome: "Kylian Mbappé", clube: "Real Madrid", golos: 25, assistencias: 5, total_ga: 30 },
      { nome: "Vinícius Júnior", clube: "Real Madrid", golos: 16, assistencias: 5, total_ga: 21 }
    ]
  },
  // 4. BUNDESLIGA (Alemanha)
  bundesliga: {
    nome: "Bundesliga",
    pais: "🇩🇪 Alemanha",
    jogadores: [
      { nome: "Harry Kane", clube: "Bayern Munich", golos: 36, assistencias: 5, total_ga: 41 },
      { nome: "Michael Olise", clube: "Bayern Munich", golos: 15, assistencias: 19, total_ga: 34 },
      { nome: "Luis Díaz", clube: "Bayern Munich", golos: 15, assistencias: 14, total_ga: 29 }
    ]
  },
  // 5. SERIE A (Itália)
  serie_a: {
    nome: "Serie A",
    pais: "🇮🇹 Itália",
    jogadores: [
      { nome: "Lautaro Martínez", clube: "Inter Milan", golos: 17, assistencias: 6, total_ga: 23 },
      { nome: "Donyell Malen", clube: "Roma", golos: 14, assistencias: 4, total_ga: 18 },
      { nome: "Anastasios Douvikas", clube: "Como", golos: 14, assistencias: 3, total_ga: 17 }
    ]
  },
  // 6. LIGUE 1 (França)
  ligue_1: {
    nome: "Ligue 1",
    pais: "🇫🇷 França",
    jogadores: [
      { nome: "Esteban Lepaul", clube: "Angers", golos: 21, assistencias: 5, total_ga: 26 },
      { nome: "Mason Greenwood", clube: "Marseille", golos: 16, assistencias: 7, total_ga: 23 },
      { nome: "Florian Thauvin", clube: "Lens", golos: 11, assistencias: 6, total_ga: 17 }
    ]
  }
};

module.exports = dadosLigas;