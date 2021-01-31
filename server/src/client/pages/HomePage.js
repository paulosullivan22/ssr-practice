import React from 'react'

const HomePage = () => {
    return (
        <div>
            <div>I'm the test home component.</div>
            <button onClick={() => console.log('clicky clicky')}>clicky clicky</button>
        </div>
    )
}

export default {
    component: HomePage
}
