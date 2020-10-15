import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

function MainComponent() {
    return (
        <div>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </div>
    );
}

export default MainComponent;

if (document.getElementById('MainComponent')) {
    ReactDOM.render(<MainComponent />, document.getElementById('MainComponent'));
}
