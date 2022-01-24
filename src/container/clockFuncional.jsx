import React, {useState} from 'react';
import Clock from './clock';

const Clockfuncional = () => {

    const persona = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellido: 'San José'
    }

    const [fecha, setFecha] = useState(persona.fecha);
    const [edad, setEdad] = useState(persona.edad);

    const actualizarFecha = setInterval(() => {
        setFecha(new Date());
        setEdad(edad + 1);
    }, 1000);
    
    return (
        <div>
            <h2>
                Hora Actual: {fecha.toLocaleTimeString()}
            </h2>
            <h3>
                {persona.nombre} {persona.apellido}
            </h3>
            <h1>
                Edad: {edad}
            </h1>
        </div>
    );
}

export default Clockfuncional;
