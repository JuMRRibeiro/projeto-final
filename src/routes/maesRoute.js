const express = require("express")
const router = express.Router()
const controller = require("../controllers/maesController")


router.get("/", controller.get)
router.get("/disponiveis", controller.getDisponibilidade)
//router.get("/:habitos", controller.getHabito)

router.post("/", controller.post)
//router.post("/:habitos", controller.postHabitos)

router.delete("/:id", controller.deletarMae)

router.put("/", controller.updateMae)
//router.put("/:habitos", controller.updateHabitos)


/**
 * @api {get} /Mae Carregadeira
 * @apiGroup Maes
 * *
 * @apiSuccess {Object[]} maes Lista de Maes
 *
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *   [{
 *       "nome": "Juliana Thamires dos Santos Martins Rangel Ribeiro"
 *      "email": "julianathmartins@gmail.com",
 *       "endereço": "Rua Jose Maria Lisboa",
 *      "dataNascimento": "1987-07-02T03:00:00.000Z",
 *       "estadoCivil": "Casada",
 *       "telefone": 989812920,
 * "habitos": "vegetariana",
 * "dispivel":true,
 *       "filhos": [{ "nome": "Gael" ,
 *                  "idade": "2 anos e 4 meses",
 *                  }]
 *
 *   }]
 *
 */
module.exports = router