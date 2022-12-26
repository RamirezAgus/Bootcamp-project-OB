import React, { useState } from 'react';
import PropTypes from 'prop-types';

const GreetingFunction = (props) => {

//Intrdoduccion a useSate
//const [variable, metodo para actualizarlo] = useState(hook)(valor inicial)
    const [ age, setAge ] = useState(34)

    const birthday = () => {
        //actualizamos el state
        setAge(age + 1)
    }

    return(
        <div>
                <h1>
                    Hola { props.name } desde componente funcional!
                </h1>
                <h2>
                    Tu edad es de : { age }
                </h2>
                <div>
                    <button onClick={birthday}>Cumplir años</button>
                </div>
            </div>
    )
}

GreetingFunction.propTypes = {
    name: PropTypes.string
};

export default GreetingFunction