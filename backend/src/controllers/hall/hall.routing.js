import { check } from 'express-validator'
import { create } from './create.action'
import { get } from './get.action'

import authenticate from '../../middlewares/authenticate'
import asyncHandler from '../../middlewares/async-handler'

import validationResponse from '../../middlewares/validation-response'
import translate from '../../helpers/translate'

module.exports = {
    '/': {
        post: {
            middlewares: [
                authenticate,
                check('name')
                    .not()
                    .isEmpty()
                    .withMessage(
                        translate('validations', 'required', {
                            ':attribute': 'Hall Name',
                        })
                    ),
                check('capacity')
                    .not()
                    .isEmpty()
                    .withMessage(
                        translate('validations', 'required', {
                            ':attribute': 'Hall capacity',
                        })
                    ),
                validationResponse,
            ],
            action: asyncHandler(create),
        },
        get: {
            middlewares: [],
            action: asyncHandler(get),
        },
    },
}
