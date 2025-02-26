import { omit } from 'lodash'
import User from '../../models/user.js'
import translate from '../../helpers/translate.js'
import AppValidationError from '../../exceptions/AppValidationError.js'

export const getOwnProfile = async (request, response) => {
    // eslint-disable-next-line no-console
    console.log('herereee')
    const {
        user: { id },
    } = request

    // eslint-disable-next-line no-console
    console.log(id, 'id')
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
