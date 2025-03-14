import Booking from '../../models/booking.js'
import translate from '../../helpers/translate'
import mongoose from 'mongoose'

export const create = async (request, response) => {
    const booking = await Booking.findOne({
        eventDate: request.body.eventDate,
        hallId: new mongoose.Types.ObjectId(request.body.hallId),
        eventTime: request.body.eventTime,
    })

    if (booking) {
        return response.status(409).json({
            message: translate('errors', 'alreadyExists', {
                ':attribute': 'Booking',
            }),
        })
    }

    request.body.bookedBy = request?.user?._id

    await Booking.create(request.body)

    /* send success response*/
    response.json({
        message: translate('messages', 'success', {
            ':attribute': `Booking has`,
            ':action': 'created',
        }),
    })
}
