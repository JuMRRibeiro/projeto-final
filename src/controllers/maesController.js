const Maes = require('../model/maes')//faz a consulta no banco de dados ao inves do json
const Joi = require('joi')

const fs = require('fs');

exports.post = (req, res) => {//exporta a rota para a route consumir
  let mae = new Maes(req.body);// pega as informacoes do body de acordo com o schema

  mae.save(function (err) {//funcao de salvar se estiver tudo ok conforme o schema
    if (err) res.status(500).send(err);//volta erro se nao estiver igual ao schema
    res.status(201).send({ status: true, message: ' Mãe incluido com sucesso' });
  })
}

//modulo Get
exports.get = (req, res) => {
  //faz a conexao com o banco, retorna todos os objetos do banco
  Maes.find(function (err, maes) {//retornar erro ou sucesso
    if (err) {
      res.status(500).send(err);
    }
  res.status(200).send(maes)//de acordo com o escopo da funcao;
  })
}

exports.getDisponibilidade = (req, res) => {
  Maes.find({ "disponivel": "true" }, (function (err, maes) {
    if (err) res.status(500).send(err)//boas praticas
    const maesDisponiveis = maes.map(mae => mae.nome)
    res.status(200).send(maesDisponiveis)

  })
  )
};

exports.deletarMae = (req, res) => {

  const id = req.params.id;

  Maes.find({ id }, function (err, mae) {

    if (err) return res.status(500).send(err);

    if (!mae) {
      return res.status(200).send({ message: "Infelizmente não localizei essa Mãe!" });
    }

    Maes.deleteOne(function (err) {
      if (!err) {
        return res.status(200).send({ message: "Mãe removida com sucesso!" })
      }

    })
  })
}

exports.updateMae = (req, res) => {
  Maes.update(
    { endereco: req.params.endereco },
    { $set: req.body },
    { upsert: true },
    function (err) {
      if (err) return res.status(500).send(err);
      res.status(200).send({ message: "Mãe atualizada com sucesso!" });
    })
}

exports.updateHabitos = (req, res) => {
  Maes.updateOne(
    { habitos: req.params.habitos },
    { $set: req.body },
    { upsert: true },
    function (err) {
      if (err) return res.status(500).send(err);
      res.status(200).send({ message: "Habito alterado com sucesso!" });
    })
}

exports.postHabitos = (req, res) => {//exporta a rota para a route consumir
  let habitos = new Habitos(req.body);// pega as informacoes do body de acordo com o schema

  habito.save(function (err) {//funcao de salvar se estiver tudo ok conforme o schema
    if (err) res.status(500).send(err);//volta erro se nao estiver igual ao schema
    res.status(201).send({ status: true, message: ' Habito incluido com sucesso' });
  })
}

/*exports.getMaes = async (req, res) => {
  try {
    const habitos = await Maes.find({}, 'maes habitos -"_id"');
    res.status(200).send(habitos);
  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar os habitos!'});
  
}}*/

exports.getHabito = (req, res) => {
  Maes.find({"habitos": true}, (function (err, habitos) {
    if (err) res.status(500).send(err)//boas praticas
    const habitoCompativel = habitos.map(habito => habito.nome)
    
    if (!habitoCompativel) {
      return res.status(200).send({ message: "Infelizmente não localizei esse Habito!" });
    }
    return res.status(200).send(habitoCompativel)
  })
  )
};