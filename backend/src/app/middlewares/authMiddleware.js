const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
    const authHeader = req.header('Authorization')

    if (!authHeader) return res.status(401).json({ message: 'No token, authorization denied' })
    const token = authHeader.split(' ')[1]
    if (!token) return res.status(401).json({ message: 'Token invalid, authorization denied' })

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded


        // Kiểm tra role của người dùng
        if (req.user.userRole !== 'manager') {
            return res.status(403).json({ message: 'Access denied. Not authorized as manager.' })
        }

        next()
    } catch (error) {
        res.status(401).json({ message: 'No token, authorization denied' })
    }
}

module.exports = authMiddleware