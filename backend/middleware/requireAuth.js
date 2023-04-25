const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const requireAuth = async (req, res, next) => {

    // Get token from headers
    const { authorization } = req.headers;

    // Check if token exists
    if (!authorization) {
        return res.status(401).json({ err: 'You must be logged in' });
    }

    // Verify token
    const token = authorization.split(' ')[1];

    try {
        const {_id} = jwt.verify(token, process.env.SECRET);

        req.user = await User.findOne({_id}).select('_id')
        next();

    } catch (err) {
        console.log(err);
        res.status(401).json({ err: 'Request is not authorized' });
    }
}

module.exports = requireAuth 