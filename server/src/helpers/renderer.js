import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter} from "react-router-dom"
import { Provider } from 'react-redux'
import { renderRoutes } from "react-router-config"
import serialize from 'serialize-javascript'

import Routes from '../client/Routes'

export default (req, store) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>
    )

    return `
        <html>
            <head></head>
             <body>
                <div id="root">${content}</div>
                <script>
                    window.INIITAL_STATE = ${serialize(store.getState())}
                </script>
                <!-- bundle.js is from publicly available 'public' dir -->
                <script src="bundle.js"></script>
            </body>
        </html>
    `
}
