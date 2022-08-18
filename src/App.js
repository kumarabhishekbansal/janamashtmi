import React from 'react';
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
// import Home from './components/Home';
import Heading from './components/Heading';
// import Greetings from './components/Greetings';
import Quotes from './components/Quotes';
import Video from './components/videos';
const App = () => {
    return (
    <>
    <div className='bgimg d-flex flex-column'>
    </div>
        <Heading />
        <Quotes />
        <Video />
    </>
    )
}
export default App;