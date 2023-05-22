import jwt from 'jsonwebtoken'
import asynchHandler from 'express-async-handler'
import User from '../models/userModel.js'

const protect = asynchHandler( async (req, res, next) => {
    let token;

    token = req.cookies.jwt
    if(token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(decoded.userID).select('-password')
            next()
        } catch (error) {
            res.status(401)
            throw new Error('Not authorised, Invalid token')
        }
    } else {
        res.status(401)
        throw new Error('Not authorised, no token')
    }
} )

export { protect }