import translate from '../helpers/translate'
export default (error, request, response, next) => {
    switch (error.name) {
        case 'AppValidationError':
            response.status(error.code).json({
                message: error.message,
            })
            break
        case 'ValidationError': {
            response.status(404).json({
                message: error?.message.split(': ')[2],
            })
            break
        }
        default:
            response.status(500).json({
                message: translate('errors', 'default'),
            })
    }
    next()
}
