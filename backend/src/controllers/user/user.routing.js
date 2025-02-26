import { check } from 'express-validator'
import { create } from './create.action'
import { getOwnProfile } from './me.action'
import { view } from './view.action'
import { update } from './update.action'

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
    '/me': {
        get: {
            middlewares: [authenticate],
            action: asyncHandler(getOwnProfile),
        },
        put: {
            middlewares: [authenticate],
            action: asyncHandler(update),
        },
    },
    '/:id': {
        get: {
            middlewares: [authenticate],
            action: asyncHandler(view),
        },
        put: {
            middlewares: [authenticate],
            action: asyncHandler(update),
        },
    },
}
