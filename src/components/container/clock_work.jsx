import React, { useState, useEffect } from 'react';
import '../../styles/clock.scss';

const ClockWork = () => {

const [person, setPerson] = useState({
    fecha: new Date(),
    edad: 0,
    nombre: 'Martin',
    apellido: 'San José'
});

useEffect(() => {
    const timerID = setInterval (() => tick(), 1000)
    return () => {clearInterval(timerID)};
}, []);

const tick = () => {
    setPerson(prevState => {
        let edad = prevState.edad + 1
        return {
            ...prevState,
            fecha: new Date(),
            edad,
        }
    })
}




    return (
        <div>
            <h2>
                Hora actual:
                { person.fecha.toLocaleTimeString() }
            </h2>
            <h3>
                { person.nombre } {person.apellido}
            </h3>
            <h1>Edad: { person.edad }</h1>
        </div>
    );
}

export default ClockWork;
