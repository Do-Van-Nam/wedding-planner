const Guest = require('../models/Guest')

const getGuestByAccId=async (req,res)=>{
    const accId= req.params.accId
try {
    let guest = await Guest.findOne({ accId })
    return res.status(200).json({guest})
} catch (error) {
    console.log(error)
        return res.status(400).json({ guest: 'Server error' })
}
}

// Lấy thông tin Guest theo id
const getGuestById = async (req, res) => {
    const { id } = req.params;
    try {
        const guest = await Guest.findById(id);
        if (!guest) {
            return res.status(404).json({ guest: 'Guest not found' });
        }
        res.json({ guest });
    } catch (error) {
        console.error('Error fetching vendor item by id:', error);
        return res.status(500).json({ guest: 'Server error' });
    }
};

// Tạo mới Guest
const createGuest = async (req, res) => {
    const { planId,    guestList  } = req.body;
    try {
        const existingGuest = await Guest.findOne({  planId });
        if (existingGuest) {
            return res.status(400).json({ guest: 'Guest already exists!' });
        }

        const newGuest = new Guest({planId,    guestList });

        await newGuest.save();
        res.status(201).json({ guest: newGuest });
    } catch (error) {
        console.error('Error creating vendor item:', error);
        return res.status(500).json({ guest: 'Server error' });
    }
};

// Cập nhật thông tin Guest theo id
const updateGuest = async (req, res) => {
    const { id } = req.params;
    const {planId,    guestList } = req.body;
    try {
        const updatedGuest = await Guest.findByIdAndUpdate(
            id,
            {planId,    guestList },
            { new: true }
        );

        if (!updatedGuest) {
            return res.status(404).json({ guest: 'Guest not found' });
        }

        res.json({ updatedGuest });
    } catch (error) {
        console.error('Error updating vendor item:', error);
        return res.status(500).json({ guest: 'Server error' });
    }
};

// Xóa Guest theo id
const deleteGuest = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedGuest = await Guest.findByIdAndDelete(id);

        if (!deletedGuest) {
            return res.status(404).json({ guest: 'Guest not found' });
        }

        res.json({ guest: 'Guest successfully deleted', deletedGuest });
    } catch (error) {
        console.error('Error deleting vendor item:', error);
        return res.status(500).json({ guest: 'Server error' });
    }
};

module.exports = {
    getGuestByAccId,
    getGuestById,
    createGuest,
    updateGuest,
    deleteGuest
};
