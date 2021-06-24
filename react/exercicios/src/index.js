import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './components/Pai'
import Filho from './components/Filho'

// const elemento = <h1>React 2</h1>

ReactDOM.render(
    <div>
        <Pai nome="Jamil" sobrenome="Silva" />
    </div>
, document.getElementById('root'))

// $('<h1>').html('React 2')