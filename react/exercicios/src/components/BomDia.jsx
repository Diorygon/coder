import React, {Fragment} from 'react'

export default props => 
    <Fragment>
        <h1>Bom dia {props.nome}!</h1>
        <h2>Você tem {props.idade} anos!</h2>
    </Fragment>

// export default props => 
// <div>
//     <h1>Bom dia {props.nome}!</h1>
//     <h2>Você tem {props.idade} anos!</h2>
// </div>