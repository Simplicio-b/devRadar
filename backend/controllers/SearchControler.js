const axios  = require('axios')
const Dev = require('../models/Dev')
const  parseStringAsArray  = require('../utils/parseStringAsArray')


const index = async (req, res) => {
    const { longitude, latitude, techs } =  req.query
    const techsArray = parseStringAsArray(techs)

    const dev = await Dev.find({
        techs: {
            $in: techsArray
        },

        location: {
            $near: {
                $geometry: {
                    type: 'Point',
                    coordinates: [longitude, latitude]
                },
                $maxDistance: 10000
            }
        }
    })

    return res.json({dev});
}

module.exports = {
    index
}