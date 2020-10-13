import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ModularForm from './FormComponents/ModularForm';
//import GenForm from './FormComponents/GenForm'

function MainComponent() {
    return (
        <div>
             <App/>
        </div>
    );
}

export default MainComponent;

if (document.getElementById('MainComponent')) {
    ReactDOM.render(<MainComponent />, document.getElementById('MainComponent'));
}
