const express = require('express');
const app = express();
const port = 3000;

// Importamos o novo ficheiro de dados que criaste
const dadosLigas = require('./jogadores');

// 1. Rota principal para ver se a API está online
app.get('/', (req, res) => {
  res.send('⚽ API de Estatísticas de Futebol (Época 25/26) está online!');
});

// 2. Rota para listar todas as ligas e os seus respetivos jogadores
app.get('/ligas', (req, res) => {
  res.json(dadosLigas);
});

// 3. Rota especial: Determinar quem teve a melhor temporada (Maior G/A)
app.get('/melhor-temporada', (req, res) => {
  let melhorJogador = null;
  let melhorLiga = "";

  // Percorremos cada liga dentro do nosso objeto de dados
  for (const chaveLiga in dadosLigas) {
    const liga = dadosLigas[chaveLiga];
    
    // Percorremos os jogadores dessa liga
    liga.jogadores.forEach(jogador => {
      // Se for o primeiro jogador que vemos, ou se este tiver mais G/A que o atual melhor
      if (!melhorJogador || jogador.total_ga > melhorJogador.total_ga) {
        melhorJogador = jogador;
        melhorLiga = liga.nome;
      }
    });
  }

  // Se encontrámos um jogador, enviamos a resposta estruturada
  if (melhorJogador) {
    res.json({
      mensagem: "🏆 O jogador com a melhor temporada (Golos + Assistências) na época 2025/2026!",
      liga: melhorLiga,
      jogador: melhorJogador.nome,
      clube: melhorJogador.clube,
      golos: melhorJogador.golos,
      assistencias: melhorJogador.assistencias,
      total_ga: melhorJogador.total_ga
    });
  } else {
    res.status(404).json({ erro: "Não foi possível determinar o melhor jogador." });
  }
});

app.listen(port, () => {
  console.log(`Servidor a correr em http://localhost:${port}`);
});