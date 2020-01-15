const axios  = require('axios')
const Dev = require('../models/Dev')
const  parseStringAsArray  = require('../utils/parseStringAsArray')

const store = async (req, res) => {
    try {
        const { github_username, techs, latitude, longitude } = req.body

        let dev = await Dev.findOne({ github_username })

        if(!dev) {
            const dadosGit = await axios.get(`https://api.github.com/users/${github_username}`)
            const { name = login, avatar_url, bio } = dadosGit.data

            const techsArray = parseStringAsArray(techs)
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
        
            dev = await Dev.create({
                name,
                github_username,
                bio,
                avatar_url,
                techs: techsArray,
                location
            })
        }
    
        return res.json(dev) 

    } catch(err) {
        console.log(err)
    }
}

const index = async (req, res) => {
    const dev = await Dev.find()
    return res.json(dev)
}

module.exports = { 
    store, 
    index
}