import React from 'react';
import ReactDOM from 'react-dom';
import ModularForm from './FormComponents/ModularForm';
import Header from './Header';
//import GenForm from './FormComponents/GenForm'

function MainComponent() {
    return (
        <div>
           <Header/>
          <ModularForm/>
        </div>
    );
}

export default MainComponent;

if (document.getElementById('MainComponent')) {
    ReactDOM.render(<MainComponent />, document.getElementById('MainComponent'));
}
