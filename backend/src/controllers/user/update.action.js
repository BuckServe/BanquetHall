import User from '../../models/user.js'
import translate from '../../helpers/translate.js'

export const update = async (request, response) => {
    const id = request.params?.id || request.user?._id

    const user = await User.findByIdAndUpdate(id, request.body, {
        new: true,
    })

    /* send success response*/
    response.json({
        user,
        message: translate('messages', 'success', {
            ':attribute': 'User has',
            ':action': 'updated',
        }),
    })
}
