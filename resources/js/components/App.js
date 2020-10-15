import React from 'react';
import Navbar from './NavigationComponents/Navbar';
import Carousel from './SliderComponents/Carousel';
import CarouselContent from './SliderComponents/CarouselContent';
import Slider from './SliderComponents/Slider';
import ModularForm from './FormComponents/ModularForm'
import BasicTable from './TableComponents/BasicTable';
import paginated from './MOCK_DATA.json'
import { Route, Switch } from 'react-router-dom'
import PaginatedTable from './TableComponents/PaginatedTable';

const App = () => {
    const items = [
        { source : 'https://lorempixel.com/800/400/food/1'},
        { source : 'https://lorempixel.com/800/400/food/2'},
        { source : 'https://lorempixel.com/800/400/food/3'},
        { source : 'https://lorempixel.com/800/400/food/4'},
        { source : 'https://lorempixel.com/800/400/food/5'}
    ]
    const options = {
        fullWidth : true,  indicators : true
    }
    const contentItems = [
        { header : 'Header 1 ', content : 'Content 1', detail : 'Detail 1', classes : 'blue white-text'},
        { header : 'Header 2 ', content : 'Content 2', detail : 'Detail 2', classes : 'green white-text'},
        { header : 'Header 3 ', content : 'Content 3', detail : 'Detail 3', classes : 'red white-text'},
        { header : 'Header 4 ', content : 'Content 4', detail : 'Detail 4', classes : 'pink black-text'}
    ]
    const sliderOptions = {
        interval : 3000
    }
    const sliderItems = [
        {
            img : 'https://lorempixel.com/580/250/nature/1',
            header : 'Header 1',
            content : 'Content 1',
            classes : 'center-align'
        },
        {
            img : 'https://lorempixel.com/580/250/nature/2',
            header : 'Header 2',
            content : 'Content 2',
            classes : 'left-align'
        },
        {
            img : 'https://lorempixel.com/580/250/nature/3',
            header : 'Header 3',
            content : 'Content 3',
            classes : 'right-align'
        },
        {
            img : 'https://lorempixel.com/580/250/nature/4',
            header : 'Header 4',
            content : 'Content 4',
            classes : 'center-align'
        }
    ]
    const navbarOptions = {
        edge : 'left'
    }
    const navbarContent = {
            logo : ' React | Materialize Components',
            items : [
                { link: '/carousel', title : 'Carousels'},
                { link: '/slider', title : 'Sliders'},
                { link: '/forms', title : 'Forms'}, 
                { link: '/slidercon', title : 'ContentSlider'},
                { link:'/tables', title:'Basic Table'},
                { link:'/paginatedtables', title : 'DataTables'}
            ]
    }
    const tableData = [
        { first_name : 'Francis', last_name : 'Kiragu', dob : '1995/10/12', profession:'Engineer' },
        { first_name : 'James', last_name : 'Mukaria', dob : '1983/2/4', profession : 'Architect'},
        { first_name : 'Jane', last_name : 'Wangari', dob : '1994/6/8', profession : 'News Anchor'}
    ]
    const tableColumns = ['First Name', 'Last Name', 'Date of Birth', 'Profession']
    const paginatedColumns = [
        { key : 'id', value :'ID'}, { key : 'first_name', value : 'First Name'},
        { key : 'last_name', value : 'Last Name'}, { key : 'email', value : 'Email'},
        { key : 'gender', value : 'Gender'}, { key : 'ip_address', value : 'IP Address'}
    ]
    
    return (
        <>
            <Navbar content={navbarContent} options={navbarOptions} navclass="purple"/>
            <Switch>
                <Route path='/carousel' render={() => <Carousel items={items} options ={ options } classes="carousel carousel-slider" />}/>
                <Route path='/forms' render ={ () => <ModularForm/> }/>
                <Route path='/slider' render={ () => <Slider items={ sliderItems } options ={sliderOptions}/> }/>
                <Route path='/slidercon' render={() => <CarouselContent items={contentItems}/> }/>
                <Route path="/tables" render = {() => <BasicTable classes="responsive-table" columns={tableColumns} data={tableData} /> } />
                <Route path="/paginatedtables" render = {() => <PaginatedTable data={paginated} columns={paginatedColumns} /> } />
                <Route path='/' exact render={() => <div className="container center">Select Component to view.</div>}/>
            </Switch>
            {/* <Header/> */}
        </>
    );
}
export default App;