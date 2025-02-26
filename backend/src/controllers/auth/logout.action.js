export const logout = async (request, response) => {
    response.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    })

    // Disable caching
    response.setHeader(
        'Cache-Control',
        'no-store, no-cache, must-revalidate, proxy-revalidate'
    )
    response.setHeader('Pragma', 'no-cache')
    response.setHeader('Expires', '0')

    response.status(200).json({
        message: 'Logged Out',
    })
}
