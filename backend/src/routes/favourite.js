const express = require('express')
const router = express.Router()
const { getFavouritesByAccId,getFavouriteById, updateFavourite, deleteFavourite, createFavourite } = require('../app/controllers/FavouriteController')
const managerAuthMiddleware = require('../app/middlewares/managerAuthMiddleware')
const authMiddleware = require('../app/middlewares/authMiddleware')

// router.get('/:id', getFavouriteById)
router.get('/:accId',getFavouritesByAccId)
router.post('/', createFavourite)
router.put('/:id', updateFavourite)
router.delete('/:id', deleteFavourite)

module.exports = router