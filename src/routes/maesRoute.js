const express = require("express")
const router = express.Router()
const controller = require("../controllers/maesController")



/**
 * @api {get} /maes
 * 
 * @apiGroup Maes
 * 
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

/**
 * @api {get} /maes/{disponibilidade}
 * 
 * @apiGroup Maes
 * 
 * @apiParam {String} disponibilidade Disponibilidade da Mãe
 * 
 * @apiSuccess {Object[]} maes Lista de Maes Disponiveis
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
router.get("/disponiveis", controller.getDisponibilidade)


/**
 * @api {get} /maes/{nome}
 * 
 * @apiGroup Maes
 * 
 * @apiParam {String} nome Nome da mãe
 * 
 * @apiSuccess {Object[]} maes Mãe especifica por nome
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
router.get("/nome/:nome", controller.getNome)


/**
 * @api {post} /maes/{mae}
 * 
 * @apiGroup Maes
 * 
 * 
 * @apiParam (Request Body) {String} nome Nome da Mãe
 * @apiParam (Request Body) {String} email Email da Mãe
 * @apiParam (Request Body) {String} endereço Endereço da Mãe
 * @apiParam (Request Body) {String} dataNascimento Data Nascimento da Mãe
 * @apiParam (Request Body) {String} estadoCivil Estado Civil da Mãe
 * @apiParam (Request Body) {Number} telefone Telefone da Mãe
 * @apiParam (Request Body) {String} habitos Habitos da Mãe
 * @apiParam (Request Body) {Boolean} disponivel Diponibilidade da Mãe
 * @apiParam (Request Body) {String} filhos filhos da Mãe
 * 
 * @apiSuccess {Object[]} maes mensagem de sucesso ao incluir uma mãe
 *
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 201 Created
 * 
 *   { 
 *      status: true, 
 *      message: ' Mãe incluida com sucesso' 
 * }
 * 
 *
 */
router.post("/", controller.post)


/**
 * @api {delete} /maes/{id}
 * 
 * @apiGroup Maes
 * 
 * @apiParam {Number} id Id da Mãe
 * 
 * @apiSuccess {Object[]} maes Mensagem de sucesso ao deletar a mãe
 *
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    { 
 *       message: "Mãe removida com sucesso!"
 *     }
 *  
 *
 *
 */

router.delete("/:id", controller.deletarMae)


/**
 * @api {put} /maes/{filhos}
 * 
 * @apiGroup Maes
 * 
 * @apiParam {String} filhos Filhos da Mãe
 * 
 * @apiParam (Request Body) {String} nome Nome da Mãe
 * @apiParam (Request Body) {String} email Email da Mãe
 * @apiParam (Request Body) {String} endereço Endereço da Mãe
 * @apiParam (Request Body) {String} dataNascimento Data Nascimento da Mãe
 * @apiParam (Request Body) {String} estadoCivil Estado Civil da Mãe
 * @apiParam (Request Body) {Number} telefone Telefone da Mãe
 * @apiParam (Request Body) {String} habitos Habitos da Mãe
 * @apiParam (Request Body) {Boolean} disponivel Diponibilidade da Mãe
 * @apiParam (Request Body) {String} filhos filhos da Mãe
 * 
 * @apiSuccess {Object[]} maes mensagem de sucesso ao incluir filhos
 *
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 201 Created
 * 
 *   { 
 *      status: true, 
 *      message: ' Filhos atualizados com sucesso' 
 * }
 * 
 *
 */
router.put("/:id", controller.updateMae)


module.exports = router