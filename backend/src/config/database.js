import mongoose from 'mongoose'

export const connectDatabase = () => {
    let DB_URI = ''

    if (process.env.NODE_ENV === 'DEVELOPMENT')
        DB_URI = process.env.DB_LOCAL_URI
    if (process.env.NODE_ENV === 'PRODUCTION') DB_URI = process.env.DB_URI

    // eslint-disable-next-line no-console
    console.log(DB_URI)
    // eslint-disable-next-line promise/catch-or-return
    mongoose.connect(DB_URI).then((con) => {
        // eslint-disable-next-line no-console
        console.log(
            // eslint-disable-next-line promise/always-return
            `MongoDB Database connected with HOST: ${con?.connection?.host}`
        )
    })
}
