export default (callback) => {
    // eslint-disable-next-line func-names
    return function (request, response, next) {
        // eslint-disable-next-line promise/no-callback-in-promise
        return callback(request, response, next).catch(next)
    }
}
