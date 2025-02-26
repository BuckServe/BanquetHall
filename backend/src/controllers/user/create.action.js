import User from '../../models/user.js'
import translate from '../../helpers/translate'

export const create = async (request, response) => {
    const { name, email, password } = request.body

    await User.create({
        name,
        email,
        password,
    })
    /* send success response*/
    response.json({
        message: translate('messages', 'success', {
            ':attribute': `User has`,
            ':action': 'created',
        }),
    })
}
