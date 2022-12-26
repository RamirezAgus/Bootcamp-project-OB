import React, { useState } from 'react';



// Definiendo estilos en constantes.

// Estilos para usuario logueado.
const loggedStyle = {
    color: 'blue'
};

// Estilos para usuario no logueado.
const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
};


const GreetingStyled = (props) => {

// Generamos un estado para el componente y asi controlar si el usuario esta logueado o no.
const [logged, setLogged] = useState(false);


    return (
        <div style={ logged ? loggedStyle : unloggedStyle }>
            { logged ? 
                (<p>Hola, {props.name}</p>) 
                    : 
                (<p>Please Login</p>) 
            }

            <button onClick={() => {
                console.log('Boton pulsado')
                setLogged(!logged);
            }}>
                { logged ? 'Logout' : 'Login' }
            </button>
        </div>
    );
}

export default GreetingStyled;
