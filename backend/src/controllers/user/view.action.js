import { omit } from 'lodash'
import User from '../../models/user.js'
import translate from '../../helpers/translate.js'
import AppValidationError from '../../exceptions/AppValidationError.js'

export const view = async (request, response) => {
    const {
        params: { id },
    } = request

    let user = await User.findById(id)

    /* return error if user is not found */
    if (!user) {
        throw new AppValidationError(
            translate('validations', 'notFound', {
                ':attribute': 'User',
            })
        )
    }

    const removeFields = ['password', 'resetPasswordToken']

    /* remove specific fields */
    user = omit(user, removeFields)

    /* send response */
    return response.json({
        user,
    })
}
