import User from '../../models/user.js'
import translate from '../../helpers/translate.js'

export const login = async (request, response) => {
    const { email, password } = request.body

    // Find user in the database
    const user = await User.findOne({ email }).select('password')

    if (user) {
        const isPasswordMatched = await user.comparePassword(password)

        if (!isPasswordMatched) {
            return response.status(401).json({
                message: translate('errors', 'credentials.invalid'),
            })
        }
        // Create JWT Token
        const token = user.getJwtToken()

        // Options for cookie
        const options = {
            expires: new Date(
                Date.now() +
                    process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000
            ),
            httpOnly: true,
        }

        return response.status(200).cookie('token', token, options).json({
            token,
        })
    } else {
        // send response if the it is still not sent
        return response.status(404).json({
            message: translate('errors', 'credentials.invalid'),
        })
    }
}
