import { chain } from 'lodash'

import { validationResult } from 'express-validator'

export default (request, response, next) => {
    const errors = validationResult(request)
    if (!errors.isEmpty()) {
        return response.status(422).json({
            message: 'Please fix the following errors.',
            errors: chain(
                errors.array({
                    onlyFirstError: true,
                })
            )
                .keyBy('path')
                .mapValues('msg')
                .value(),
        })
    }
    return next()
}
