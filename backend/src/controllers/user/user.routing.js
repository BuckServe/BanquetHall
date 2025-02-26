import { check } from 'express-validator'
import { create } from './create.action'

import authenticate from '../../middlewares/authenticate'
import asyncHandler from '../../middlewares/async-handler'

import validationResponse from '../../middlewares/validation-response'
import translate from '../../helpers/translate'

module.exports = {
    '/': {
        post: {
            middlewares: [
                check('name')
                    .not()
                    .isEmpty()
                    .withMessage(
                        translate('validations', 'required', {
                            ':attribute': 'Name',
                        })
                    ),
                check('email')
                    .not()
                    .isEmpty()
                    .withMessage(
                        translate('validations', 'required', {
                            ':attribute': 'Email',
                        })
                    ),
                check('password')
                    .not()
                    .isEmpty()
                    .withMessage(
                        translate('validations', 'required', {
                            ':attribute': 'Customer CNIC',
                        })
                    ),
                validationResponse,
                authenticate,
            ],
            action: asyncHandler(create),
        },
    },
}
