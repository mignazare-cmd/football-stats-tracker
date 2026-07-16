// ligas.js
const ligasfutebol = {
  "premier-league": {
    nome: "Premier League",
    pais: "Inglaterra",
    clubes: [
      { 
        nome: "Liverpool", 
        jogadores: [
          { nome: "Mohamed Salah", golos: 14, assistencias: 8 },
          { nome: "Hugo Ekitike", golos: 8, assistencias: 3 },
          { nome: "Alexander Isak", golos: 11, assistencias: 2 },
          { nome: "Florian Wirtz", golos: 6, assistencias: 9 }
        ] 
      },
      { 
        nome: "Manchester City", 
        jogadores: [
          { nome: "Erling Haaland", golos: 22, assistencias: 1 },
          { nome: "Bernardo Silva", golos: 4, assistencias: 7 }
        ] 
      },
      { 
        nome: "Arsenal", 
        jogadores: [
          { nome: "Bukayo Saka", golos: 9, assistencias: 11 },
          { nome: "Viktor Gyökeres", golos: 16, assistencias: 4 }
        ] 
      }
    ]
  },
  "liga-portugal": {
    nome: "Liga Portugal Betclic",
    pais: "Portugal",
    clubes: [
      { 
        nome: "Sporting CP", 
        jogadores: [
          { nome: "Pedro Gonçalves", golos: 10, assistencias: 8 },
          { nome: "Francisco Trincão", golos: 7, assistencias: 6 }
        ] 
      },
      { 
        nome: "SL Benfica", 
        jogadores: [
          { nome: "Vangelis Pavlidis", golos: 13, assistencias: 3 },
          { nome: "Sudakov", golos: 5, assistencias: 7 }
        ] 
      },
      { 
        nome: "FC Porto", 
        jogadores: [
          { nome: "Samu", golos: 15, assistencias: 2 },
          { nome: "Rodrigo Mora", golos: 3, assistencias: 4 }
        ] 
      }
    ]
  }
  // Se quiseres, depois podemos voltar a colar a LaLiga, Serie A, etc., com este formato!
};

module.exports = ligasfutebol;