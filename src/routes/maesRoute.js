const express = require("express")
const router = express.Router()
const controller = require("../controllers/maesController")

/**
 * @api {get} /maes/:id
 * @apiName getMaes
 * @apiGroup maes
 * 
 * @apiParam {Number} id Users unique ID
 * @apiSuccess {Object[]} maes Lista de Maes
 *
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *   [{  {
 *      "nome": "Juliana Thamires dos Santos Martins Rangel Ribeiro",
 *       "email": "julianathmartins@gmail.com",
 *      "endereco": "Rua Jose Maria Lisboa",
 *       "dataNascimento": "1987-07-02T03:00:00.000Z",
 *       "estadoCivil": "Casada",
 *       "telefone": 989812920,
 *       "habitos": "vegetariana",
 *       "disponivel": true,
 *       "filhos": [
 *           {
 *               "nome": "Gael",
 *               "idade": "2 anos e 4 meses"
 *      
 *                  }
 *               }]
 *
 *   }]
 *
 */

router.get("/", controller.get)
router.get("/disponiveis", controller.getDisponibilidade)
router.get("/:id", controller.getMaes)

router.post("/", controller.post)

router.delete("/:id", controller.deletarMae)

router.put("/:id", controller.updateMae)


module.exports = router