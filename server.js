const express = require('express');
const app = express();
const PORT = 3000;

const ligasfutebol = require('./ligas');

app.use(express.json());

// Rota 1: Boas-vindas
app.get('/', (req, res) => {
  res.send('⚽ Bem-vindo ao Football Stats Tracker - Época 2025/2026!');
});

// Rota 2: Listar todas as ligas
app.get('/api/ligas', (req, res) => {
  const resumoLigas = Object.keys(ligasfutebol).map(chave => ({
    id: chave,
    nome: ligasfutebol[chave].nome,
    pais: ligasfutebol[chave].pais
  }));
  res.json(resumoLigas);
});

// Rota 3: Mostrar os clubes e jogadores (com estatísticas) de uma liga
app.get('/api/ligas/:nomedaliga', (req, res) => {
  const ligaProcurada = req.params.nomedaliga.toLowerCase();
  const dadosDaLiga = ligasfutebol[ligaProcurada];

  if (dadosDaLiga) {
    res.json(dadosDaLiga);
  } else {
    res.status(404).json({ erro: "Liga não encontrada." });
  }
});

// Rota Nova! 🚀 Procurar um jogador específico em qualquer liga para ver as suas estatísticas
app.get('/api/jogadores/:nome', (req, res) => {
  const nomeProcurado = req.params.nome.toLowerCase();
  let jogadorEncontrado = null;

  // Procura em todas as ligas e clubes pelo jogador
  for (const chaveLiga in ligasfutebol) {
    for (const clube of ligasfutebol[chaveLiga].clubes) {
      const jogador = clube.jogadores.find(j => j.nome.toLowerCase().includes(nomeProcurado));
      if (jogador) {
        jogadorEncontrado = {
          nome: jogador.nome,
          clube: clube.nome,
          liga: ligasfutebol[chaveLiga].nome,
          golos: jogador.golos,
          assistencias: jogador.assistencias
        };
        break;
      }
    }
  }

  if (jogadorEncontrado) {
    res.json(jogadorEncontrado);
  } else {
    res.status(404).json({ erro: "Jogador não encontrado." });
  }
});

app.listen(PORT, () => {
  console.log(`⚽ Servidor de Futebol atualizado em http://localhost:${PORT}`);
});