import React from 'react';
import Banner from '../Banner/Banner';
import NewArrival from '../NewArrival/NewArrival';
import Footer from '../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <NewArrival></NewArrival>
            <Footer></Footer>
        </div>
    );
};

export default Home;