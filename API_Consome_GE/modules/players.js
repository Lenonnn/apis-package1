const { getPlayersLibertadores } = require('./api')


module.exports = (() => {

    const getPlayers = (libertadores = 'L') => {
        return new Promise((resolve, reject) => {
            
            getPlayersLibertadores(libertadores.toLowerCase())
            .then( data => resolve(data) )
            .catch( err => reject(err.message) )
        })
    }

    return {
        getPlayers: (libertadores) => getPlayers(libertadores)
    }

})()