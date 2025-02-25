import React from 'react'
import GameArtServicesFAQ from './GameArtServicesFAQ'
import GameArtServices from './GameArtServices'
import TopFeature from './TopFeature'
import GameArtModules from './GameArtModules'

const Body = () => {
    return (
        <div>
             <GameArtServices/>
             <TopFeature/>
             <GameArtModules/>
            <GameArtServicesFAQ />
        </div>
    )
}

export default Body
