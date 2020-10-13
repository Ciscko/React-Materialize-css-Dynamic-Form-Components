import React from 'react';
import Header from './Header';
import Carousel from './SliderComponents/Carousel';
import CarouselContent from './SliderComponents/CarouselContent';
const App = (props) => {

    const items = [
        { source : 'https://lorempixel.com/800/400/food/1'},
        { source : 'https://lorempixel.com/800/400/food/2'},
        { source : 'https://lorempixel.com/800/400/food/3'},
        { source : 'https://lorempixel.com/800/400/food/4'},
        { source : 'https://lorempixel.com/800/400/food/5'}
    ]
    const options = {
        fullWidth : true, numVisible: 10, indicators : true
    }
    const contentItems = [
        { header : 'Header 1 ', content : 'Content 1', detail : 'Detail 1', classes : 'blue white-text'},
        { header : 'Header 2 ', content : 'Content 2', detail : 'Detail 2', classes : 'green white-text'},
        { header : 'Header 3 ', content : 'Content 3', detail : 'Detail 3', classes : 'red white-text'},
        { header : 'Header 4 ', content : 'Content 4', detail : 'Detail 4', classes : 'pink black-text'}
    ]
    return (
        <div>
            <Header/>
            {/* <Carousel items={items} options ={ options } classes="carousel carousel-slider" /> */}
            <CarouselContent items={contentItems}/>
        </div>
    );
}
export default App;