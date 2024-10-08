const Plan = require('../models/Plan')

const getPlanByAccId=async (req,res)=>{
    const accId= req.params.accId
try {
    let plan = await Plan.findOne({ accId })
    return res.status(200).json({plan})
} catch (error) {
    console.log(error)
        return res.status(400).json({ message: 'Server error' })
}
}

// Lấy thông tin Plan theo id
const getPlanById = async (req, res) => {
    const { id } = req.params;
    try {
        const plan = await Plan.findById(id);
        if (!plan) {
            return res.status(404).json({ message: 'Plan not found' });
        }
        res.json({ plan });
    } catch (error) {
        console.error('Error fetching vendor item by id:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};

// Tạo mới Plan
const createPlan = async (req, res) => {
    const { accId,budget,paid,date,partner,vendors } = req.body;
    try {
        const existingPlan = await Plan.findOne({  accId });
        if (existingPlan) {
            return res.status(400).json({ message: 'Plan already exists!' });
        }

        const newPlan = new Plan({accId,budget,paid,date,partner,vendors});

        await newPlan.save();
        res.status(201).json({ plan: newPlan });
    } catch (error) {
        console.error('Error creating vendor item:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};

// Cập nhật thông tin Plan theo id
const updatePlan = async (req, res) => {
    const { id } = req.params;
    const {accId,budget,paid,date,partner,vendors} = req.body;
    try {
        const updatedPlan = await Plan.findByIdAndUpdate(
            id,
            {accId,budget,paid,date,partner,vendors},
            { new: true }
        );

        if (!updatedPlan) {
            return res.status(404).json({ message: 'Plan not found' });
        }

        res.json({ updatedPlan });
    } catch (error) {
        console.error('Error updating vendor item:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};

// Xóa Plan theo id
const deletePlan = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedPlan = await Plan.findByIdAndDelete(id);

        if (!deletedPlan) {
            return res.status(404).json({ message: 'Plan not found' });
        }

        res.json({ message: 'Plan successfully deleted', deletedPlan });
    } catch (error) {
        console.error('Error deleting vendor item:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    getPlanByAccId,
    getPlanById,
    createPlan,
    updatePlan,
    deletePlan
};
