import Hall from '../../models/hall.js'
import translate from '../../helpers/translate.js'

export const create = async (request, response) => {
    await Hall.create(request.body)
    /* send success response*/
    response.json({
        message: translate('messages', 'success', {
            ':attribute': `Hall has`,
            ':action': 'created',
        }),
    })
}
