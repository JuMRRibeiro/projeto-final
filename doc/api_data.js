define({ "api": [
  {
    "type": "get",
    "url": "/Mae",
    "title": "Carregadeira",
    "group": "Maes__",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "maes",
            "description": "<p>Lista de Maes</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "   HTTP/1.1 200 OK\n  [{\n      \"nome\": \"Juliana Thamires dos Santos Martins Rangel Ribeiro\"\n     \"email\": \"julianathmartins@gmail.com\",\n      \"endereço\": \"Rua Jose Maria Lisboa\",\n     \"dataNascimento\": \"1987-07-02T03:00:00.000Z\",\n      \"estadoCivil\": \"Casada\",\n      \"telefone\": 989812920,\n\"habitos\": \"vegetariana\",\n\"dispivel\":true,\n      \"filhos\": [{ \"nome\": \"Gael\" ,\n                 \"idade\": \"2 anos e 4 meses\",\n                 }]\n\n  }]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/maesRoute.js",
    "groupTitle": "Maes__",
    "name": "GetMae"
  }
] });
