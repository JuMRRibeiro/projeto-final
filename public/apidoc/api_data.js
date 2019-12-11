define({ "api": [
  {
    "type": "get",
    "url": "/Mãe",
    "title": "Carregadeira",
    "group": "M_es__",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "maes",
            "description": "<p>Lista de Mães</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "   HTTP/1.1 200 OK\n  [{\n      \"nome\":\n     \"email\": \"Cindy@gmail.com\",\n      \"endereço\": \"Cindy \",\n      \"dataNascimento\": \"1992-04-03T03:00:00.000Z\",\n      \"estadoCivil\": \"Solteira\",\n      \"telefone\": 444456789,\n      \"filhos\": true\n\"vicios\": true\n\n  }]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/maesRoute.js",
    "groupTitle": "M_es__",
    "name": "GetME"
  }
] });
