import { check } from 'express-validator'
import { login } from './login.action'
import { logout } from './logout.action'

import authenticate from '../../middlewares/authenticate'
import asyncHandler from '../../middlewares/async-handler'

import validationResponse from '../../middlewares/validation-response'
import translate from '../../helpers/translate'

module.exports = {
    '/login': {
        post: {
            middlewares: [
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
                            ':attribute': 'Password',
                        })
                    ),
                validationResponse,
            ],
            action: login,
        },
    },
    '/logout': {
        post: {
            middlewares: [authenticate],
            action: asyncHandler(logout),
        },
    },
}
