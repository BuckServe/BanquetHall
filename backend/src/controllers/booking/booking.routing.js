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
                check('customerName')
                    .not()
                    .isEmpty()
                    .withMessage(
                        translate('validations', 'required', {
                            ':attribute': 'Customer Name',
                        })
                    ),
                check('customerPhoneNumber')
                    .not()
                    .isEmpty()
                    .withMessage(
                        translate('validations', 'required', {
                            ':attribute': 'Customer Phone Number',
                        })
                    ),
                check('customerCNIC')
                    .not()
                    .isEmpty()
                    .withMessage(
                        translate('validations', 'required', {
                            ':attribute': 'Customer CNIC',
                        })
                    ),
                check('advanceAmount')
                    .not()
                    .isEmpty()
                    .withMessage(
                        translate('validations', 'required', {
                            ':attribute': 'Advance Amount',
                        })
                    ),
                check('totalAmount')
                    .not()
                    .isEmpty()
                    .withMessage(
                        translate('validations', 'required', {
                            ':attribute': 'Total Amount',
                        })
                    ),
                check('eventDate')
                    .not()
                    .isEmpty()
                    .withMessage(
                        translate('validations', 'required', {
                            ':attribute': 'Event Date',
                        })
                    ),
                check('eventTime')
                    .not()
                    .isEmpty()
                    .withMessage(
                        translate('validations', 'required', {
                            ':attribute': 'Event Time',
                        })
                    ),
                check('hallId')
                    .not()
                    .isEmpty()
                    .withMessage(
                        translate('validations', 'required', {
                            ':attribute': 'Hall',
                        })
                    ),
                validationResponse,
            ],
            action: asyncHandler(create),
        },
        get: {
            middlewares: [
                check('startDate')
                    .not()
                    .isEmpty()
                    .withMessage(
                        translate('validations', 'required', {
                            ':attribute': 'StartDate',
                        })
                    ),
                check('endDate')
                    .not()
                    .isEmpty()
                    .withMessage(
                        translate('validations', 'required', {
                            ':attribute': 'EndDate',
                        })
                    ),
                check('hallId')
                    .not()
                    .isEmpty()
                    .withMessage(
                        translate('validations', 'required', {
                            ':attribute': 'Hall',
                        })
                    ),
                validationResponse,
            ],
            action: asyncHandler(get),
        },
    },
}
