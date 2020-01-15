const { Router } = require('express')
const DevControler = require('../controllers/DevControler')
const SeachControler = require('../controllers/SearchControler')

const routes = Router()

routes.get  ('/devs', DevControler.index )
routes.post ('/devs', DevControler.store )

routes.get  ('/search', SeachControler.index )

module.exports = routes