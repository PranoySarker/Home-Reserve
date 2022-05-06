import React from 'react';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import NewArrival from '../NewArrival/NewArrival';
import Footer from '../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <NewArrival></NewArrival>
            <Footer></Footer>
        </div>
    );
};

export default Home;