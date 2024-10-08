const Favourite = require('../models/Favourite');

// Lấy danh sách Favourites theo accId
const getFavouritesByAccId = async (req, res) => {
    const { accId } = req.params;
    try {
        const favourites = await Favourite.find({ accId });
        if (!favourites.length) {
            return res.status(404).json({ message: 'No Favourites found for this account' });
        }
        res.json({ favourites });
    } catch (error) {
        console.error('Error fetching vendor items by accId:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};

// Lấy thông tin Favourite theo id
const getFavouriteById = async (req, res) => {
    const { id } = req.params;
    try {
        const favourite = await Favourite.findById(id);
        if (!favourite) {
            return res.status(404).json({ message: 'Favourite not found' });
        }
        res.json({ favourite });
    } catch (error) {
        console.error('Error fetching vendor item by id:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};

// Tạo mới Favourite
const createFavourite = async (req, res) => {
    const { accId, vendors } = req.body;
    try {
        const existingFavourite = await Favourite.findOne({ accId });
        if (existingFavourite) {
            return res.status(400).json({ message: 'Favourite already exists!' });
        }

        const newFavourite = new Favourite({ accId, vendors });

        await newFavourite.save();
        res.status(201).json({ favourite: newFavourite });
    } catch (error) {
        console.error('Error creating vendor item:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};

// Cập nhật thông tin Favourite theo id
const updateFavourite = async (req, res) => {
    const { id } = req.params;
    const { accId, vendors } = req.body;
    try {
        const updatedFavourite = await Favourite.findByIdAndUpdate(
            id,
            { accId, vendors },
            { new: true }
        );

        if (!updatedFavourite) {
            return res.status(404).json({ message: 'Favourite not found' });
        }

        res.json({ updatedFavourite });
    } catch (error) {
        console.error('Error updating vendor item:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};

// Xóa Favourite theo id
const deleteFavourite = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedFavourite = await Favourite.findByIdAndDelete(id);

        if (!deletedFavourite) {
            return res.status(404).json({ message: 'Favourite not found' });
        }

        res.json({ message: 'Favourite successfully deleted', deletedFavourite });
    } catch (error) {
        console.error('Error deleting vendor item:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    getFavouritesByAccId,
    getFavouriteById,
    createFavourite,
    updateFavourite,
    deleteFavourite
};
