const Maes = require('../model/maes')

exports.post = (req, res) => {
  let mae = new Maes(req.body);

  mae.save(function (err) {
    if (err) res.status(500).send(err);
    res.status(201).send({ status: true, message: ' Mãe incluido com sucesso' });
  })
}


exports.get = (req, res) => {
  
  Maes.find(function (err, maes) {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).send(maes)
  })
}

exports.getDisponibilidade = (req, res) => {
  Maes.find({ "disponivel": "true" }, (function (err, maes) {
    if (err) res.status(500).send(err)
    const maesDisponiveis = maes.map(mae => mae.nome)
    res.status(200).send(maesDisponiveis)

  })
  )
};


exports.getMaes = (req, res) => {

  const id = req.params.id;

  Maes.findById(id, function (err, mae) {

    if (err) return res.status(500).send(err);

    if (!mae) {
      return res.status(200).send({ message: "Infelizmente não localizei essa Mãe!" });
    }

    res.status(200).send(mae)
  })

};

exports.deletarMae = (req, res) => {

  const id = req.params.id;

  Maes.findById(id, function (err, mae) {

    if (err) return res.status(500).send(err);

    if (!mae) {
      return res.status(200).send({ message: "Infelizmente não localizei essa Mãe!" });
    }

    Maes.deleteOne({"_id": id}, function (err) {
      if (!err) {
        return res.status(200).send({ message: "Mãe removida com sucesso!" })
      }

    })
  })
}

exports.updateMae = (req, res) => {

  const id = req.params.id;
  console.log('id',id)
  console.log("passei aqui")
  const maes = Maes.findById(id).exec(function (err, mae) {
    console.log('filhos antes',mae)
    const filhos = {...mae.filhos, ...req.body}
    console.log('filhos',filhos)
    Maes.findByIdAndUpdate(id,
      { $push: { 'filhos' : req.body.filhos } },
      function (err) {
        console.log("passei novamente")
        if (err) return res.status(500).send(err);
        res.status(200).send({ message: "Filhos atualizados com sucesso!" });
      })
  });
  
}




