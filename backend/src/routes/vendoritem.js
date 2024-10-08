const express = require('express')
const router = express.Router()
const { getVendorItemsByAccId,getVendorItemById, updateVendorItem, deleteVendorItem, createVendorItem } = require('../app/controllers/VendorItemController')
const managerAuthMiddleWare = require('../app/middlewares/managerAuthMiddleWare')

// router.get('/:id', getVendorItemById)
router.get('/:accId',managerAuthMiddleWare, getVendorItemsByAccId)
router.put('/:id',managerAuthMiddleWare, updateVendorItem)
router.delete('/:id',managerAuthMiddleWare, deleteVendorItem)
router.post('/', createVendorItem)

module.exports = router