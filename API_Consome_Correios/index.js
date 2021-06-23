const soap = require('soap')

const URL = `https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl`

soap.createClient(URL, (err, client) => {

    // 1º implementação funcionando
    // if (err) {
    //     console.error('Erro', err)
    // } else {
    //     // Client
    //     console.log('SUCESSO')
    //     client.consultaCEP({
    //         cep: '92020478'
    //     }, (err, res) => {
    //         console.log(res)
    //     }) 
    // }

    // 2º Implementação funcionando
    try{
       
        client.consultaCEP({
        cep: '90130000'
    }, (error, response) => {
        console.log('Sucesso')
        console.log(response)
    })
    }
    catch(error){
        console.error('Web Service com erro', error)
    }

})