const express = require('express');
const app = express();
const port = 3000;

const dadosLigas = require('./jogadores');

// 1. Rota Principal: Dashboard Visual (HTML + CSS)
app.get('/', (req, res) => {
  // Encontrando o melhor jogador para o destaque do topo
  let melhorJogador = null;
  let melhorLiga = "";
  for (const chaveLiga in dadosLigas) {
    const liga = dadosLigas[chaveLiga];
    liga.jogadores.forEach(jogador => {
      if (!melhorJogador || jogador.total_ga > melhorJogador.total_ga) {
        melhorJogador = jogador;
        melhorLiga = liga.nome;
      }
    });
  }

  // Criando as tabelas para cada liga dinamicamente
  let tabelasHTML = "";
  for (const chaveLiga in dadosLigas) {
    const liga = dadosLigas[chaveLiga];
    
    tabelasHTML += `
      <div class="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
        <div class="flex items-center justify-between mb-4 border-b border-gray-700 pb-3">
          <h2 class="text-xl font-bold text-emerald-400">${liga.nome}</h2>
          <span class="text-sm font-semibold px-3 py-1 bg-gray-700 text-gray-300 rounded-full">${liga.pais}</span>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="text-gray-400 text-xs uppercase tracking-wider border-b border-gray-700">
                <th class="pb-3">Jogador</th>
                <th class="pb-3">Clube</th>
                <th class="pb-3 text-center">Golos</th>
                <th class="pb-3 text-center">Assists</th>
                <th class="pb-3 text-right text-emerald-400">G/A</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-700 text-gray-300">
    `;

    liga.jogadores.forEach(j => {
      tabelasHTML += `
        <tr class="hover:bg-gray-750 transition duration-150">
          <td class="py-3 font-medium text-white">${j.nome}</td>
          <td class="py-3 text-gray-400">${j.clube}</td>
          <td class="py-3 text-center font-semibold">${j.golos}</td>
          <td class="py-3 text-center font-semibold">${j.assistencias}</td>
          <td class="py-3 text-right font-bold text-emerald-400">${j.total_ga}</td>
        </tr>
      `;
    });

    tabelasHTML += `
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // Página HTML Completa
  const html = `
    <!DOCTYPE html>
    <html lang="pt">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Estatísticas da temporada 2025/2026</title>
      <!-- Tailwind CSS para um design instantaneamente incrível -->
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-gray-900 text-gray-100 font-sans min-h-screen">
      <div class="max-w-7xl mx-auto px-4 py-8">
        
        <!-- Cabeçalho -->
        <header class="flex flex-col md:flex-row items-center justify-between mb-10 pb-6 border-b border-gray-800">
          <div>
            <h1 class="text-3xl font-extrabold tracking-tight text-white flex items-center gap-2">
              ⚽ Football Stats Tracker
            </h1>
            <p class="text-gray-400 mt-1">Estatísticas de elite das principais ligas europeias (Época 2025/2026)</p>
          </div>
          <div class="mt-4 md:mt-0 flex gap-3">
            <a href="/ligas" class="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm font-semibold transition">Ver API JSON</a>
            <a href="/melhor-temporada" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-lg text-sm font-semibold transition text-white">Vencedor JSON</a>
          </div>
        </header>

        <!-- Card de Destaque: O Melhor da Época -->
        ${melhorJogador ? `
        <div class="bg-gradient-to-r from-emerald-900 to-teal-900 rounded-2xl p-8 mb-12 shadow-2xl border border-emerald-500/30 relative overflow-hidden">
          <div class="absolute -right-10 -bottom-10 opacity-10 text-9xl font-extrabold select-none">🏆</div>
          <div class="relative z-10">
            <span class="bg-emerald-500/20 text-emerald-300 text-xs font-extrabold uppercase px-3 py-1 rounded-full tracking-wider border border-emerald-500/30">
              Melhor Época Europeia 25/26
            </span>
            <h2 class="text-4xl font-black mt-4 text-white">${melhorJogador.nome}</h2>
            <p class="text-emerald-200 text-lg mt-1 font-medium">${melhorJogador.clube} • ${melhorLiga}</p>
            
            <div class="flex gap-8 mt-6">
              <div>
                <p class="text-xs text-emerald-300 uppercase font-bold tracking-wider">Golos</p>
                <p class="text-3xl font-black text-white">${melhorJogador.golos}</p>
              </div>
              <div class="border-l border-emerald-500/20 pl-8">
                <p class="text-xs text-emerald-300 uppercase font-bold tracking-wider">Assistências</p>
                <p class="text-3xl font-black text-white">${melhorJogador.assistencias}</p>
              </div>
              <div class="border-l border-emerald-500/20 pl-8">
                <p class="text-xs text-emerald-300 uppercase font-bold tracking-wider">Total G/A</p>
                <p class="text-3xl font-black text-emerald-300">${melhorJogador.total_ga}</p>
              </div>
            </div>
          </div>
        </div>
        ` : ''}

        <!-- Grelha de Ligas -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          ${tabelasHTML}
        </div>

        <footer class="mt-16 text-center text-sm text-gray-500 border-t border-gray-800 pt-6">
          <p>Criado por Miguel Nazaré • Desenvolvido com Node.js & Express</p>
        </footer>

      </div>
    </body>
    </html>
  `;

  res.send(html);
});

// 2. Rotas API normais (para mostrar que também és um mestre do backend)
app.get('/ligas', (req, res) => {
  res.json(dadosLigas);
});

app.get('/melhor-temporada', (req, res) => {
  let melhorJogador = null;
  let melhorLiga = "";

  for (const chaveLiga in dadosLigas) {
    const liga = dadosLigas[chaveLiga];
    liga.jogadores.forEach(jogador => {
      if (!melhorJogador || jogador.total_ga > melhorJogador.total_ga) {
        melhorJogador = jogador;
        melhorLiga = liga.nome;
      }
    });
  }

  if (melhorJogador) {
    res.json({
      mensagem: "🏆 O jogador com a melhor temporada!",
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