const router = require('express').Router()
const toughtsController = require('../controllers/toughtsController')

// Helper
const checkAuth = require('../helpers/auth').checkAuth

router.get('/add', checkAuth, toughtsController.createToughts)
router.post('/add', checkAuth, toughtsController.createToughtsSave)
router.get('/update/:id', checkAuth, toughtsController.updateToughts)
router.post('/update/', checkAuth, toughtsController.updateToughtsSave)
router.get('/dashboard', checkAuth, toughtsController.dashboard)
router.post('/remove', checkAuth, toughtsController.remove)
router.get('/', toughtsController.showToughts)

module.exports = router