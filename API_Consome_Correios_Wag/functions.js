var soap = require('soap');
exports.buscaCep = function (cep, retorno) {

    var ret = '';

    var url = 'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl';

    soap.createClient(url, cep, function (err, client) {


        client.consultaCEP({ cep }, function (err, result) {

            if (err) return console.log(err);

            ret = result.return; 
        });

    });
    while (ret === '') {
        require('deasync').runLoopOnce();
    };
   
    return ret;

};