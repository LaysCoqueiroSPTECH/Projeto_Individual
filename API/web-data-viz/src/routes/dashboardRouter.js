var express = require("express");
var router = express.Router();
var dashboardController = require("../controllers/dashboardController");

router.get("/grafico-ranking", function (req, res) {
    dashboardController.graficoRanking(req, res);
});

router.get("/grafico-evolucao/:idUsuario", function (req, res) {
    dashboardController.graficoEvolucao(req, res);
});

router.get("/kpi-media-geral", function (req, res) {
    dashboardController.kpiMediaGeral(req, res);
});

router.get("/kpi-media/:idUsuario", function (req, res) {
    dashboardController.KpiMediaUsuario(req, res);
});

module.exports = router;