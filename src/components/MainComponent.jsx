import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Body from './Body/Body';


const MainComponent = ()=>  {
    return ( 
        <div className='container'>
            <Header />
            <Body/>
            <Footer />
        </div>
     );
}

export default MainComponent;