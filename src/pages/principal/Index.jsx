import React, {Fragment} from 'react';

// complements:
import Barra from '../layouts/Nav';
import Footer from '../layouts/Footer';
import Header from '../principal/Header';
import Intro from '../principal/Intro';
import Intro_2 from '../principal/Intro_2';

const Index = () => {
    return ( 
        <Fragment>
            <Barra />
            <Header />
            <Intro />
            <Intro_2 />
            <Footer />
        </Fragment>
     );
}
 
export default Index;