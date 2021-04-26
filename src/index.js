import React from 'react';
import ReactDOM from 'react-dom'; 
import './componentes/index.css';
import App from './componentes/App';

const StartComponent = () => {
    return <h1>New React App</h1>;  
}

ReactDOM.render(<App />, document.getElementById('root'));