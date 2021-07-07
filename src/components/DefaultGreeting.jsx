//r34c7
import React from 'react';

//custom components
import logo from '../assets/img/logo.svg';

//scss
import './DefaultGreeting.scss';

const DefaultGreeting = () => {
   
    return (
        <div>
            <div className="App-headerz">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p className="body-text">
                        { window.claseID } - Alumno: Juan Vidal | Camada: {window.camadaID}
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
            </div>
        </div>
    )
}

export default DefaultGreeting;
