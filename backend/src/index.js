import path from 'path'
import lumie from 'lumie'
import dotenv from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import exceptionHandler from './middlewares/exception-handler'
import { connectDatabase } from './config/database'
;(async function () {
    /**
     * load environment variables from .env
     */
    dotenv.config()
    /**
     * initiate the express server instance
     */
    const app = express()

    connectDatabase()

    /**
     * enable cors for express app
     */
    const cors = require('cors')({
        origin: '*', // Frontend URL
        credentials: true,
    })

    app.use(cors)
    /**
     * parse the form data from body using body parser
     */
    app.use(
        bodyParser.urlencoded({
            extended: true,
        })
    )

    app.use(cookieParser())

    /**
     * parse the json from body using body parser
     */
    app.use(
        bodyParser.json({
            limit: '100mb',
        })
    )
    /**
     * Bind routes with express app
     */
    lumie.load(app, {
        preURL: 'api',
        verbose: true,
        ignore: ['*.spec', '*.action', '*.md'],
        controllers_path: path.join(__dirname, 'controllers'),
    })

    /**
     * Default exception handing
     */
    app.use(exceptionHandler)
    /**
     * get express port from .env
     * or declare with default value
     */
    const port = process.env.PORT || 3000

    /**
     * listen to the exposed port
     */
    app.listen(port, () => {
        // eslint-disable-next-line
        console.log('App server started on port ' + port)
    })
})()
