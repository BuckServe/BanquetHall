import Booking from '../../models/booking.js'
import mongoose from 'mongoose'

export const get = async (request, response) => {
    const startDate = new Date(request.query.startDate)
    const endDate = new Date(request.query.endDate)

    startDate.setUTCHours(0, 0, 0, 0)
    endDate.setUTCHours(23, 59, 59, 999)

    const bookings = await Booking.aggregate([
        {
            $match: {
                eventDate: {
                    $gte: new Date(startDate),
                    $lte: new Date(endDate),
                },
                hallId: new mongoose.Types.ObjectId(request.query.hallId),
            },
        },
        {
            $group: {
                // _id: {
                //     date: { $dateToString: { format: "%Y-%m-%d", date: "$eventDate" } },
                // },
                _id: '$eventDate',
                eventTime: { $push: '$eventType' }, // count the number of orders
            },
        },
    ])
    /* send success response*/
    response.json({
        bookings,
    })
}
