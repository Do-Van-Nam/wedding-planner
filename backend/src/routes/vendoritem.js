const express = require('express')
const router = express.Router()
const {createManyVendorItems,getVendorItemByType, getVendorItemsByAccId,getVendorItemById, updateVendorItem, deleteVendorItem, createVendorItem } = require('../app/controllers/VendorItemController')
const managerAuthMiddleWare = require('../app/middlewares/managerAuthMiddleWare')

router.get('/id/:id', getVendorItemById)
router.get('/type/:type', getVendorItemByType)
router.get('/accId/:accId',managerAuthMiddleWare, getVendorItemsByAccId)
router.put('/:id',managerAuthMiddleWare, updateVendorItem)
router.delete('/:id',managerAuthMiddleWare, deleteVendorItem)
router.post('/', createVendorItem)
 router.post('/addManyVendorItems', createManyVendorItems)

module.exports = router