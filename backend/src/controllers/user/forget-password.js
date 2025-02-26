// import User from '../../models/user.js'
// import translate from '../../helpers/translate.js'
// import AppValidationError from '../../exceptions/AppValidationError.js'

// export const forgotPassword = async (request, response) => {
//     const user = await User.findOne({ email: request.body.email })
//     /* return error if user is not found */
//     if (!user) {
//         throw new AppValidationError(
//             translate('validations', 'notFound', {
//                 ':attribute': 'User',
//             })
//         )
//     }

//     // Get reset password token
//     const resetToken = user.getResetPasswordToken()

//     await user.save()

//     // Create reset password url
//     const resetUrl = `${process.env.FRONTEND_URL}/password/reset/${resetToken}`

//     const message = getResetPasswordTemplate(user?.name, resetUrl)

//     try {
//         await sendEmail({
//             email: user.email,
//             subject: 'Sschool Password Recovery',
//             message,
//         })
//         res.status(200).json({
//             message: `Email sent to: ${user.email}`,
//         })
//     } catch (error) {
//         user.resetPasswordToken = undefined
//         user.resetPasswordExpire = undefined
//         await user.save()
//         return next(new ErrorHandler(error?.message, 500))
//     }
// }
