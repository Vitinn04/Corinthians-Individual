var povoboardModel = require("../models/povoboardModel");

function maisEscolhido(req, res) {
    povoboardModel.maisEscolhido()
      .then(function (resultadoMaisEscolhido) {
        res.json({
            jogadorFavorito: resultadoMaisEscolhido[0].jogadorFavorito
        });
      })
      .catch(function (erro) {
        console.error(erro);
        console.error("Houve um erro ao obter o jogador mais Escolhido! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
}

function mediaClick(req, res) {
    povoboardModel.mediaClick()
      .then(function (resultadoMediaClick) {
        res.json({
            media: resultadoMediaClick[0].media
        });
      })
      .catch(function (erro) {
        console.error(erro);
        console.error("Houve um erro ao obter a media de click's! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
}

function ranking(req, res) {
    povoboardModel.ranking()
      .then(function (resultadoRanking) {
        res.json({
            rankingNome1: resultadoRanking[0].nome1,
            rankingTempo1: resultadoRanking[0].tempo1,
            rankingNome2: resultadoRanking[0].nome2,
            rankingTempo2: resultadoRanking[0].tempo2,
            rankingNome3: resultadoRanking[0].nome3,
            rankingTempo3: resultadoRanking[0].tempo3
        });
      })
      .catch(function (erro) {
        console.error(erro);
        console.error("Houve um erro ao obter o ranking! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
}

function grafico(req, res) {
  povoboardModel.grafico()
    .then(function (resultadoGrafico) {
      res.json(resultadoGrafico);
    })
    .catch(function (erro) {
      console.error(erro);
      console.error("Houve um erro ao obter o ranking! Erro: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    maisEscolhido,
    mediaClick,
    ranking,
    grafico
}