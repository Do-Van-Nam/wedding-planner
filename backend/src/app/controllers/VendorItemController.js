const VendorItem = require('../models/VendorItem');

// Lấy danh sách VendorItems theo accId
const getVendorItemsByAccId = async (req, res) => {
    const { accId } = req.params;
    try {
        const vendoritems = await VendorItem.find({ accId });
        if (!vendoritems.length) {
            return res.status(404).json({ message: 'No VendorItems found for this account' });
        }
        res.json({ vendoritems });
    } catch (error) {
        console.error('Error fetching vendor items by accId:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};

// Lấy thông tin VendorItem theo id
const getVendorItemById = async (req, res) => {
    const { id } = req.params;
    try {
        const vendoritem = await VendorItem.findById(id);
        if (!vendoritem) {
            return res.status(404).json({ message: 'VendorItem not found' });
        }
        res.json({ vendoritem });
    } catch (error) {
        console.error('Error fetching vendor item by id:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};

// Tạo mới VendorItem
const createVendorItem = async (req, res) => {
    const {accId, name, type,description,subInfo,priceFrom,priceTo} = req.body;
    try {
        const existingVendorItem = await VendorItem.findOne({ name, accId });
        if (existingVendorItem) {
            return res.status(400).json({ message: 'VendorItem already exists!' });
        }

        const newVendorItem = new VendorItem({accId, name, type,description,subInfo,priceFrom,priceTo});

        await newVendorItem.save();
        res.status(201).json({ vendoritem: newVendorItem });
    } catch (error) {
        console.error('Error creating vendor item:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};

// Cập nhật thông tin VendorItem theo id
const updateVendorItem = async (req, res) => {
    const { id } = req.params;
    const { accId, name, type,description,subInfo,priceFrom,priceTo} = req.body;
    try {
        const updatedVendorItem = await VendorItem.findByIdAndUpdate(
            id,
            { accId, name, type,description,subInfo,priceFrom,priceTo},
            { new: true }
        );

        if (!updatedVendorItem) {
            return res.status(404).json({ message: 'VendorItem not found' });
        }

        res.json({ updatedVendorItem });
    } catch (error) {
        console.error('Error updating vendor item:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};

// Xóa VendorItem theo id
const deleteVendorItem = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedVendorItem = await VendorItem.findByIdAndDelete(id);

        if (!deletedVendorItem) {
            return res.status(404).json({ message: 'VendorItem not found' });
        }

        res.json({ message: 'VendorItem successfully deleted', deletedVendorItem });
    } catch (error) {
        console.error('Error deleting vendor item:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    getVendorItemsByAccId,
    getVendorItemById,
    createVendorItem,
    updateVendorItem,
    deleteVendorItem
};
