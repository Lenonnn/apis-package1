const request = require('request')
const cheerio = require('cheerio')

module.exports = (() => {
    
    const getPlayersLibertadores = (libertadores) => {
        return new Promise((resolve, reject) => {
            request(`https://globoesporte.globo.com/futebol/libertadores/`, (err, res, body) => {
                if ( err ) return reject(err)
                
                const $ = cheerio.load(body)
                const data = []
                
                $(".ranking-item-wrapper").each(function() {
                    const player = $(this).find(".jogador .jogador-nome").text().trim()
                    const scores = $(this).find(".jogador .jogador-gols").text().trim()
                    const position = $(this).find(".jogador .jogador-posicao").text().trim()
                    data.push({ player, scores, position })
                })
        
                resolve(data)
            })
        })
    }

    return {
        getPlayersLibertadores: (libertadores) => getPlayersLibertadores(libertadores)
    }
})()