import errorHandler from './exception-handler.js'
import asyncHandler from './async-handler.js'
import userModel from '../models/user.js'
import jwt from 'jsonwebtoken'

// Checks if user is authenticated or not
export default asyncHandler(async (req, res, next) => {
    const { token } = req.cookies

    if (!token) {
        return next(
            errorHandler(
                { message: 'Login first to access this resource', code: 401 },
                req,
                res,
                next
            )
        )
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = await userModel.findById(decoded.id)

    next()
})
