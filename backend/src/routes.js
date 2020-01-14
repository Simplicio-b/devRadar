const { Router } = require('express')
const axios  = require('axios')
const Dev = require('../models/Dev')

const routes = Router()

routes.post ('/devs', async (req, res) => {
    const { github_username, techs } = req.body
    const dadosGit = await axios.get(`https://api.github.com/users/${github_username}`)
    const { name = login, avatar_url, bio } = dadosGit.data
    const techsArray = techs.split(',').map(ele => ele.trim())

    const dev = await Dev.create({
        name,
        github_username,
        bio,
        avatar_url,
        techs: techsArray
    })

    return res.json(dev) 
})

module.exports = routes