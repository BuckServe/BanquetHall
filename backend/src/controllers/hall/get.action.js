import Hall from '../../models/hall.js'

export const get = async (request, response) => {
    const halls = await Hall.find()

    /* send success response*/
    response.json({
        halls,
    })
}
